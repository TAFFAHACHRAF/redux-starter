import { call, put } from "redux-saga/effects";
import { getTasksAsyncCall } from "../api-calls/tasks";
import { getTasksSuccess,getTasksRequestSent,getTasksFailure } from "../../tasks/tasksActions"

// This is handler
export function* handleGetTaskssRequest(action) {
   try {
      // First we set loading to true and then call our api
      yield put(getTasksRequestSent());
      const { data } = yield call(getTasksAsyncCall);
      // if success, we can call our actions (dispatch)
      yield put(getTasksSuccess(data));
   } catch (error) {
      const errorMessage = error.message;
      yield put(getTasksFailure(errorMessage));
   }
}
