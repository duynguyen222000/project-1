import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import UserReducer from "./reducers/UserReducer";
import rootSaga from "./saga/rootSaga";
const middleWareSaga = createSagaMiddleware();

const rootReducer = combineReducers({ UserReducer });

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));
middleWareSaga.run(rootSaga);
export default store;
