import { defineStore } from 'pinia'
import { auth } from '../firebase/firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    userData: {},
    error: null
  }),

  actions: {
    init() {},
    //Register User
    registerUser(credentials) {
      // Setting temp user data
      const userData = {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        username: credentials.username,
        email: credentials.email,
        favouriteClass: '',
        reservedClasses: [],
        imgName: '',
        img: ''
      }
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then(() => {
          //Registered
          // Adding user data to state
          this.userData = userData
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
        .then(() => {
          //Logged in
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
