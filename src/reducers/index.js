import {combineReducers} from 'redux';
import blog from './blog';
import { googleReducer } from "./google"
const rootReducer = combineReducers({
    blogList: blog,
    googleReducer,
});

export default rootReducer;

