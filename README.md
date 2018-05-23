A standard set of settings, components, containers, and utilities to handle Django REST Framework through React + Redux.

## Utility Functions
### reverse
```js
import { reverse } from 'djangoreact/utils/url'

reverse('<route_name>')
reverse('<route_name>', {pk: 1})
```

## Settings
```js
src/index.js

export default const settings = {
  DEBUG: !!process.env.NODE_ENV === 'production',
  installedApps: [
    '<app_name>'
  ],
  middleware: [
    historyMiddleware
  ],
  BASE_API_URL: 'api',
  ROOT_ROUTER: 'config.routers',
  ROOT_REDUCER: 'config.reducers',
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

## Config Structure
```js
src/
  config/
    settings/
      base.js
      dev.js
      prod.js
      test.js
    routers.js
    reducers.js
    index.js
    index.html
  apps/
```

## Create New App
```js
src/
  apps/
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

## Reducer Structure
```js
<model>: {
  current: {},
  errors: {},
  list: { 1: {...}, 2: {...} },
  listIds: [1,2],
  options: {'GET': {}, ...},
  pagination: {current: 1, next: 2, prev: 1},
}
```
