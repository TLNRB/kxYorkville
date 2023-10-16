import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, updateDoc, getDoc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { auth, db } from '../firebase/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
/*----- Import store -----*/
import { useStoreAuth } from './storeAuth.js'

const usersCollectionRef = collection(db, 'users')

export const useStoreUserService = defineStore('storeUserService', {
  state: () => {
    return {
      // Storing user auth data
      userAuth: {},
      // Storing user data
      userData: {},
      imgName: null,
      img: null
    }
  },

  actions: {
    init() {
      onAuthStateChanged(auth, async (user) => {
        // If user is logged in or registered
        if (user) {
          // Storing user auth data
          this.userAuth.id = user.uid
          this.userAuth.email = user.email

          // Document reference
          const docRef = doc(db, 'users', this.userAuth.id)
          const docSnap = await getDoc(docRef)
          // If user data exists (the user logged in)
          if (docSnap.exists()) {
            // Getting user data
            let singleUser = {
              id: docSnap.id,
              firstName: docSnap.data().firstName,
              lastName: docSnap.data().lastName,
              username: docSnap.data().username,
              email: docSnap.data().email,
              favouriteClass: docSnap.data().favouriteClass,
              reservedClasses: docSnap.data().reservedClasses,
              imgName: docSnap.data().imgName,
              img: docSnap.data().img
            }
            this.userData = singleUser
          }
          // If user data doesn't exist (the user registered)
          else {
            // Adding user data to the database
            this.addUserData(useStoreAuth().userData)
          }
        }
        // If user is logged out
        else {
          this.userAuth = {}
          this.userData = {}
        }
      })
    },
    //--Add User Data
    async addUserData(userData) {
      await setDoc(doc(usersCollectionRef, this.userAuth.id), {
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        email: userData.email,
        favouriteClass: '',
        reservedClasses: [],
        imgName: '',
        img: ''
      })
    }
  }
})
