import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import capsLock from "../middleware/caps_lock_middleware"

export default createStore(reducers, applyMiddleware(thunk, capsLock))
