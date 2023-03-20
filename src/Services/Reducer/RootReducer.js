import { combineReducers } from "redux";
import StudentReducer from "./Student.Reducer";

const RootReducer = combineReducers({
    StudentReducer,
})
export default RootReducer;