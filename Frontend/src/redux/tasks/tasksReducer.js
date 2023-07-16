import { GET_TASKS_REQUEST_SENT, GET_TASKS_SUCCESS, GET_TASKS_FAILURE } from "./tasksActions";

// We need to have an initial state values
const initialState = {
   isLoading: false,
   tasks: [],
   error: "",
};

// Then we need to have the reducer
const tasksReducer = (state = initialState, action) => {
   const { type, payload } = action;
   switch (type) {
      case GET_TASKS_REQUEST_SENT:
         return {
            ...state,
            isLoading: true,
         };
      case GET_TASKS_SUCCESS:
         return {
            ...state,
            isLoading: false,
            tasks: payload,
            error: "",
         };

      case GET_TASKS_FAILURE:
         return {
            ...state,
            isLoading: false,
            tasks: [],
            error: payload,
         };

      default:
         return state;
   }
};

export default tasksReducer;
