const {setGlobalOptions} = require("firebase-functions/v2/options");

// Set the maximum instances to 10 for all functions
setGlobalOptions({maxInstances: 1});

// The Cloud Functions for Firebase SDK to set up triggers and logging.
const {onSchedule} = require("firebase-functions/v2/scheduler");

const admin = require("firebase-admin");

const serviceAccount = require("./service-account-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.bookingsCleanup = onSchedule("every day 00:00", async (event) => {
  /* ===== Delete bookings made on previus day =====*/
  const currentDateTime = new Date();
  console.log("currentDateTime", currentDateTime);
  // Calculate the datetime of the previous date
  currentDateTime.setDate(currentDateTime.getDate() - 1);

  const previusDate = currentDateTime.getDate();
  console.log("previusDate", previusDate);

  // Reference to your Firestore collection
  const bookingsRef = admin.firestore().collection("bookings");

  // Query bookings made on the previous day
  const querySnapshot = await bookingsRef
      .where("day", "==", previusDate).get();

  // Delete the bookings
  const batch = admin.firestore().batch();
  querySnapshot.forEach((doc) => {
    console.log("preparing to delete", doc.id);
    batch.delete(doc.ref);
  });

  // Commit the batch
  await batch.commit();
  console.log("deleted bookings");

  // Set the reserved number of classes back to 0 on each class
  // Calculate the datetime of the previous day
  const previousDay = currentDateTime.getDay();
  console.log("previousDay", previousDay);
  // Reference to your Firestore collection
  const timetableRef = admin.firestore().collection("timetable");
  // Get the previous day doc of the timetable collection
  const dayDoc = await timetableRef
      .doc("ZB5rtoe3MxG2BZNflqbZ")
      .collection("days")
      .doc(previousDay.toString())
      .get();
  console.log("dayDoc", dayDoc);

  // Converting to an object
  const day = {...dayDoc.data()};
  console.log("day", day);

  day.classes.forEach((classItem) => {
    classItem.reserved = 0;
  });

  // Update the previous day doc
  await dayDoc.ref.update(day);
  console.log("dayDoc updated", dayDoc.id);

  return null;
},
);
