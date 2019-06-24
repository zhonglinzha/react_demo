import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory as history } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import router from './route';
import store from '@store';
import './index.scss';

const superHistory = syncHistoryWithStore(history, store);

history.listen(e => console.log('???????------>', e));

const renderApp = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router routes={router} history={superHistory} />
		</Provider>,
		document.getElementById('root'),
	);
};
renderApp();
// window.addEventListener('popstate', e => {
// 	console.log('2------->', e);
// });

// window.addEventListener('hashchange', e => {
// 	console.log('1------->', e);
// });

/* eslint-disable */
document.addEventListener('DOMContentLoaded', function (e) {
	// console.log(this, e);
}, false);


window.addEventListener('load', function(e){
	// console.log(this,e);
})

