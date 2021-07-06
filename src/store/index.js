
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
const middlewares = applyMiddleware(thunk);

const Store = createStore(rootReducer, composeWithDevTools(middlewares));

export default Store;