import { combineReducers } from "redux";
import {userReducer}  from './userReducer'
import { productReducer } from "./productReducer";
import {reducer} from './reducer'

const rootReducer = combineReducers({
    counter : reducer,
    user : userReducer,
    product : productReducer
})

export default rootReducer