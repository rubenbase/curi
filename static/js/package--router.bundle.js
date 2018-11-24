(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var a=n(0),l=n.n(a),r=n(1),o=n(108),u=n(109),s=n(8),c=n(105),i=n(3),m=n(16);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),E(this,d(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,l.a.PureComponent),function(e,t,n){t&&p(e.prototype,t),n&&p(e,n)}(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"@curi/router")," package is used to create a router."))),l.a.createElement(o.a,null,l.a.createElement(c.a,{title:"curi",id:"curi"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"curi")," export is a function to create a router. It has two required arguments: a ",l.a.createElement(s.b,null,"history")," object and a"," ",l.a.createElement(s.b,null,"routes")," array, and an optional third argument: an"," ",l.a.createElement(s.b,null,"options")," object.")),l.a.createElement(i.a,null,"import { curi } from '@curi/router';\n\nconst router = curi(history, routes, options);"),l.a.createElement(c.a,{tag:"h4",title:"Arguments",id:"arguments"},l.a.createElement(c.a,{tag:"h5",title:"history",id:"history"},l.a.createElement(i.b,null,l.a.createElement("p",null,"A ",l.a.createElement("a",{href:"https://github.com/pshrmn/hickory"},"Hickory")," ","history object that will power navigation within the application. The"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"getting-started"},hash:"history-object"},"getting started guide")," ","provides more information on how to choose which history type is right for an application.")),l.a.createElement(i.a,{lang:"jsx"},'import Browser from "@hickory/browser";\n\nconst history = Browser();\nconst router = curi(history, routes);')),l.a.createElement(c.a,{tag:"h5",title:"routes",id:"routes"},l.a.createElement(i.b,null,l.a.createElement("p",null,"An array of prepared"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"routes"}},"route")," ","objects describing all valid routes in the application.")),l.a.createElement(i.a,{lang:"jsx"},'const routes = prepareRoutes([\n  { name: "Home", path: "" },\n  { name: "About", path: "about" }\n]);\n\nconst router = curi(history, routes);')),l.a.createElement(c.a,{tag:"h5",title:"options",id:"options"},l.a.createElement("p",null,"An optional object with additional properties that can be passed to the router."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"route")," - An array of"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"route-interactions"}},"route interactions"),". These are functions for interacting with routes based on their ",l.a.createElement(s.b,null,"name"),"."),l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"pathname")," interaction is included by default; any other interactions are provided through this array.")),l.a.createElement(i.a,null,'import active from "@curi/route-active";\nimport ancestors from "@curi/route-ancestors";\n\nconst routes = prepareRoutes([{ name: "Home", path: "" }]);\n\nconst router = curi(history, routes, {\n  route: [active(), ancestors()]\n});'),l.a.createElement(i.b,null,l.a.createElement("p",null,"Route interactions are called via the router's"," ",l.a.createElement(s.b,null,"route")," object.")),l.a.createElement(i.a,null,'router.route.active("Home");\n// returns true when location.pathname = "/"\n\nrouter.route.pathname("Home");\n// returns "/"')),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"sideEffects")," - An array of"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"side-effects"}},"side effect")," ","objects."),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"property"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"effect"),l.a.createElement("td",null,"An observer that will be called whenever a response is generated.")),l.a.createElement("tr",null,l.a.createElement("td",null,"after"),l.a.createElement("td",null,"(default ",l.a.createElement(s.b,null,"false"),") controls whether the side effect is called before or after non-side effect observers."))))),l.a.createElement(i.a,null,'import scroll from "@curi/side-effect-scroll";\n\nconst router = curi(history, routes, {\n  sideEffects: [scroll()]\n});')),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"external")," - Values that should be accessible to a route's ",l.a.createElement(s.b,null,"resolve")," functions and"," ",l.a.createElement(s.b,null,"response()")," function."),l.a.createElement("p",null,"Using ",l.a.createElement(s.b,null,"external")," allows you to access APIs, data, etc. without having to be able to import it in the module where the routes are defined.")),l.a.createElement(i.a,null,'const client = new ApolloClient();\nconst router = curi(history, routes, {\n  external: { client, greeting: "Hi!" }\n});'),l.a.createElement(i.a,null,'const routes = prepareRoutes([\n  {\n    name: "User",\n    path: "user/:id",\n    resolve: {\n      data(match, external) {\n        // use the external object to make a query\n        return external.client.query()\n      }\n    }\n  }\n]);')),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"emitRedirects")," - When ",l.a.createElement(s.b,null,"false")," ","(default is ",l.a.createElement(s.b,null,"true"),"), response objects with the"," ",l.a.createElement(s.b,null,"redirectTo")," property"," ",l.a.createElement("strong",null,"will not be emitted")," to observers. This can be useful for avoiding an extra render, but should not be used on the server.")),l.a.createElement(i.a,null,'const routes = prepareRoutes([\n  {\n    name: "Old",\n    path: "old/:id",\n    response({ params }) {\n      // setup a redirect to the "New" route\n      return {\n        redirectTo: {\n          name: "New",\n          params\n        }\n      };\n    }\n  },\n  {\n    name: "New",\n    path: "new/:id"\n  }\n]);\n\nconst router = curi(history, routes, {\n  emitRedirects: false                 \n});\n// navigating to "/old/2" will automatically redirect\n// to "/new/2" without emitting a response')),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"automaticRedirects")," - When the initially matched route is synchronous and redirects, the router's automatic redirect will occur before any response handlers (registered with ",l.a.createElement(s.b,null,"once()")," or"," ",l.a.createElement(s.b,null,"observe()"),") are called. This means that they will be called with the response for the location that was redirected to instead of the initial location. This is fine on the client side, but causes issues with server side rendering. When"," ",l.a.createElement(s.b,null,"automaticRedirects")," is ",l.a.createElement(s.b,null,"false"),", the automatic redirect will not happen."," ",l.a.createElement("strong",null,"Using ",l.a.createElement(s.b,null,"automaticRedirects = false")," is recommend for server side rendering."))),l.a.createElement(i.a,null,'const routes = prepareRoutes([\n  {\n    name: "Old",\n    path: "old/:id",\n    response({ params }) {\n      // setup a redirect to the "New" route\n      return {\n        redirectTo: {\n          name: "New",\n          params\n        }\n      };\n    }\n  },\n  {\n    name: "New",\n    path: "new/:id"\n  }\n]);\nconst history = InMemory({ locations: ["old/1" ]});\nconst router = curi(history, routes, {\n  automaticRedirects: false                 \n});\nrouter.once(({ response }) => {\n  // response = { name: "Old", ... }\n});')),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"pathnameOptions")," - Curi uses"," ",l.a.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp"},l.a.createElement(s.b,null,"path-to-regexp"))," ","to handle route matching and pathname generation."," ",l.a.createElement(s.b,null,"path-to-regexp")," can take a custom"," ",l.a.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp#compile-reverse-path-to-regexp"},l.a.createElement(s.b,null,"encode"))," ","function for creating pathnames, which you can specify with this options."," ",l.a.createElement("strong",null,"You most likely will never need to use this."))),l.a.createElement(i.a,null,"const router = curi(history, routes, {\n  pathOptions: {\n    encode: (value, token) => { /* ... */ }\n  }\n});"))))),l.a.createElement(c.a,{tag:"h4",title:"Router Properties",id:"properties"},l.a.createElement("p",null,"The router has a number of properties for you to use when rendering your application."),l.a.createElement(c.a,{tag:"h5",title:"navigate(details)",id:"navigate"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"navigate()")," method is used to navigate programmatically. It takes a ",l.a.createElement(s.b,null,"details")," object with the details of where you want to navigate to as well as the"," ",l.a.createElement(s.b,null,"method")," of navigation."),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"property"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name"),l.a.createElement("td",null,"The name of the route to navigate to")),l.a.createElement("tr",null,l.a.createElement("td",null,"params"),l.a.createElement("td",null,"An object of any route params for the named route (and any of its ancestors that require params).")),l.a.createElement("tr",null,l.a.createElement("td",null,"hash"),l.a.createElement("td",null,"The hash string of the location to navigate to.")),l.a.createElement("tr",null,l.a.createElement("td",null,"query"),l.a.createElement("td",null,"The query value of the location to navigate to.")),l.a.createElement("tr",null,l.a.createElement("td",null,"state"),l.a.createElement("td",null,"Any serializable state to attach to the location.")),l.a.createElement("tr",null,l.a.createElement("td",null,"method"),l.a.createElement("td",null,"How to navigate. ",l.a.createElement(s.b,null,'"PUSH"')," appends the new location after the current one. ",l.a.createElement(s.b,null,'"REPLACE"')," ","replaces the current location. ",l.a.createElement(s.b,null,'"ANCHOR"')," is the default method and acts like clicking a link. This behavior is a mix of ",l.a.createElement(s.b,null,'"PUSH"')," and"," ",l.a.createElement(s.b,null,'"REPLACE"')," where the current location is replaced if the new location has the exact same URL.")),l.a.createElement("tr",null,l.a.createElement("td",null,"finished"),l.a.createElement("td",null,"A function to call once the navigation has finished.")),l.a.createElement("tr",null,l.a.createElement("td",null,"cancelled"),l.a.createElement("td",null,"A function to call if the navigation is superseded by another navigation."))))),l.a.createElement(i.a,null,'const routes = prepareRoutes([\n  {\n    name: "Album",\n    path: "photos/:albumID",\n    children: [\n      { name: "Photo", path: ":photoID" }\n    ]\n  },\n  // ...\n]);\nconst router = curi(history, routes);\n\nrouter.navigate({\n  name: "Photo",\n  params: { albumID: 123, photoID: 456 }\n});\n// navigates to "/photos/123/456"\n// using default "ANCHOR" method')),l.a.createElement(c.a,{tag:"h5",title:"once(fn, options)",id:"once"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"once()")," method takes a response handler function. If a response already exists, the function will be called immediately. Otherwise, the function will be called once a new response is created. The"," ",l.a.createElement(s.b,null,"{ initial: false }")," option can be used to prevent an immediate call even if a response already exists."),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"property"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"response"),l.a.createElement("td",null,"The generated response object.")),l.a.createElement("tr",null,l.a.createElement("td",null,"navigation"),l.a.createElement("td",null,"The navigation's ",l.a.createElement(s.b,null,"action")," (",l.a.createElement(s.b,null,"PUSH"),","," ",l.a.createElement(s.b,null,"REPLACE"),", or ",l.a.createElement(s.b,null,"POP"),") and the"," ",l.a.createElement(s.b,null,"previous")," response object.")),l.a.createElement("tr",null,l.a.createElement("td",null,"router"),l.a.createElement("td",null,"The Curi router")))),l.a.createElement("p",null,"When a matched route is async (it has ",l.a.createElement(s.b,null,"resolve")," ","functions), a response will not be created until the async function(s) have resolved.")),l.a.createElement(i.a,null,"router.once(({ response }) => {\n  // render the application based on the response\n});"),l.a.createElement(c.a,{tag:"h6",title:"options",id:"once-options"},l.a.createElement(i.b,null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"option"),l.a.createElement("th",null,"default"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"initial"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"When true, the function will be called immediately if a response exists. When false, the response function will not be called until the next response is emitted."))))),l.a.createElement(i.a,null,"router.once(responseHandler, {\n  initial: false\n});"))),l.a.createElement(c.a,{tag:"h5",title:"observe(fn, options)",id:"observe"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"observe()")," method takes a response handler function. The response handler will be called every time a new response is emitted (and it a response already exists, the function will be called immediately). The"," ",l.a.createElement(s.b,null,"{ initial: false }")," option can be used to prevent an immediate call even if a response already exists."),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"property"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"response"),l.a.createElement("td",null,"The generated response object.")),l.a.createElement("tr",null,l.a.createElement("td",null,"navigation"),l.a.createElement("td",null,"The navigation's ",l.a.createElement(s.b,null,"action")," (",l.a.createElement(s.b,null,"PUSH"),","," ",l.a.createElement(s.b,null,"REPLACE"),", or ",l.a.createElement(s.b,null,"POP"),") and the"," ",l.a.createElement(s.b,null,"previous")," response object.")),l.a.createElement("tr",null,l.a.createElement("td",null,"router"),l.a.createElement("td",null,"The Curi router")))),l.a.createElement("p",null,"When a matched route is async (it has ",l.a.createElement(s.b,null,"resolve")," ","functions), a response will not be created until the async function(s) have resolved.")),l.a.createElement(i.a,null,"router.observe(({ response }) => {\n  // render the application based on the response\n});"),l.a.createElement(c.a,{tag:"h6",title:"options",id:"observe-options"},l.a.createElement(i.b,null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"option"),l.a.createElement("th",null,"default"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"initial"),l.a.createElement("td",null,"true"),l.a.createElement("td",null,"When true, the function will be called immediately if a response exists. When false, the response function will not be called until the next response is emitted."))))),l.a.createElement(i.a,null,"router.observe(responseHandler, {\n  initial: false\n});"),l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"observe()")," returns a function to stop calling the response handler function for new responses.")),l.a.createElement(i.a,null,"const stopObserving = router.observe(\n  () => {...}\n);\n// the router will now call the observer for all responses\n\nstopObserving();\n// the router no longer calls the observer"))),l.a.createElement(c.a,{tag:"h5",title:"cancel(fn)",id:"cancel-property"},l.a.createElement(i.b,null,l.a.createElement("p",null,"With asynchronous routes, after a user begins navigation, but before the route's asynchronous actions have finished, the user does not have a good way to cancel the navigation. They can either refresh the page (causing a full reload) or click a link with the same URL as the current location, but neither of these are intuitive or ideal."),l.a.createElement("p",null,l.a.createElement(s.b,null,"cancel()")," takes an observer function that will be called when navigation starts and when the navigation is finished. When the navigation starts, the observer function will be given a function to cancel the navigation. When the navigation finishes, the function will be called with"," ",l.a.createElement(s.b,null,"undefined"),"."),l.a.createElement("p",null,"Calling ",l.a.createElement(s.b,null,"cancel()")," returns a function to stop observing.")),l.a.createElement(i.a,null,"const stopCancelling = router.cancel(fn => {\n  if (fn === undefined) {\n    // the navigation has finished/been cancelled\n  } else {\n    // calling fn will cancel the navigation\n  }\n});")),l.a.createElement(c.a,{tag:"h5",title:"current()",id:"current-property"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"router.current()")," method returns the current"," ",l.a.createElement(s.b,null,"response")," and ",l.a.createElement(s.b,null,"navigation")," objects."),l.a.createElement(m.a,null,"If you call ",l.a.createElement(s.b,null,"router.current()")," before the initial response has been emitted, the ",l.a.createElement(s.b,null,"response")," and"," ",l.a.createElement(s.b,null,"navigation")," properties will be ",l.a.createElement(s.b,null,"null"),".")),l.a.createElement(i.a,null,"const router = curi(history, routes);\nconst tooSoon = router.current();\n// tooSoon.response === null\n// tooSoon.navigation === null\n\nrouter.once(({ response, navigation }) => {\n  const perfect = router.current();\n  // perfect.response === response\n  // perfect.navigation === navigation\n});")),l.a.createElement(c.a,{tag:"h5",title:"route",id:"router-route"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The router's"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"route-interactions"}},"route interactions")," ","are accessed through the ",l.a.createElement(s.b,null,"route")," property. These are used to interact with routes using their names.")),l.a.createElement(c.a,{tag:"h6",title:"pathname",id:"pathname-interaction"},l.a.createElement(i.b,null,l.a.createElement("p",null,"Curi includes one built-in interaction,"," ",l.a.createElement(s.b,null,"pathname"),", which generates location pathnames using the name of a route and an optional object containing any necessary params.")),l.a.createElement(i.a,null,"const routes = prepareRoutes([\n  { name: 'User', path: 'user/:id' }\n]);\nconst router = curi(history, routes);\nconst userPathname = router.route.pathname(\n  'User',\n  { id: '12345' }\n);\n// userPathname === '/user/12345'"))),l.a.createElement(c.a,{tag:"h5",title:"refresh()",id:"refresh-property"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"refresh()")," function takes an array of new routes, which will replace the existing routes. The router will emit a new response based on the current location."),l.a.createElement("p",null,"The function can be called without any arguments and it will emit a response using the existing routes.")),l.a.createElement(i.a,null,"const oldRoutes = prepareRoutes([...]);\nconst newRoutes = prepareRoutes([...]);\n\nconst router = curi(history, oldRoutes);\n// generates responses using old routes\n\nrouter.refresh(newRoutes);\n// generates responses using new routes")),l.a.createElement(c.a,{tag:"h5",title:"history",id:"history-property"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The route's history object, in case you need to interact directly with that."))))),l.a.createElement(c.a,{title:"prepareRoutes",id:"prepareRoutes"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"prepareRoutes()")," export is used to build the routes for Curi. This will pre-compile paths for location matching and pathname building, which is particularly useful for server rendering.")),l.a.createElement(i.a,null,'import { prepareRoutes } from \'@curi/router\';\n\nconst routes = prepareRoutes([\n  { name: "Home", path: "" },\n  // ...\n  { name: "Not Found", path: "(.*)" }\n]);'),l.a.createElement(i.b,null,l.a.createElement(m.b,null,"Passing a non-prepared routes array to ",l.a.createElement(s.b,null,"curi()")," is still supported, but deprecated and will be removed in the next major version."))),l.a.createElement(c.a,{title:"Route properties",id:"route-properties"},l.a.createElement(c.a,{title:"route.name",id:"name",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,"A string, this must be unique for every route.")),l.a.createElement(i.a,null,"[\n  { name: 'Home' },\n  { name: 'Album' },\n  { name: 'Not Found' }\n];")),l.a.createElement(c.a,{title:"route.path",id:"path",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,"A string pattern describing what the route matches. Whenever the router receives a new location, it will loop through the known route paths to determine which one matches the new location's ",l.a.createElement(s.b,null,"pathname")," the best."),l.a.createElement("p",null,"Curi uses",l.a.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp#parameters"},l.a.createElement(s.b,null,"path-to-regexp"))," ","for paths, which enables routes to have",l.a.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp#parameters"},"path parameters"),". When a route with parameters matches a location, the parameters will be be parsed from the location's"," ",l.a.createElement(s.b,null,"pathname"),"."),l.a.createElement("p",null,l.a.createElement(s.b,null,"path")," strings should ",l.a.createElement("strong",null,"not")," have a leading slash."),l.a.createElement(m.b,null,l.a.createElement(s.b,null,"path-to-regexp")," supports arrays and RegExps, but Curi only supports string paths. This is because Curi uses"," ",l.a.createElement(s.b,null,"path-to-regexp")," to generate pathnames from a route's name, which it can only do from strings paths.")),l.a.createElement(i.a,null,"[\n  { name: 'Home', path: '' },\n  // when the pathname is a/yo, albumID = \"yo\"\n  { name: 'Album', path: 'a/:albumID' },\n  // the path (.*) matches every pathname\n  { name: 'Not Found', path: '(.*)' }\n];\n\n// don't include a leading forward slash\n// { name: 'Home', path: '/' }")),l.a.createElement(c.a,{title:"route.resolve",id:"resolve",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(s.b,null,"resolve")," object groups async functions that will be called when the route matches."),l.a.createElement("p",null,"A route with any ",l.a.createElement(s.b,null,"resolve")," functions is asynchronous, while one with no ",l.a.createElement(s.b,null,"resolve")," functions is synchronous. You can read more about this is the"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"sync-or-async"}},"sync or async")," ","guide."),l.a.createElement("p",null,l.a.createElement(s.b,null,"resolve")," functions are called every time that a route matches the current location."),l.a.createElement("p",null,l.a.createElement(s.b,null,"resolve")," functions will be passed an object with the matched route properties: ",l.a.createElement(s.b,null,"name"),", ",l.a.createElement(s.b,null,"params"),","," ",l.a.createElement(s.b,null,"partials"),", and ",l.a.createElement(s.b,null,"location"),"."),l.a.createElement(m.a,null,"You should not perform side effects (e.g. passing the loaded data to a Redux store) in ",l.a.createElement(s.b,null,"resolve")," functions because it is possible that navigating to the route might be cancelled. If you must perform side effects for a route, you should do so in ",l.a.createElement(s.b,null,"response()"),".")),l.a.createElement(i.a,null,"const about = {\n  name: 'About',\n  path: 'about',\n  resolve: {\n    body: () => import('./components/About'),\n    data: () => fetch('/api/about')\n  }\n};")),l.a.createElement(c.a,{title:"route.response()",id:"response"},l.a.createElement(i.b,null,l.a.createElement("p",null,'A function for modifying the response object. This returns an object whose properties will be merged with the matched route properties to create the "final" response.'),l.a.createElement("p",null,"Only valid properties will be merged onto the response; everything else will be ignored. The valid properties are:")),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"body")," - This is usually what you will render.")),l.a.createElement(i.a,null,'import Home from "./components/Home";\nconst routes = prepareRoutes([\n  {\n    name: "Home",\n    path: "",\n    response() {\n      return { body: Home };\n    }\n  },\n  // ...\n]);\n// response = { body: Home, ... }')),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"status")," - A number. This is useful for redirects or locations caught by your catch-all route while using server-side rendering. The default status value is"," ",l.a.createElement(s.b,null,"200"),".")),l.a.createElement(i.a,null,"{\n  response(){\n    return {\n      status: 301,\n      redirectTo: {...}\n    };\n  }\n}\n// response = { status: 301, ... }")),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"error")," - If an error occurs with the route's"," ",l.a.createElement(s.b,null,"resolve")," methods, you might want to attach an error message to the response.")),l.a.createElement(i.a,null,'{\n  resolve: {\n    test: () => Promise.reject("woops!")\n  },\n  response({ error }) {\n    return { error };\n  }\n}\n// response = { error: "woops!", ... }')),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"data")," - Anything you want it to be.")),l.a.createElement(i.a,null,"{\n  response() {\n    return { data: Math.random() };\n  }\n}\n// response = { data: 0.8651606708109429, ... }")),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"title")," - This can be used with"," ",l.a.createElement(s.b,null,"@curi/side-effect-title")," to update the page's"," ",l.a.createElement(s.b,null,"document.title"),".")),l.a.createElement(i.a,null,'{\n  response({ params }) {\n    return { title: `User ${params.id}` };\n  }\n}\n// when visting /user/2\n// response = { title: "User 2", ... }')),l.a.createElement("li",null,l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"redirectTo")," - An object with the ",l.a.createElement(s.b,null,"name")," ","of the route to redirect to, ",l.a.createElement(s.b,null,"params")," (if required), and optional ",l.a.createElement(s.b,null,"hash"),", ",l.a.createElement(s.b,null,"query"),", and ",l.a.createElement(s.b,null,"state")," properties."),l.a.createElement("p",null,"The other values are copied directly, but"," ",l.a.createElement(s.b,null,"redirectTo")," will be turned into a location object using the object's ",l.a.createElement(s.b,null,"name")," (and"," ",l.a.createElement(s.b,null,"params")," if required).")),l.a.createElement(i.a,null,'[\n  {\n    name: "Old Photo",\n    path: "photo/:id",\n    response({ params }) {\n      return {\n        redirectTo: { name: "Photo", params }\n      };\n    }\n  },\n  {\n    name: "New Photo",\n    path: "p/:id"\n  }\n]\n// when the user navigates to /photo/1:\n// response = { redirectTo: { pathname: "/p/1", ... } }'))),l.a.createElement(i.b,null,l.a.createElement("p",null,"This function is passed an object with a number of properties that can be useful for modifying the response.")),l.a.createElement(i.a,null,"{\n  response: ({ match, resolved }) => {\n    // ...\n  }\n}"),l.a.createElement("ul",null,l.a.createElement(c.a,{wrapper:"li",title:"match",id:"response-match",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,"An object with the matched route properties of a response."),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"property"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name"),l.a.createElement("td",null,"the name of the matched route")),l.a.createElement("tr",null,l.a.createElement("td",null,"params"),l.a.createElement("td",null,"route parameters parsed from the location")),l.a.createElement("tr",null,l.a.createElement("td",null,"partials"),l.a.createElement("td",null,"the names of any ancestor routes of the matched route")),l.a.createElement("tr",null,l.a.createElement("td",null,"location"),l.a.createElement("td",null,"the location that was used to match the route")),l.a.createElement("tr",null,l.a.createElement("td",null,"key"),l.a.createElement("td",null,"the location's ",l.a.createElement(s.b,null,"key"),", which is a unique identifier")))))),l.a.createElement(c.a,{wrapper:"li",title:"resolved",id:"response-resolved",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"resolved")," is an object with the values resolved by the ",l.a.createElement(s.b,null,"resolve")," functions."),l.a.createElement("p",null,"If a route isn't async, ",l.a.createElement(s.b,null,"resolved")," will be"," ",l.a.createElement(s.b,null,"null"),".")),l.a.createElement(i.a,null,"// attach resolved data to the response\nconst user = {\n  name: 'User',\n  path: ':id',\n  resolve: {\n    data: ({ params, location }) => (\n      fetch(`/api/users/${params.id}`)\n        .then(resp => JSON.parse(resp))\n    ),\n  },\n  response: ({ resolved }) => {\n    return {\n      data: resolved.data\n    };\n  }\n}")),l.a.createElement(c.a,{wrapper:"li",title:"error",id:"response-error",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,l.a.createElement(s.b,null,"error")," is an error thrown by one of the route's"," ",l.a.createElement(s.b,null,"resolve")," functions.")),l.a.createElement(i.a,null,"// check if any of a route's resolve functions threw\nconst user = {\n  name: 'User',\n  path: ':id',\n  resolve: {\n    data: ({ params, location }) => (\n      fetch(`/api/users/${params.id}`)\n        .then(resp => JSON.parse(resp))\n    ),\n  },\n  response: ({ error, resolved }) => {\n    if (error) {\n      return { error };\n    }\n    return {\n      data: resolved.data\n    };\n  }\n}")))),l.a.createElement(c.a,{title:"children",id:"children",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,"An optional array of route objects for creating nested routes. Any child routes will be matched relative to their parent route's ",l.a.createElement(s.b,null,"path"),". This means that if a parent route's"," ",l.a.createElement(s.b,null,"path")," string is ",l.a.createElement(s.b,null,"'one'")," and a child route's"," ",l.a.createElement(s.b,null,"path")," string is ",l.a.createElement(s.b,null,"'two'"),", the child will match when the pathname is ",l.a.createElement(s.b,null,"'one/two'"),".")),l.a.createElement(i.a,null,"// '/a/Coloring+Book/All+Night' will be matched\n// by the \"Song\" route, with the params\n// { album: 'Coloring+Book', title: 'All+Night' }\n{\n  name: 'Album',\n  path: 'a/:album',\n  children: [\n    {\n      name: 'Song',\n      path: ':title'\n    }\n  ]\n}")),l.a.createElement(c.a,{title:"params",id:"params",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,"When ",l.a.createElement(s.b,null,"path-to-regexp")," matches your paths, all parameters are extracted as strings. If you prefer for some route params to be other types, you can provide functions to transform params using the ",l.a.createElement(s.b,null,"route.params")," object."),l.a.createElement("p",null,"Properties of the ",l.a.createElement(s.b,null,"route.params")," object are the names of params to be parsed. The paired value should be a function that takes a string (the value from the ",l.a.createElement(s.b,null,"pathname"),") and returns a new value (transformed using the function you provide).")),l.a.createElement(i.a,null,"const routes = prepareRoutes([\n  {\n    name: 'Number',\n    path: 'number/:num',\n    params: {\n      num: n => parseInt(n, 10)\n    }\n  }\n]);\n\n// when the user visits /number/1,\n// response.params will be { num: 1 }\n// instead of { num: \"1\" }")),l.a.createElement(c.a,{title:"pathOptions",id:"pathOptions",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,"If you need to provide different path options than"," ",l.a.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp#usage"},"the defaults")," ","used by ",l.a.createElement(s.b,null,"path-to-regexp"),", you can provide them with a"," ",l.a.createElement(s.b,null,"pathOptions")," object."),l.a.createElement(m.a,null,"If a route has a children array property, it will"," ",l.a.createElement("strong",null,"always")," have the ",l.a.createElement(s.b,null,"end")," path option set to false."))),l.a.createElement(c.a,{title:"extra",id:"extra",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,"If you have any additional properties that you want attached to a route, use the ",l.a.createElement(s.b,null,"extra")," property. You will be able to use ",l.a.createElement(s.b,null,"route.extra")," in any custom route interactions.")),l.a.createElement(i.a,null,"const routes = prepareRoutes([\n  {\n    name: 'A Route',\n    path: 'a-route',\n    extra: {\n      transition: 'fade'\n    }\n  },\n  {\n    name: 'B Route',\n    path: 'b-route',\n    extra: {\n      enter: 'slide-right'\n    }\n  }\n]);")))))}}]),t}()}}]);