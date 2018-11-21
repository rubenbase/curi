(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var r=n(0),l=n.n(r),a=n(104),o=n(105),u=n(8),c=n(16),i=n(102),s=n(5);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,p(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,l.a.PureComponent),function(e,t,n){t&&h(e.prototype,t),n&&h(e,n)}(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(s.b,null,l.a.createElement("p",null,"The prefetch route interaction can be used fetch data for a route prior to navigating. The interaction will call a route's"," ",l.a.createElement(u.b,null,"resolve")," functions (if they exist on the route)."),l.a.createElement("p",null,"Prefetching data means results in faster renders after navigation because you don't have to wait for the data to load."))),l.a.createElement(s.b,null,l.a.createElement(c.a,null,"Prefetching ",l.a.createElement(u.b,null,"resolve")," functions calls is only beneficial if you cache the results because the function will be re-called when the user navigates to that route. Functions wrapped by Curi's"," ",l.a.createElement(u.b,null,"once()")," wrapper will automatically re-use the results from their first call.")),l.a.createElement(a.a,null,l.a.createElement(i.a,{tag:"h3",title:"prefetch",id:"prefetch"},l.a.createElement(s.b,null,l.a.createElement("p",null,"A function to create the prefetch route interaction. When you create your router, the result is passed to the router using the `route` option, which will add a ",l.a.createElement(u.b,null,"prefetch()")," function to the router's route interactions.")),l.a.createElement(s.a,null,"import { curi } from '@curi/router';\nimport prefetch from '@curi/route-prefetch';\n\nconst router = curi(history, routes, {\n  route: [prefetch()]\n});\n\nrouter.route.prefetch(\"Some Route\");"),l.a.createElement(i.a,{title:"Arguments",id:"arguments",tag:"h3"},l.a.createElement(s.b,null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"argument"),l.a.createElement("th",null,"description"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name"),l.a.createElement("td",null,"The name of the route to prefetch.")),l.a.createElement("tr",null,l.a.createElement("td",null,"resolve"),l.a.createElement("td",null,"Route props that are used by the ",l.a.createElement(u.b,null,"resolve")," ","functions.")),l.a.createElement("tr",null,l.a.createElement("td",null,"which"),l.a.createElement("td",null,"An array whose values are the names of the"," ",l.a.createElement(u.b,null,"resolve")," functions that should be called. If this array is not provided, all available functions will be called.")))),l.a.createElement(c.a,null,l.a.createElement("p",null,"This route interaction will only register routes that have"," ",l.a.createElement(u.b,null,"resolve")," functions. If you try calling this for any routes with neither of those, ",l.a.createElement(u.b,null,"prefetch()")," will resolve an object with an ",l.a.createElement(u.b,null,"error")," property."))),l.a.createElement(s.a,null,"\n{\n  name: \"User\",\n  path: \"u/:id\",\n  resolve: {\n    one: () => {...},\n    two: () => {...}\n  }\n}\n\n// call a route's resolve.one() and resolve.two() functions\nrouter.route.prefetch(\n  'User',\n  { params: { id: 2 }}\n)\n\n// only call the route's resolve.one() function\nrouter.route.prefetch(\n  'User',\n  { params: { id: 3 }},\n  ['one']\n);")))))}}]),t}()}}]);