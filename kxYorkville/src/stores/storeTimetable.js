import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, setDoc, updateDoc } from 'firebase/firestore'
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
    // Get Classes
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
    }
  }
})
