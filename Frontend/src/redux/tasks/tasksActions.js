// Action (names)
export const GET_TASKS_ASYNC = "GET_TASKS_ASYNC";
export const GET_TASKS_REQUEST_SENT = "GET_TASKS_REQUEST_SENT";
export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_FAILURE = "GET_TASKS_FAILURE";

// in Actions we return an object {type, payload}

// These Are the action Creator functions
export const getTasksAsync = () => {
   const actionOBject = {
      type: GET_TASKS_ASYNC,
   };
   return actionOBject;
};

export const getTasksRequestSent = () => {
   const actionOBject = {
      type: GET_TASKS_REQUEST_SENT,
   };
   return actionOBject;
};

export const getTasksSuccess = (tasks) => {
   const actionOBject = {
      type: GET_TASKS_SUCCESS,
      payload: tasks,
   };
   return actionOBject;
};

export const getTasksFailure = (errorMessage) => {
   const actionOBject = {
      type: GET_TASKS_FAILURE,
      payload: errorMessage,
   };
   return actionOBject;
};
