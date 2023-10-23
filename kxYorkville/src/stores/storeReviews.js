import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc, deleteDoc, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'

const reviewsCollectionRef = collection(db, 'reviews')
const reviewsCollectionQuery = query(reviewsCollectionRef, orderBy('date', 'desc'))

export const useStoreReviews = defineStore('storeReviews', {
  state: () => {
    return {
      reviews: []
    }
  },

  actions: {
    // Get Reviews
    async getReviews() {
      const unsubscribe = onSnapshot(reviewsCollectionRef, (querySnapshot) => {
        let reviews = []
        querySnapshot.forEach((doc) => {
          let review = {
            id: doc.id,
            userID: doc.data().userID,
            username: doc.data().username,
            userImg: doc.data().userImg,
            review: doc.data().review,
            date: doc.data().date
          }
          reviews.push(review)
        })
        this.reviews = reviews
      })
    },
    // Add Review
    async addReview(reviewContent) {
      await addDoc(reviewsCollectionRef, {
        userID: reviewContent.userID,
        username: reviewContent.username,
        userImg: reviewContent.userImg,
        review: reviewContent.review,
        date: reviewContent.date
      })
    },
    // Delete Review
    async deleteReview(id) {
      await deleteDoc(doc(reviewsCollectionRef, id))
    }
  }
})
