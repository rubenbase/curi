(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(53).concat([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),l=r(n(87));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.params,n=e.data;if(!n)return a.default.createElement("div",null,"The requested example could not be found.");var r=l.default[t.category][t.slug];return a.default.createElement(r,{name:n.name})}},,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Subsection=t.Section=void 0;var a,l=(a=n(0))&&a.__esModule?a:{default:a},r=n(1);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)n=u[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=function(e){var t=e.title,n=e.id,a=e.children,u=e.tag,i=e.type,o=void 0===i?"section":i;return l.default.createElement("div",{className:o,id:n},l.default.createElement(u,null,t,l.default.createElement(r.Link,{className:"header-link",hash:n},"#")),a)};t.Section=function(e){var t=e.tag,n=void 0===t?"h2":t,a=i(e,["tag"]);return l.default.createElement(o,u({type:"section",tag:n},a))};t.Subsection=function(e){var t=e.tag,n=void 0===t?"h3":t,a=i(e,["tag"]);return l.default.createElement(o,u({type:"subsection",tag:n},a))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(17)),r=o(n(7)),u=o(n(6)),i=o(n(5));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.children;return a.default.createElement(r.default,{type:"example"},a.default.createElement(i.default,null,t||null),a.default.createElement(u.default,null,a.default.createElement("h2",null,"Examples"),a.default.createElement(l.default,null)))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=n(0))&&a.__esModule?a:{default:a};var r=function(e){var t=e.id;return l.default.createElement("div",{className:"demo"},l.default.createElement("iframe",{src:"https://codesandbox.io/embed/".concat(t),width:"100%",height:"600px",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),l.default.createElement("p",null,"Use the three buttons at the top of the Sandbox to toggle view modes. Clicking the menu button in the top left corner opens a menu that allows you to switch between files."))};t.default=r},,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(58)),r=i(n(59)),u=(n(2),n(10),n(57));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"A clone of ",a.default.createElement("a",{href:"https://twitch.tv"},"Twitch"),' without all of the "good stuff" (streaming video). This application uses Vue for rendering and Curi for routing.')),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(r.default,{id:"github/pshrmn/twitch-curi-demo"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},a.default.createElement("p",null,"If you want to run this code locally, the source code is available on GitHub ",a.default.createElement("a",{href:"https://github.com/pshrmn/twitch-curi-demo"},"here"),".")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(58)),r=i(n(59)),u=(n(2),n(10),n(57));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"Curi's Svelte implementation relies on the Svelte store to access route related data throughout the application.")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(r.default,{id:"github/pshrmn/curi/tree/master/examples/svelte/basic"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},a.default.createElement("p",null,"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/svelte/basic"},"here"),".")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"You can easily animate transitions between locations with Vue using the",a.default.createElement(r.InlineComponent,null,"transition")," component."),a.default.createElement("p",null,"If you will be transitioning between the same route (i.e. using params), you will need to attach a ",a.default.createElement(r.InlineJS,null,"key")," to the ",a.default.createElement(r.InlineComponent,null,"component"),"."),a.default.createElement(r.PrismBlock,{lang:"html"},'<transition>\n  <component\n    :is="$curi.response.body"\n    :key="$curi.response.location.key"\n  />\n</transition>')),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/vue/transitions"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/vue/transitions"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"This example mimics the way that Pinterest works. Whether or not this is a good design pattern is up for debate, but at the very least it is helpful to see one way that you can do this with Curi."),a.default.createElement("p",null,'If you are unfamiliar with the Pinterest model, this is how it works: When you navigate to a "modal route" from within the application, the route will open in a modal window (preserving the background content from the page that the user navigated from). If you load the same location manually, it will render the location in a full window.'),a.default.createElement("p",null,"You will have to take a number of things into consideration when implementing this:"),a.default.createElement("p",null,"The first is how to know whether to render a modal window or a full page. The easiest way to do his is to use ",a.default.createElement(r.InlineJS,null,"location.state")," to attach a value to the location that indicates that you want to render a modal. State is persistent across refreshes and the user clicking the browser's forward/back buttons, so you will also have to take that into consideration."),a.default.createElement("p",null,"Second, ",a.default.createElement(r.InlineJS,null,"navigation.previous")," is used to render the base layer displayed under the modal."),a.default.createElement("p",null)),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/vue/modal"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/vue/modal"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(57),u=o(n(59)),i=n(2);function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(r.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"You can easily generate breadcrumb navigation links for the current route using the ",a.default.createElement(i.InlineJS,null,"@curi/route-ancestors")," package. This allows you to get the route names for the current route. Using these names you can render a Link for each one (passing the parameters if necessary).")),a.default.createElement(r.Section,{title:"Live Demo",id:"demo"},a.default.createElement(u.default,{id:"github/pshrmn/curi/tree/master/examples/vue/breadcrumbs"})),a.default.createElement(r.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/vue/breadcrumbs"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"Sometimes, you don't want the user to leave the page. Ideally, this is for their own good, such as when a form is half filled out, and not becacuse you're running a spam site."),a.default.createElement("p",null,"When you want to do this, you can use the ",a.default.createElement(r.InlineComponent,null,"curi-block")," ","component from react-curi to display a user confirmation that requires user input before navigation will occur.")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/vue/blocking-navigation"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/vue/blocking-navigation"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=o(n(59)),u=n(2),i=(n(10),n(57));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(i.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"While Vue does have an official router, this project shows how you could use Curi as the router for a Vue project instead. It uses"," ",a.default.createElement(u.InlineComponent,null,"curi-link")," component provided by the the ",a.default.createElement(u.InlineJS,null,"@curi/vue")," ","package.")),a.default.createElement(i.Section,{title:"Live Demo",id:"demo"},a.default.createElement(r.default,{id:"github/pshrmn/curi/tree/master/examples/vue/basic"})),a.default.createElement(i.Section,{title:"On GitHub",id:"source"},a.default.createElement("p",null,"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/vue/basic"},"here"),".")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"Sometimes you will want to redirect based on the results of your"," ",a.default.createElement(r.InlineJS,null,"on.every()")," function. For instance, you might see that a user is not authenticated and shouldn't be able to view a page."),a.default.createElement("p",null,"When this happens, the route's ",a.default.createElement(r.InlineJS,null,"response()")," function should modify the response by calling its redirect method."),a.default.createElement(r.PrismBlock,{lang:"javascript"},"const routes = [\n  // ...,\n  {\n    name: 'Protected',\n    path: 'super-secret',\n    response: () => {\n      if (!store.userIsAuthenticated) {\n        return {\n          name: \"Login\",\n          status: 302\n        };\n      }\n    }\n  },\n  {\n    name: 'Login',\n    path: 'login',\n    ...\n  }\n];")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/vue/authentication"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/vue/authentication"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,'You may want to style a link differently when it is "active" (based on the current response object). You can do so using the active prop of'," ",a.default.createElement(r.InlineComponent,null,"Link"),"."),a.default.createElement("p",null,"The active prop must be an object with a ",a.default.createElement(r.InlineJS,null,"merge")," function as one of its properties. The merge function is responsible for updating the props that will be passed to the anchor (",a.default.createElement(r.InlineComponent,null,"a"),")."),a.default.createElement("p",null,"You can also pass a ",a.default.createElement(r.InlineJS,null,"partial")," property to the active object. partial should be a boolean, and when it is true (the Link's"," ",a.default.createElement(r.InlineJS,null,"to")," property is in the response's partials array) it can be \"active\" if its params match the response's params.")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/vue/active-links"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/vue/active-links"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"This example uses ",a.default.createElement(r.InlineJS,null,"react-transition-group")," (v1) to animate navigation transitions, but it should be relatively straightforward to adapt this for other animation packages (e.g. react-motion)."),a.default.createElement("p",null,"All that this does is to render a ",a.default.createElement(r.InlineComponent,null,"CSSTransitionGroup")," around the response's body. The only other thing that you need to do is to set a key on the rendered component, which is necessary for"," ",a.default.createElement(r.InlineComponent,null,"CSSTransitionGroup")," to know which of its children are entering/leaving/staying."),a.default.createElement(r.PrismBlock,{lang:"jsx"},"function render({ response }) {\n  return (\n    <CSSTransitionGroup>\n      <response.body key={response.location.pathname} />\n    </CSSTransitionGroup>\n  );\n}")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/react/transitions"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/transitions"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),l=c(n(58)),r=n(57),u=c(n(59)),i=n(2),o=n(10);function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(r.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"The ",a.default.createElement(i.InlineJS,null,"body")," property of a response doesn't have to be a single component/function. Sometimes you might want to attach multiple values to a route. This allows you to do things like specifying menu content for a route that is rendered in a different section than the main content. Another use case is when you have multiple routes that may share the same root component, but may have different nested components."),a.default.createElement(i.PrismBlock,{lang:"javascript"},"const routes = [\n  {\n    ...,\n    response() {\n      return {\n        body: {\n          main: MainComponent,\n          menu: MenuComponent\n        }\n      };\n    }\n  }\n];"),a.default.createElement(o.Note,null,"One thing to remember when attaching multiple components to a route is that all of your routes should have the same root structure. Otherwise, when you render you will have to adapt your code to deal with different"," ",a.default.createElement(i.InlineJS,null,"response.body")," layouts."),a.default.createElement(i.PrismBlock,{lang:"javascript"},"// be consistent, don't use\n// different body types\nconst routes = [\n  {\n    ...,\n    response() {\n      return {\n        body: OneLayout\n      };\n    }\n  },\n  {\n    ...,\n    response() {\n      return {\n        body: { another: Layout }\n      };\n    }\n  }\n];")),a.default.createElement(r.Section,{title:"Live Demo",id:"demo"},a.default.createElement(u.default,{id:"github/pshrmn/curi/tree/master/examples/react/multi-body"})),a.default.createElement(r.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/multi-body"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"This example mimics the way that Pinterest works. Whether or not this is a good design pattern is up for debate, but at the very least it is helpful to see one way that you can do this with Curi."),a.default.createElement("p",null,'If you are unfamiliar with the Pinterest model, this is how it works: When you navigate to a "modal route" from within the application, the route will open in a modal window (preserving the background content from the page that the user navigated from). If you load the same location manually, it will render the location in a full window.'),a.default.createElement("p",null,"You will have to take a number of things into consideration when implementing this:"),a.default.createElement("p",null,"The first is how to know whether to render a modal window or a full page. The easiest way to do his is to use ",a.default.createElement(r.InlineJS,null,"location.state")," to attach a value to the location that indicates that you want to render a modal. State is persistent across refreshes and the user clicking the browser's forward/back buttons, so you will also have to take that into consideration."),a.default.createElement("p",null,"Second, ",a.default.createElement(r.InlineJS,null,"navigation.previous")," is used to render the base layer displayed under the modal."),a.default.createElement("p",null)),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/react/modal"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/modal"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"When a user navigates to one of your routes, the re-rendering will not be triggered until a response has been created. If the route that matches has a ",a.default.createElement(r.InlineJS,null,"on.every()")," function that makes a request to the server, the re-render will be delayed, possibly giving the user the impression that nothing is happening."),a.default.createElement("p",null,"The ",a.default.createElement(r.InlineComponent,null,"Prefetch")," component lets you load data prior to navigating to a route. This uses the ",a.default.createElement(r.InlineJS,null,"prefetch")," route interaction and the"," ",a.default.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver"},a.default.createElement(r.InlineJS,null,"IntersectionObserver"))," ","API to load data for a route when a specified element is visible in the page. This example uses ",a.default.createElement(r.InlineComponent,null,"Link"),"s so that when the associated"," ",a.default.createElement(r.InlineComponent,null,"a")," element is visible, the data will be fetched."),a.default.createElement(r.PrismBlock,{lang:"javascript"},'import prefetch from "@curi/route-prefetch";\n\nconst router = curi(history, routes, {\n  route: [prefetch()]\n});\n\n<Prefetch match={{ name: "Album", params: { id: 1 } }}>\n  {ref => (\n    <Link to="Album" params={{ id: 1 }} ref={ref}>\n      Album 1\n    </Link>\n  )}\n</Prefetch>\n// when <a href="/a/1">Album 1</a> is visible,\n// the data for that route will be loaded')),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/react/data-loading"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/data-loading"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(57),u=o(n(59)),i=n(2);function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(r.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"You can easily generate breadcrumb navigation links for the current route using the ",a.default.createElement(i.InlineJS,null,"@curi/route-ancestors")," package. This allows you to get the route names for the current route. Using these names you can render a Link for each one (passing the parameters if necessary).")),a.default.createElement(r.Section,{title:"Live Demo",id:"demo"},a.default.createElement(u.default,{id:"github/pshrmn/curi/tree/master/examples/react/breadcrumbs"})),a.default.createElement(r.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/breadcrumbs"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"Sometimes, you don't want the user to leave the page. Ideally, this is for their own good, such as when a form is half filled out, and not becacuse you're running a spam site."),a.default.createElement("p",null,"When you want to do this, you can use the ",a.default.createElement(r.InlineComponent,null,"Block")," component from react-curi to display a user confirmation that requires user input before navigation will occur.")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/react/blocking-navigation"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/blocking-navigation"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(58)),r=i(n(59)),u=(n(2),n(10),n(57));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"This example demonstrates the basics of a Curi + React application.")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(r.default,{id:"github/pshrmn/curi/tree/master/examples/react/basic"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},a.default.createElement("p",null,"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/basic"},"here"),".")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"Sometimes you will want to redirect based on the results of your"," ",a.default.createElement(r.InlineJS,null,"on.every()")," function. For instance, you might see that a user is not authenticated and shouldn't be able to view a page."),a.default.createElement("p",null,"When this happens, your ",a.default.createElement(r.InlineJS,null,"response()")," function should modify the response by calling its redirect method."),a.default.createElement(r.PrismBlock,{lang:"javascript"},"const routes = [\n  // ...,\n  {\n    name: 'Protected',\n    path: 'super-secret',\n    response: () => {\n      if (!store.userIsAuthenticated) {\n        return {\n          redirectTo: { name: \"Login\" },\n          status: 302\n        };\n      }\n    }\n  },\n  {\n    name: 'Login',\n    path: 'login',\n    ...\n  }\n];")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/react/authentication"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/authentication"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,'You may want to style a link differently when it is "active" (based on the current response object). You can do so using the active prop of'," ",a.default.createElement(r.InlineComponent,null,"Link"),"."),a.default.createElement("p",null,"The active prop must be an object with a ",a.default.createElement(r.InlineJS,null,"merge")," function as one of its properties. The merge function is responsible for updating the props that will be passed to the anchor (",a.default.createElement(r.InlineComponent,null,"a"),")."),a.default.createElement("p",null,"You can also pass a ",a.default.createElement(r.InlineJS,null,"partial")," property to the active object. partial should be a boolean, and when it is true (the Link's"," ",a.default.createElement(r.InlineJS,null,"to")," property is in the response's partials array) it can be \"active\" if its params match the response's params.")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/react/active-links"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/active-links"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(2),u=n(57),i=o(n(59));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"Once a response has completed (the route's ",a.default.createElement(r.InlineJS,null,"on.initial()")," ","and/or ",a.default.createElement(r.InlineJS,null,"on.every()")," functions have resolved), the response's properties are used to create a JavaScript object. Then, any response handler functions are called and passed that JavaScript object . Side effects are permanent observers (they cannot be removed). Side effects can either be run before (default) or after observers that were set using ",a.default.createElement(r.InlineJS,null,"router.respond()"),". They receive the new response and an object with information about the navigation."),a.default.createElement("p",null,"A side effect function can do anything you want. Side effects are observers, but unlike observers assigned using"," ",a.default.createElement(r.InlineJS,null,"router.respond()"),", side effects cannot be removed."),a.default.createElement("p",null,"You pass any side effect functions that you want to use to the"," ",a.default.createElement(r.InlineJS,null,"curi")," call, using the ",a.default.createElement(r.InlineJS,null,"sideEffects")," property of the options object."),a.default.createElement(r.PrismBlock,{lang:"javascript"},"import curi from 'curi';\nimport mySideEffect from './mySideEffect';\n\nconst router = curi(history, routes, {\n  sideEffects: [mySideEffect]\n});")),a.default.createElement(u.Section,{title:"Live Demo",id:"demo"},a.default.createElement(i.default,{id:"github/pshrmn/curi/tree/master/examples/misc/side-effect"})),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/misc/side-effect"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(58)),r=n(57),u=n(2);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(r.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"Server rendering with Curi is fairly straightforward. You should have a catch all route handler that will respond to all (non-static file) requests."),a.default.createElement(u.PrismBlock,{lang:"javascript"},"function catchAll(req, res) {\n  // 1. Create a memory history using the requested location\n  const history = InMemory({ locations: [req.url]});\n\n  // 2. Create a router\n  const router = curi(history, routes);\n\n  // 3. Wait for the response to be generated\n  router.respond(({ response, navigation }) => {\n    // 4. Generate the HTML markup by rendering a <CuriProvider> and\n    // passing it the router.\n    const markup = renderToString(\n      <CuriProvider router={router}>\n        {renderFunction}\n      </CuriProvider>\n    );\n    // 5. Insert the markup into the page's html and send it\n    res.send(renderFullPage(markup));\n  });\n}"),a.default.createElement("p",null,"The above example is very basic. Some other things that you might need to consider are:"),a.default.createElement("ul",null,a.default.createElement("li",null,"Data loading — You would need to maintain two copies of your routes if you want to handle data fetching on the server differently than it works on the client side. This is not something that I have explored very closely yet, so I don't have any recommendations on exactly how to approach this."),a.default.createElement("li",null,"Code splitting — In order to use dynamic imports on the server, you will probably need to use a Babel plugin like"," ",a.default.createElement(u.InlineJS,null,"dynamic-import-node"),". Unfortunately,"," ",a.default.createElement(u.InlineJS,null,"dynamic-import-node")," breaks Webpack's code splitting. In order for your code to be split into multiple bundles, you should ensure that ",a.default.createElement(u.InlineJS,null,"dynamic-import-node")," isn't being run when building your client side bundle. The solution used in this experiment is to use the ",a.default.createElement(u.InlineJS,null,"env")," property.",a.default.createElement(u.PrismBlock,{lang:"javascript"},'{\n  "presets": [ "es2015", "react" ],\n  "plugins": [\n    "syntax-dynamic-import"\n  ],\n  "env": {\n    "server": {\n      "plugins": ["dynamic-import-node"]\n    }\n  }\n}'),"Then, when starting the server, make sure that BABEL_ENV=server.",a.default.createElement(u.PrismBlock,{lang:"markup"},"cross-env BABEL_ENV=server npm start")))),a.default.createElement(r.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/misc/server-rendering"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(58)),r=n(2),u=n(57);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"This example uses unbundled JavaScript and script tags to serve its content.If you want to use ",a.default.createElement(r.InlineComponent,null,"script")," tags in your application, Curi does provide builds for that. You can easily use"," ",a.default.createElement("a",{href:"https://unpkg.com"},"unpkg")," to load the scripts, or download and serve them yourself."),a.default.createElement("p",null,"The global variable names for each package is upper camel case, so the"," ",a.default.createElement(r.InlineJS,null,"curi")," package is globally available as ",a.default.createElement(r.InlineJS,null,"Curi")," and the"," ",a.default.createElement(r.InlineJS,null,"curi-react")," package is globally available as"," ",a.default.createElement(r.InlineJS,null,"CuriReact"),".")),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/misc/umd-example"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),l=o(n(58)),r=n(1),u=n(57),i=n(2);function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.name;return a.default.createElement(l.default,null,a.default.createElement("h1",null,t),a.default.createElement(u.Section,{title:"Explanation",id:"explanation"},a.default.createElement("p",null,"Code splitting with Curi routes is done using the"," ",a.default.createElement(i.InlineJS,null,"on.initial()")," function. The"," ",a.default.createElement(r.Link,{to:"Guide",params:{slug:"code-splitting"}},"code splitting")," ","guide covers the basic principles for how to do this. This example provides you with code that actually implements what is explained there.")),a.default.createElement(u.Section,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",a.default.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/misc/code-splitting"},"here"),"."))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=I(n(86)),l=I(n(85)),r=I(n(84)),u=I(n(83)),i=I(n(82)),o=I(n(81)),c=I(n(80)),s=I(n(79)),d=I(n(78)),f=I(n(77)),m=I(n(76)),h=I(n(75)),p=I(n(74)),E=I(n(73)),v=I(n(72)),b=I(n(71)),y=I(n(70)),g=I(n(69)),w=I(n(68)),S=I(n(67)),_=I(n(66)),x=I(n(65));function I(e){return e&&e.__esModule?e:{default:e}}var k={misc:{"code-splitting":a.default,"script-tags":l.default,"server-rendering":r.default,"side-effect":u.default},react:{"active-links":i.default,authentication:o.default,basic:c.default,"blocking-navigation":s.default,breadcrumbs:d.default,"data-loading":f.default,modal:m.default,"multi-body":h.default,transitions:p.default},svelte:{basic:_.default},vue:{"active-links":E.default,authentication:v.default,basic:b.default,"blocking-navigation":y.default,breadcrumbs:g.default,modal:w.default,transitions:S.default},full:{twitch:x.default}};t.default=k}])]);