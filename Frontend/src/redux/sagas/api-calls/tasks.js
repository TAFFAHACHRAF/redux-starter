import axios from "axios";

const tasksUrl = "http://localhost:8100/tasks";

export const getTasksAsyncCall = () => {
   return axios.get(tasksUrl);
};
