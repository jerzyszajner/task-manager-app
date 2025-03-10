import { doc, deleteDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";

const deleteTask = async (id) => {
  try {
    const taskToDelete = doc(database, "tasks", id);
    await deleteDoc(taskToDelete);
    console.log(`Task with ID ${id} has been deleted.`);
  } catch (error) {
    console.log(error, "Error deleting task: ");
  }
};

export default deleteTask;
