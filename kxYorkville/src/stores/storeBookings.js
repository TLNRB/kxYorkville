import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const bookingsCollectionRef = collection(db, 'bookings')

export const useStoreBookings = defineStore('storeBookings', {
  state: () => {
    return {
      userBookings: [],
      bookings: []
    }
  },

  actions: {
    // Get Bookings
    async getBookings(id) {
      const unsubscribe = onSnapshot(bookingsCollectionRef, (querySnapshot) => {
        let bookings = []
        let userBookings = []
        querySnapshot.forEach((doc) => {
          if (id === doc.data().userID) {
            let userBooking = {
              id: doc.id,
              userID: doc.data().userID,
              class: doc.data().class,
              coach: doc.data().coach,
              day: doc.data().day,
              month: doc.data().month,
              from: doc.data().from,
              to: doc.data().to
            }
            userBookings.push(userBooking)
          }
          let booking = {
            id: doc.id,
            class: doc.data().class,
            day: doc.data().day,
            from: doc.data().from
          }
          bookings.push(booking)
        })
        this.userBookings = userBookings
        this.bookings = bookings
      })
    },
    // Add Booking
    async addBooking(bookingData, id) {
      let condition = false
      this.userBookings.forEach((booking) => {
        if (
          booking.userID === id &&
          booking.class === bookingData.class &&
          booking.day === bookingData.day &&
          booking.from === bookingData.from
        ) {
          condition = true
          return
        }
      })
      if (!condition) {
        await addDoc(bookingsCollectionRef, {
          userID: id,
          class: bookingData.class,
          coach: bookingData.coach,
          day: bookingData.day,
          month: bookingData.month,
          from: bookingData.from,
          to: bookingData.to
        })
      }
    },
    // Delete Booking
    async deleteBooking(id) {
      await deleteDoc(doc(bookingsCollectionRef, id))
    }
  }
})
