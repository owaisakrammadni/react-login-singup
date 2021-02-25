import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyA8qabed3pjD4q-etSsTjlS3EcWpffAxHw",
    authDomain: "aut-development-81d41.firebaseapp.com",
    databaseURL: "https://aut-development-81d41-default-rtdb.firebaseio.com",
    projectId: "aut-development-81d41",
    storageBucket: "aut-development-81d41.appspot.com",
    messagingSenderId: "479805937843",
    appId: "1:479805937843:web:c1cc9f30c3980b3ef738c6"
})

export const auth = app.auth()
export default app
