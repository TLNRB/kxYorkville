import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { db } from '../firebase/firebase.js'

const classesCollectionRef = collection(db, 'classes')

export const useStoreClasses = defineStore('storeClasses', {
  state: () => {
    return {
      classes: [],
      imgName: null,
      img: null
    }
  },

  actions: {
    // Get Classes
    async getClasses() {
      const unsubscribe = onSnapshot(classesCollectionRef, (querySnapshot) => {
        let classes = []
        querySnapshot.forEach((doc) => {
          let singleClass = {
            id: doc.id,
            name: doc.data().name,
            routing: doc.data().routing,
            description: doc.data().description,
            intensity: doc.data().intensity,
            duration: doc.data().duration,
            classType: doc.data().classType,
            coaches: doc.data().coaches,
            imgName: doc.data().imgName,
            img: doc.data().img
          }
          classes.push(singleClass)
        })
        this.classes = classes
      })
    },
    // Add Class
    async addClass(classContent) {
      await addDoc(classesCollectionRef, {
        name: classContent.name,
        routing: classContent.name.replace(/ /g, '-').toLowerCase(),
        description: classContent.description,
        intensity: classContent.intensity,
        duration: classContent.duration,
        classType: classContent.classType,
        coaches: classContent.coaches,
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
    // Close Add Class
    closeAddClass() {
      if (this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        for (let i = 0; i < this.classes.length; i++) {
          if (this.classes[i].imgName === this.imgName) {
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
    // Delete Class
    async deleteClass(id) {
      const filteredClass = this.classes.filter((singleClass) => singleClass.id === id)
      // Create a reference to the image
      const imageRef = ref(getStorage(), filteredClass[0].img)
      //Check if another class uses the same picture
      let imageCondition = false
      for (let i = 0; i < this.classes.length; i++) {
        if (
          this.classes[i].imgName === filteredClass[0].imgName &&
          this.classes[i].id !== filteredClass[0].id
        ) {
          imageCondition = true
        }
      }

      if (!imageCondition && filteredClass[0].imgName) {
        deleteObject(imageRef)
      }
      await deleteDoc(doc(classesCollectionRef, id))
      imageCondition = false
    },
    // Close Editing
    closeEditing(id) {
      const filteredClass = this.classes.filter((singleClass) => singleClass.id === id)
      // Check if the image has been changed
      if (filteredClass[0].img !== this.img && this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), this.imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        for (let i = 0; i < this.classes.length; i++) {
          if (this.classes[i].imgName === this.imgName) {
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
    // Update Class
    async updateClass(classContent, id) {
      await updateDoc(doc(classesCollectionRef, id), {
        name: classContent.name,
        routing: classContent.name.replace(/ /g, '-').toLowerCase(),
        description: classContent.description,
        intensity: classContent.intensity,
        duration: classContent.duration,
        classType: classContent.classType,
        coaches: classContent.coaches
      })
    },
    // Update Image
    async updateImage(id) {
      const filteredClass = this.classes.filter((singleClass) => singleClass.id === id)
      // Check if the image has been changed
      if (filteredClass[0].img !== this.img && this.imgName != null && this.img != null) {
        // Create a reference to the image
        const imageRef = ref(getStorage(), filteredClass[0].imgName)
        //Check if another class uses the same picture
        let imageCondition = false
        for (let i = 0; i < this.classes.length; i++) {
          if (
            this.classes[i].imgName === filteredClass[0].imgName &&
            this.classes[i].id !== filteredClass[0].id
          ) {
            imageCondition = true
          }
        }

        if (!imageCondition) {
          deleteObject(imageRef)
        }

        await updateDoc(doc(classesCollectionRef, id), {
          imgName: this.imgName,
          img: this.img
        })
      }
      this.imgName = null
      this.img = null
    }
  }
})
