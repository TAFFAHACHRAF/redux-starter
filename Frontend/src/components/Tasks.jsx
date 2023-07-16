import { useSelector, useDispatch } from "react-redux";
import { getTasksAsync } from "../redux/tasks/tasksActions";

const Tasks = () => {
   const dispatch = useDispatch();
   const tasksState = useSelector((state) => state.tasksState);

   const getTasksFromServer = () => {
      dispatch(getTasksAsync());
   };

   return (
      <div>
         <h1>Tasks</h1>
         <button onClick={getTasksFromServer}>Get Tasks from server</button>
         {tasksState.isLoading && <h1>Loading</h1>}
         {tasksState.error && <h1>{tasksState.error}</h1>}

         {!tasksState.isLoading &&
            !tasksState.error &&
            tasksState.tasks.map((task) => (
               <div key={task.id} style={{ border: "1px solid #0000ff", borderRadius: "16px" }}>
                  <h3>{task.name}</h3>
                  {/* <h6>{task.body}</h6> */}
               </div>
            ))}
      </div>
   );
};

export default Tasks;
