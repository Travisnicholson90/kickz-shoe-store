import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3RDzuxptJnfwhIvQox3LmD_9sVM0qidc",
  authDomain: "shoe-store-ecfc1.firebaseapp.com",
  projectId: "shoe-store-ecfc1",
  storageBucket: "shoe-store-ecfc1.appspot.com",
  messagingSenderId: "384615129729",
  appId: "1:384615129729:web:2a4d2169c909e208e82380",
  measurementId: "G-WDZRQSG89S"
};
//get collection data, pass in collection ref as argument to retrieve all db, 'shoe' data
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const colRef = collection(db, 'Shoe');

//export the getShoeData function 
export const getShoeData = async () => {
  try {
    const snapshot = await getDocs(colRef);
    const shoe = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return shoe;
  } catch (error) {
    console.error(error);
    return [];
  }
};