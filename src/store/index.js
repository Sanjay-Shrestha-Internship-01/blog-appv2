
import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = applyMiddleware(thunk);

const Store = createStore(rootReducer, middlewares);

export default Store;