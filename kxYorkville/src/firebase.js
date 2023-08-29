// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDoP1XlO2qvguMHohjOEMczLsB4SOXdpQ0',
  authDomain: 'gym-kxyorkville.firebaseapp.com',
  projectId: 'gym-kxyorkville',
  storageBucket: 'gym-kxyorkville.appspot.com',
  messagingSenderId: '856204947945',
  appId: '1:856204947945:web:7719ee286006c0a94f1b78'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }