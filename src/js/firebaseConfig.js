import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHpRUkZWV5zxeRv4DCYwr3PM0BMi-aR6I",
  authDomain: "task-manager-dfa16.firebaseapp.com",
  projectId: "task-manager-dfa16",
  storageBucket: "task-manager-dfa16.firebasestorage.app",
  messagingSenderId: "129425047764",
  appId: "1:129425047764:web:e6f2bea4d196b8d3e23b41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export { app };
