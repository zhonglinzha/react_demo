/* eslint-disable */
import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// const middlewares = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__());
// const _createStore = middlewares(createStore);
// const store = _createStore(reducer);

const store = createStore(reducer,applyMiddleware(thunk));

export default store;
