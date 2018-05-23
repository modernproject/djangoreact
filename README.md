A standard set of settings, components, containers, and utilities to handle Django REST Framework through React + Redux.

## Utility Functions
### reverse
```js
import { reverse } from 'djangoreact/utils/url'

reverse('<route_name>')
reverse('<route_name>', {pk: 1})
```

## Settings
We create a settings object that is added to the context and passed to all children!

In `src/config/settings/base.js`
```js
import { BaseSettings } from 'djangoreact/settings`;

const Settings = Object.create(BaseSettings)
Object.assign(Settings, {
  DEBUG: !!process.env.NODE_ENV === 'production', // default
  installedApps: [
    '<app_name>'
  ],
  middleware: [
    historyMiddleware
  ],
  BASE_API_URL: 'api',
  ROOT_ROUTER: 'config.routers', // default
  ROOT_REDUCER: 'config.reducers', // default
})
```


Inside `src/config/index.js`
```js
import { settings } from 'src/config/settings'

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

## App Structure
### Overview
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

### Routes Structure
Routes must now consist of index.js which relies on key, values paris 

#### Explcitly Defined Route
```
export default const routes = {
  'user': {
    path: '/user/:pk',
    exact: true,
    Component: BaseComponent,
    Layout: NavBarSideBarLayout
  }
}
```

#### DRF-based Router Creation
```
import { DefaultRouter } from 'djangoreact/router'
import { User } from 'src/apps/User/models'

const router = DefaultRouter()
router.register('user', User)

export default const routes = {
  ...router,
}

/* router creates a dictionary of routes,
  Router pattern: ^users/$ Name: 'user-list'
  Router pattern: ^users/{pk}/$ Name: 'user-detail'
{
  'user-list': {
    path: '/users/',
    exact: true,
    Component: this.context.settings.DEFAULT_LIST_CONTAINER,
    Layout: this.context.settings.DEFAULT_LAYOUT
  },
  'user-detail': {
    path: '/users/:pk',
    exact: true,
    Component: this.context.settings.DEFAULT_DETAIL_CONTAINER,
    Layout: this.context.settings.DEFAULT_LAYOUT
  }
}
*/
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
