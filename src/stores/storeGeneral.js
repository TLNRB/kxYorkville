import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const generalCollectionRef = collection(db, 'general')

export const useStoreGeneral = defineStore('storeGeneral', {
  state: () => {
    return {
      id: '',
      phone: '',
      email: '',
      address: '',
      version: '',
      mondayFriday: '',
      saturday: '',
      sunday: ''
    }
  },

  actions: {
    // Get General Contact
    async getGeneral() {
      const unsubscribe = onSnapshot(generalCollectionRef, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          ;(this.id = doc.id),
            (this.phone = doc.data().phone),
            (this.email = doc.data().email),
            (this.address = doc.data().address),
            (this.version = doc.data().version),
            (this.mondayFriday = doc.data().mondayFriday),
            (this.saturday = doc.data().saturday),
            (this.sunday = doc.data().sunday)
        })
      })
    },
    // Update General
    async updateGeneral(generalContent) {
      await updateDoc(doc(generalCollectionRef, this.id), {
        phone: generalContent.phone,
        email: generalContent.email,
        address: generalContent.address,
        version: generalContent.version,
        mondayFriday: generalContent.mondayFriday,
        saturday: generalContent.saturday,
        sunday: generalContent.sunday
      })
    }
  }
})
