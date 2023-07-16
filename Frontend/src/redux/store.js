// import {legacy_createStore as createStore} from "redux"

import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/rootSaga";

import tasksReducer from "./tasks/tasksReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
   tasksState: tasksReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));

// then run the saga
sagaMiddleware.run(watcherSaga);

export default store;
