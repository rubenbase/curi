import uri from './uri';
import walk from './utils/walk';
import DEFAULT_ADDONS from './addons/defaults';
import Response from './response';

function createURIs(uris) {
  return uris.map(obj => {
    const children = obj.children ? createURIs(obj.children) : [];
    return uri({ ...obj, children })
  })
}

function createConfig(history, routes, addons = DEFAULT_ADDONS) {
  // the current uris to match against
  let uris = [];
  // the addons being used by the uriconf
  const globals = {};

  const setup = routes => {
    if (!Array.isArray(routes)) {
      routes = [ routes ];
    }
    uris = createURIs(routes);
    addons.forEach(addon => {
      globals[addon.name] = addon.get;
      addon.reset();
      // this could be rewritten to only walk the tree once, but
      // setup should not be run very often, so it wouldn't be a big win
      walk(uris, addon.register);
    });
  };

  let currentUpdate;
  const update = () => {
    const { pathname, key } = history.location;
    currentUpdate = key;

    const resp = new Response(history.location)
    uris.some(uri => { return uri.match(pathname, resp); });
    if (resp.uri) {
      const { preload, load } = resp.uri;
      Promise.all([
        preload ? preload() : null,
        load ? load(resp) : null
      ]).then(
        (args) => {
          // don't emit if it has been superseded
          if (currentUpdate === key) {
            resp.call();
            emit(resp);
          }
        },
        (err) => { /* not sure what to do here yet */ }
      );
    } else {
      emit(resp);
    }
  };

  const unlisten = history.listen(update);

  const subscribers = [];
  let lastUpdate;
  const subscribe = (fn) => {
    if (lastUpdate && fn != null) {
      fn(lastUpdate);
    }
    const newLength = subscribers.push(fn);
    return () => {
      subscribers[newLength-1] = null
    };
  };

  const emit = (response) => {
    lastUpdate = response;
    subscribers.forEach(fn => {
      if (fn != null) {
        fn(response);
      }
    });
  };

  setup(routes);
  update();

  return {
    refresh: setup,
    subscribe,
    addons: globals,
    history
  }
}

export default createConfig;