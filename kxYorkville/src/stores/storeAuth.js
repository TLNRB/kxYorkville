import { defineStore } from 'pinia'
import { auth } from '../firebase/firebase.js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
/* ----- Import stores ----- */
import { useStoreUsers } from '../stores/storeUsers.js'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {},
    error: null
  }),

  actions: {
    init() {
      const storeUsers = useStoreUsers()

      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid
          this.user.email = user.email
          // Get the user by unique id
          storeUsers.init()
          /* this.router.push('/admin') */
        } else {
          this.user = {}
          storeUsers.clearUser()
        }
      })
    },
    //Register User
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredentials) => {
          //Registered
          const user = userCredentials.user
          this.error = ''
        })
        .catch((error) => {
          this.error = error.message
          console.log('error message: ', error.message)
          setInterval(() => {
            this.error = ''
          }, 5000)
        })
    },
    //Login User
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredentials) => {
          //Logged in
          const user = userCredentials.user
          this.error = ''
        })
        .catch((error) => {
          this.error = error.message
          console.log('error message: ', error.message)
          setInterval(() => {
            this.error = ''
          }, 5000)
        })
    },
    //Logout User
    logOutUser() {
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          console.log('error message: ', error.message)
        })
    }
  }
})
