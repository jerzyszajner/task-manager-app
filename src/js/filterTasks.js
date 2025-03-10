import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { database } from "./firebaseConfig";
import renderTask from "./renderTask";

const filterTasksByMonth = async (selectedMonth) => {
  try {
    const tasksCollection = collection(database, "tasks");
    const q = query(tasksCollection, orderBy("createdAt"));
    const tasksSnapshot = await getDocs(q);

    // Filtering tasks by month
    const filtredTasks = tasksSnapshot.docs.filter((doc) => {
      const task = doc.data();
      const taskDate = new Date(task.date);
      const taskMonth = taskDate.getMonth() + 1;

      return selectedMonth === "all" || taskMonth === parseInt(selectedMonth);
    });
    console.log(filtredTasks);

    renderTask(filtredTasks);
  } catch (error) {
    console.log(error, "Error filtering tasks");
  }
};

export default filterTasksByMonth;
