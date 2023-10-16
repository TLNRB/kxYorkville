import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const usernamesCollectionRef = collection(db, 'usernames')

export const useStoreUsernames = defineStore('storeUsernames', {
  state: () => {
    return {
      usernames: [],
      message: '',
      error: ''
    }
  },

  actions: {
    // Get Usernames
    async getUsernames() {
      const unsubscribe = onSnapshot(usernamesCollectionRef, (querySnapshot) => {
        let usernames = []
        querySnapshot.forEach((doc) => {
          let username = {
            id: doc.id,
            username: doc.data().username
          }
          usernames.push(username)
        })
        this.usernames = usernames
      })
    },
    // Add Username
    async addUsername(username) {
      let condition = false
      for (let i = 0; i < this.usernames.length; i++) {
        if (this.usernames[i].username === username) {
          condition = true
          return
        }
      }
      if (condition === false) {
        await addDoc(usernamesCollectionRef, {
          username: username
        })
      } else {
        error = 'Username already exists'
      }
    },
    // Update Username
    async updateUsername(username, id) {
      let condition = false
      for (let i = 0; i < this.usernames.length; i++) {
        if (this.usernames[i].username === username) {
          condition = true
          return
        }
      }
      if (condition === false) {
        await updateDoc(doc(usernamesCollectionRef, id), {
          username: username
        })
        message = 'Username updated'
      } else {
        error = 'Username already exists'
      }
    }
  }
})
