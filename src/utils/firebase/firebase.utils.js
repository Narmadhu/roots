import { initializeApp } from "firebase/app"

import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
  signOut
} from "firebase/auth"
import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCexgdWveMnjM3Gk3FJ-mG0ZdTxMNDdgAo",
  authDomain: "roots-restaurant.firebaseapp.com",
  projectId: "roots-restaurant",
  storageBucket: "roots-restaurant.appspot.com",
  messagingSenderId: "837058753065",
  appId: "1:837058753065:web:e258a2a5d429ccaec3a238"
}

const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const facebook = new FacebookAuthProvider()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        createdAt,
        displayName,
        email,
        ...additionalInformation
      })
    } catch (error) {
      console.log("error creating the user", error.message)
    }
  }

  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(
  auth, callback
)
