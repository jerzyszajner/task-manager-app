import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { database } from "./firebaseConfig";

const addTasks = async (title, date, time, category, priority) => {
  try {
    const task = {
      title,
      date,
      time,
      category,
      priority,
      isComplited: false,
      createdAt: serverTimestamp(),
    };
    console.log("Task submitted successfully: ", task);

    await addDoc(collection(database, "tasks"), task);
  } catch (error) {
    console.log(error, "Error adding document: ");
  }
};

export default addTasks;
