import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const timetableDocRef = doc(db, 'timetable', 'ZB5rtoe3MxG2BZNflqbZ')
const daysCollectionRef = collection(timetableDocRef, 'days')

export const useStoreTimetable = defineStore('storeTimetable', {
  state: () => {
    return {
      days: [],
      imgName: null,
      img: null
    }
  },

  actions: {
    // Get Timetable
    async getTimetable() {
      const unsubscribe = onSnapshot(daysCollectionRef, (querySnapshot) => {
        let days = []
        querySnapshot.forEach((doc) => {
          let day = {
            id: doc.id,
            day: doc.data().day,
            classes: doc.data().classes
          }
          days.push(day)
        })
        this.days = days
      })
    },
    // Update Timetable Reserved Classes
    async updateTimetableReservedClass(id, classesIndex, operation) {
      // Get the document reference from Firestore
      const docRef = doc(daysCollectionRef, id)
      // Get the document snapshot from Firestore
      const docSnap = await getDoc(docRef)
      // Get the data from the document snapshot
      const data = docSnap.data()
      // Get the "classes" array from the data
      const classes = data.classes

      if (operation == 'reserve') {
        // Update the "reserved" field of the specified class
        classes[classesIndex].reserved++
        // Update the entire "classes" array in the Firestore document.
        await updateDoc(docRef, { classes })
      } else if (operation == 'delete') {
        // Update the "reserved" field of the specified class
        classes[classesIndex].reserved--
        // Update the entire "classes" array in the Firestore document.
        await updateDoc(docRef, { classes })
      }
    }
  }
})
