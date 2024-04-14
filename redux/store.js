import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ reducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
