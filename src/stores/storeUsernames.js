import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const usernamesCollectionRef = collection(db, 'usernames')

export const useStoreUsernames = defineStore('storeUsernames', {
  state: () => {
    return {
      usernames: []
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
    // Check Username
    checkUsername(username) {
      let condition = false
      for (let i = 0; i < this.usernames.length; i++) {
        if (this.usernames[i].username === username) {
          console.log(this.usernames[i].username, username)
          condition = true
          break
        }
      }
      if (condition) {
        // Username already exists
        return true
      }
    },
    // Add Username
    async addUsername(username, id) {
      await setDoc(doc(usernamesCollectionRef, id), {
        username: username
      })
    },
    // Update Username
    async updateUsername(username, id) {
      await updateDoc(doc(usernamesCollectionRef, id), {
        username: username
      })
    }
  }
})
