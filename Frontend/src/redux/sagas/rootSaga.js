import { takeEvery } from "redux-saga/effects";
import { GET_TASKS_ASYNC } from "../tasks/tasksActions";
import { handleGetTaskssRequest } from "./handlers/tasks";

export function* watcherSaga() {
   yield takeEvery(GET_TASKS_ASYNC, handleGetTaskssRequest);
}
