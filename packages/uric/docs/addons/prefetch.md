# prefetch addon

The prefetch addon enables you to run a `uri`'s `load` function prior to actually navigating to that location.

```js
import { prefetch } from 'uri-conf/addons';
import uriconf from 'uri-conf/uriconf';

const history = ...;
const uris = [...];

const conf = uriconf(history, uris, [ prefetch ]);
```

This addon will only register `uri`s that have a `load` function in their `load` object.

```js
// will register
uri('User', path('user/:id'), null, {
  load: (response, { params }) => {
    // fetch and store the data
    return fetch(`/api/user/${params.id}`)
      .then(resp => resp.json())
      .then(data => {
        Store.save(data)
      });
  }
})

// will NOT register
uri('User', path('user/:id'))
uri('User', path('user/:id'), null, {
  preload: () => {
    return import('./components/User').then(resp => resp.default)
  }
})
```

This can be useful if you want to ensure data is loaded prior to navigation. This is only useful for in-app navigation. If the user uses the browser's forward/back buttons, the loading will be handled within the `URIConf`.