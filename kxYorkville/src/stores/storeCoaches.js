import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db } from '../firebase/firebase.js'

const coachesCollectionRef = collection(db, 'coaches')

export const useStoreCoaches = defineStore('storeCoaches', {
  state: () => {
    return {
      coaches: [],
      imgName: null,
      img: null
    }
  },

  actions: {
    // Get Coaches
    async getCoaches() {
      const unsubscribe = onSnapshot(coachesCollectionRef, (querySnapshot) => {
        let coaches = []
        querySnapshot.forEach((doc) => {
          let singleCoach = {
            id: doc.id,
            name: doc.data().name,
            routing: doc.data().routing,
            motto: doc.data().motto,
            profession: doc.data().profession,
            imgName: doc.data().imgName,
            img: doc.data().img
          }
          coaches.push(singleCoach)
        })
        this.coaches = coaches
      })
    },
    // Add Coach
    async addCoach(coachContent) {
      await addDoc(coachesCollectionRef, {
        name: coachContent.name,
        routing: coachContent.name.replace(/ /g, '-').toLowerCase(),
        motto: coachContent.motto,
        profession: coachContent.profession,
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
    // Close Add Coach
    closeAddCoach() {
      if (this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        for (let i = 0; i < this.coaches.length; i++) {
          if (this.coaches[i].imgName === this.imgName) {
            imageCondition = true
          }
        }

        if (!imageCondition) {
          deleteObject(imageRef)
        }
      }
      this.img = null
      this.imgName = null
    },
    // Delete Coach
    async deleteCoach(id) {
      const filteredCoach = this.coaches.filter((singleCoach) => singleCoach.id === id)
      // Create a reference to the image
      const imageRef = ref(getStorage(), filteredCoach[0].img)
      //Check if another class uses the same picture
      let imageCondition = false
      for (let i = 0; i < this.coaches.length; i++) {
        if (
          this.coaches[i].imgName === filteredCoach[0].imgName &&
          this.coaches[i].id !== filteredCoach[0].id
        ) {
          imageCondition = true
        }
      }

      if (!imageCondition && filteredCoach[0].imgName) {
        deleteObject(imageRef)
      }
      await deleteDoc(doc(coachesCollectionRef, id))
      imageCondition = false
    },
    // Close Editing
    closeEditing(id) {
      const filteredCoach = this.coaches.filter((singleCoach) => singleCoach.id === id)
      // Check if the image has been changed
      if (filteredCoach[0].img !== this.img && this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        for (let i = 0; i < this.coaches.length; i++) {
          if (this.coaches[i].imgName === this.imgName) {
            imageCondition = true
          }
        }

        if (!imageCondition) {
          deleteObject(imageRef)
        }
      }
      this.img = null
      this.imgName = null
    },
    // Update Coach
    async updateCoach(coachContent, id) {
      await updateDoc(doc(coachesCollectionRef, id), {
        name: coachContent.name,
        routing: coachContent.name.replace(/ /g, '-').toLowerCase(),
        motto: coachContent.motto,
        profession: coachContent.profession
      })
    },
    // Update Image
    async updateImage(id) {
      const filteredCoach = this.coaches.filter((singleCoach) => singleCoach.id === id)
      // Check if the image has been changed
      if (filteredCoach[0].img !== this.img && this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), filteredCoach[0].imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        for (let i = 0; i < this.coaches.length; i++) {
          if (
            this.coaches[i].imgName === filteredCoach[0].imgName &&
            this.coaches[i].id !== filteredCoach[0].id
          ) {
            imageCondition = true
          }
        }

        if (!imageCondition) {
          deleteObject(imageRef)
        }

        await updateDoc(doc(coachesCollectionRef, id), {
          imgName: this.imgName,
          img: this.img
        })
      }
      this.imgName = null
      this.img = null
    }
  }
})
