import {combineReducers} from 'redux';
import blog from './blog';

const rootReducer = combineReducers({blogList: blog});

export default rootReducer;