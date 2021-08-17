import { first,last,submit } from "./Action";
import {combineReducers} from "redux";
const initialState = {

firststate:"", laststate:"", }
const Reducer=(state=initialState, action)=>{
    switch(action.type){
        case first: return {...state}
        case last: return {...state}
        case submit: return state;
        default:  return state;
    }
}


const rootReducer = combineReducers({
    counter : Reducer
});
export default rootReducer;