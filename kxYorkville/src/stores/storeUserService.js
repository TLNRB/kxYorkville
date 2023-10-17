import { defineStore } from 'pinia'
import { collection, doc, updateDoc, getDoc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { auth, db } from '../firebase/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'
/*----- Import store -----*/
import { useStoreAuth } from './storeAuth.js'
import { useStoreUsernames } from './storeUsernames.js'

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
          useStoreAuth().userData = {}
        }
      })
    },
    //--Add User Data
    async addUserData(userData) {
      useStoreUsernames().addUsername(userData.username, this.userAuth.id)
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
    },
    //--Get Image Url
    async getImageUrl(imageName, file) {
      // Create a root reference
      const storage = getStorage()
      // Create a reference to the image
      const imageRef = ref(storage, imageName)

      this.imgName = imageName
      await uploadBytes(imageRef, file)
      await getDownloadURL(ref(storage, imageName)).then((url) => {
        this.img = url
      })
    },
    //--Close Settings Editing
    closeEditingSettings() {
      // Check if the image has been changed
      if (this.userData.img !== this.img && this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        if (this.userData.imgName === this.imgName) {
          imageCondition = true
        }

        if (!imageCondition) {
          deleteObject(imageRef)
        }
      }
      this.img = null
      this.imgName = null
    },
    // Update Settings
    async updateSettings(userContent, id) {
      await updateDoc(doc(usersCollectionRef, id), {
        username: userContent.username,
        favouriteClass: userContent.favouriteClass
      })
    },
    // Update Settings Image
    async updateImage(id) {
      // Check if the image has been changed
      if (this.userData.img) {
      }
      if (this.userData.img !== this.img && this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.userData.imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        // If the user didn't have an image before
        if (this.userData.imgName === '') {
          imageCondition = true
        }
        // If the user had an image before
        else if (this.userData.imgName === this.imgName) {
          imageCondition = true
        }

        if (!imageCondition) {
          deleteObject(imageRef)
        }

        await updateDoc(doc(usersCollectionRef, id), {
          imgName: this.imgName,
          img: this.img
        })
      }
      this.imgName = null
      this.img = null
    }
  }
})
