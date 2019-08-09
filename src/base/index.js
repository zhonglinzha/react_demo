import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import router from './route';
import store from '@store';
import './index.scss';

import './mock';

hashHistory.listen(e => {
	console.log('....', e);

});

const superHistory = syncHistoryWithStore(hashHistory, store);


const renderApp = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router routes={router} history={superHistory} />
		</Provider>,
		document.getElementById('root'),
	);
};
renderApp();
