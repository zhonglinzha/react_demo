import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import router from './route';
import store from '@store';
import './index.scss';

const renderApp = () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router routes={router} history={hashHistory} />
		</Provider>,
		document.getElementById('root'),
	);
};
renderApp();
