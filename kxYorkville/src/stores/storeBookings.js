import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const bookingsCollectionRef = collection(db, 'bookings')

export const useStoreBookings = defineStore('storeBookings', {
  state: () => {
    return {
      bookings: []
    }
  },

  actions: {
    // Get Bookings
    async getBookings() {
      const unsubscribe = onSnapshot(bookingsCollectionRef, (querySnapshot) => {
        let bookings = []
        querySnapshot.forEach((doc) => {
          let booking = {
            id: doc.id,
            class: doc.data().class,
            day: doc.data().day,
            from: doc.data().from
          }
          bookings.push(booking)
        })
        this.bookings = bookings
      })
    },
    // Add Booking
    async addBooking(bookingData, id) {
      await setDoc(doc(bookingsCollectionRef, id), {
        class: bookingData.class,
        day: bookingData.day,
        from: bookingData.from
      })
    },
    // Delete Booking
    async deleteBooking(id) {
      await deleteDoc(doc(bookingsCollectionRef, id))
    }
  }
})
