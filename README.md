A standard set of settings, components, containers, and utilities to handle Django REST Framework through React + Redux.

Settings
```js
src/index.js

export default const settings = {
  DEBUG: !!process.env.NODE_ENV === 'production',
  installedApps: [
    'Hello'
  ],
  reduxMiddleware: [
    historyMiddleware
  ],
  baseAPIUri: 'api',
  rootRouter: 'config.router',
  rootReducer: 'config.reducer',
}

require('es6-promise').polyfill()

ReactDOM.render(
  <DjangoReact settings={settings}>
    <Provider store={store}>
      <ConnectedRouter history={history} basename={basename}>
        <ThemeProvider theme={Theme}>
          <Switch>{renderRoutes(routes)}</Switch>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </DjangoReact>,
  document.getElementById('app')
)
```

Create New App
```js
src/
    <basic_app_name>/
        components/
        containers/
        routes/
    <advanced_app_name>/
        actions/
            customAction.js
            index.js
        components/
        containers/
        models/
            index.js
        reducers/
            index.js
            <model>.js
        routes/
            index.js
        urls/
            index.js
        app.js
```
