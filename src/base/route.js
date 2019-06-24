const app = require('./app');

export default [
	{
		path: '/',
		component: app,
		indexRoute: {
			getComponent(location, cb) {
        import(/* webpackChunkName: 'home' */ '@page/login').then(login => cb(null, login.default)).catch(e => console.log(e));
			},
			// onLeave: e => console.log('111', e),
			// onEnter: e => console.log('222', e),
		},
		childRoutes: [
		// 	{
		// 		path: 'login',
		// 		getComponent(location, cb) {
        //   import(/* webpackChunkName: 'home' */ '@page/login').then(login => cb(null, login.default)).catch(e => console.log(e));
		// 		},
		// 		onLeave: e => console.log('33333', e),
		// 		onEnter: e => console.log('444444', e),
		// 	},
			{
				path: 'home',
				getComponent(location, cb) {
          import(/* webpackChunkName: 'home' */ '@page/home').then(home => cb(null, home.default)).catch(e => console.log(e));
				},
				// onLeave: e => console.log('55555', e),
				// onEnter: e => console.log('666666', e),
			},
			{
				path: 'about',
				getComponent(location, cb) {
          import(/* webpackChunkName: 'about' */ '@page/about').then(about => cb(null, about.default)).catch(e => console.log(e));
				},
				// onLeave: e => console.log(e),
				// onEnter: e => console.log(e),
			},
		],
	},
];
