import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import ApiReducer from './reducer/ApiReducer';
import {thunk} from 'redux-thunk';

const store = createStore(ApiReducer, applyMiddleware(thunk));

export default store;
