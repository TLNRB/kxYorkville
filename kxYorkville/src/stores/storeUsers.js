import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, updateDoc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db } from '../firebase/firebase.js'
/* ----- Import stores ----- */
import { useStoreAuth } from '../stores/storeAuth.js'

const usersCollectionRef = collection(db, 'users')
let singleUserDocRef
let getUserSnapshot = null

export const useStoreUsers = defineStore('storeUsers', {
  state: () => {
    return {
      user: {},
      imgName: null,
      img: null
    }
  },

  actions: {
    init() {
      // Initialize the stores
      const storeAuth = useStoreAuth()
      // Initialize the users document ref
      singleUserDocRef = doc(db, 'users', storeAuth.user.id)
      // Get the user
      this.getUser()
    },
    // Get User
    async getUser() {
      // Get the user document
      getUserSnapshot = onSnapshot(singleUserDocRef, (doc) => {
        let singleUser = {
          id: doc.id,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          username: doc.data().username,
          email: doc.data().email,
          favouriteClass: doc.data().favouriteClass,
          reservedClasses: doc.data().reservedClasses,
          imgName: doc.data().imgName,
          img: doc.data().img
        }
        this.user = singleUser
      })
    },
    clearUser() {
      this.user = []
      if (getUserSnapshot) getUserSnapshot() // unsubscribe from any active listener
    },
    // Add User ***** NOT DONE *****
    async addUser(userContent) {
      await setDoc(doc(usersCollectionRef, storeAuth.user.id), {
        firstName: userContent.firstName,
        lastName: userContent.lastName,
        username: userContent.username,
        email: userContent.email,
        favouriteClass: userContent.favouriteClass,
        reservedClasses: userContent.reservedClasses,
        imgName: this.imgName,
        img: this.img
      })
      this.imgName = null
      this.img = null
    },
    // Get Image Url
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
    // Close Settings Editing
    closeEditingSettings() {
      // Check if the image has been changed
      if (this.user.img !== this.img && this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        if (this.user.imgName === this.imgName) {
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
    async updateSettings(userContent) {
      await updateDoc(doc(singleUserDocRef), {
        username: userContent.username,
        favouriteClass: userContent.favouriteClass
      })
    },
    // Update Settings Image
    async updateImage() {
      // Check if the image has been changed
      if (this.user.img !== this.img && this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.user.imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        if (this.user.imgName === this.imgName) {
          imageCondition = true
        }

        if (!imageCondition) {
          deleteObject(imageRef)
        }

        await updateDoc(doc(singleUserDocRef), {
          imgName: this.imgName,
          img: this.img
        })
      }
      this.imgName = null
      this.img = null
    }
  }
})
