import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIRP-Xz_0pXzY1bACg73_hc3oL8nk7REA',
  authDomain: 'comments-5e599.firebaseapp.com',
  projectId: 'comments-5e599',
  storageBucket: 'comments-5e599.appspot.com',
  messagingSenderId: '273499397131',
  appId: '1:273499397131:web:d720f73d5c6ce3d469fb0e',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const commentsColRef = collection(db, 'comments');
const imagesColRef = collection(db, 'images');

export { commentsColRef, imagesColRef };
