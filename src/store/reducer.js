import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import aboutReducer from '@page/about/reducer';
import homeReducer from '@page/home/reducer';
import loginReducer from '@page/login/reducer';

export default combineReducers({
	root: combineReducers({
		aboutReducer,
		homeReducer,
		loginReducer,
	}),
	routing: routerReducer,
});
