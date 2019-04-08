export default [
  {
    path: "/",
    component: require("./app"),
    indexRoute: {
      getComponent(location, cb) {
        import(/* webpackChunkName: 'login' */ "@page/login").then(login =>
          cb(null, login.default)
        ).catch(e=>console.log(e));
      }
    },
    childRoutes: [
      {
        path: "login",
        getComponent(location, cb) {
          import(/* webpackChunkName: 'home' */ "@page/login").then(login =>
            cb(null, login.default)
          ).catch(e=>console.log(e));
        }
      },
      {
        path: "home",
        getComponent(location, cb) {
          import(/* webpackChunkName: 'home' */ "@page/home").then(home =>
            cb(null, home.default)
          ).catch(e=>console.log(e));
        }
      },
      {
        path: "about",
        getComponent(location, cb) {
          import(/* webpackChunkName: 'about' */ "@page/about").then(about =>
            cb(null, about.default)
          ).catch(e=>console.log(e));
        }
      }
    ]
  }
];
