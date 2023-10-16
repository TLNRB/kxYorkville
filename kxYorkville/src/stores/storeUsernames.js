import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db } from '../firebase/firebase.js'

const usernamesCollectionRef = collection(db, 'usernames')

export const useStoreUsernames = defineStore('storeUsernames', {
  state: () => {
    return {
      usernames: [],
      message: ''
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
        return 'Username created'
      } else {
        return 'Username already exists'
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
        message = 'Username already exists'
      }
    }
  }
})
