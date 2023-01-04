import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, deleteDoc, onSnapshot, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCfeqPYO1TRzxJBciikxai-SG-6ri9mMN8',
  authDomain: 'cadastrodecontadores.firebaseapp.com',
  projectId: 'cadastrodecontadores',
  storageBucket: 'cadastrodecontadores.appspot.com',
  messagingSenderId: '392024495537',
  appId: '1:392024495537:web:8fdee6a5098c4f8f611990'
}
let users
// init Firebase
initializeApp(firebaseConfig)
// init Services
const db = getFirestore()
// collection ref
const ref = collection(db, 'users')
// real collection data
onSnapshot(ref, (snapShot) => {
  users = []
  snapShot.docs.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id })
  })
  console.log(users)
})
export { ref, addDoc, users, doc, db, deleteDoc }
