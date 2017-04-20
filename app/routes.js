// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {
  return [
    {
      path: '/SignIn',
      name: 'SignIn',
      getComponent(nextState, cb) {
        import('containers/SignIn')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      getComponent(nextState, cb) {
        import('containers/SignUp')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },
    {
      path: '/AboutUpdate',
      name: 'AboutUpdate',
      getComponent(nextState, cb) {
        import('containers/AboutUpdate')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },
    {
      path: '/Browse',
      name: 'Browse',
      getComponent(nextState, cb) {
        import('containers/Browse')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },
    {
      path: '/About',
      name: 'About',
      getComponent(nextState, cb) {
        import('containers/About')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      getComponent(nextState, cb) {
        import('containers/Dashboard')
        .then(loadModule(cb))
        .catch(errorLoading);
      },
    },
    {
      path: '/Article/:id',
      name: 'Article',
      getComponent(nextState, cb) {
        import('containers/Article')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '/', /* root directory */
      name: 'Home',
      getComponent(nextState, cb) {
        import('containers/Home')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
