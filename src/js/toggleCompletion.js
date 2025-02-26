import { doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

const toggleCompletion = async (id, isCompleted) => {
  try {
    const taskToComplete = doc(database, "tasks", id);
    await updateDoc(taskToComplete, {
      isCompleted: !isCompleted,
    });
  } catch (error) {
    console.log(error, "Error updating task completion: ");
  }
};

export default toggleCompletion;
