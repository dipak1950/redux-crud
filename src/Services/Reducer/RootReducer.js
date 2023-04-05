import { combineReducers } from "redux";
import StudentReducer from "./Student.Reducer";
import AuthReducer from "./AuthReducer";

const RootReducer = combineReducers({
    StudentReducer, AuthReducer
})

export default RootReducer;