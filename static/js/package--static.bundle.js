(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var a=n(0),r=n.n(a),l=n(104),o=n(105),i=n(8),s=n(102),u=n(5),c=n(16);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,d(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.PureComponent),function(e,t,n){t&&m(e.prototype,t),n&&m(e,n)}(t,[{key:"render",value:function(){var e=this.props;e.name,e.version,e.globalName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(u.b,null,r.a.createElement("p",null,"The ",r.a.createElement(i.b,null,"@curi/static")," package is for creating static assets for your server. Its exported functions should be used in a build script, not the source of an application."))),r.a.createElement(l.a,null,r.a.createElement(s.a,{tag:"h3",title:"staticFiles()",id:"staticFiles"},r.a.createElement(u.b,null,r.a.createElement("p",null,"The ",r.a.createElement(i.b,null,"staticFiles()")," function is used to generate HTML files for a static website and save them to the disk. An HTML file will be created for each page that you provide."),r.a.createElement("p",null,"Files will be created as ",r.a.createElement(i.b,null,"index.html")," in the directory for their path. For example, the page for the pathname"," ",r.a.createElement(i.b,null,"/about")," would create an ",r.a.createElement(i.b,null,"/about/index.html")," ","file.")),r.a.createElement(u.a,null,'import { staticFiles } from \'@curi/static\';\nimport { join } from "path";\n\nimport routes from "../src/routes";\n\nstaticFiles({\n  routes,\n  pages: [{ name: "Home" }, { name: "About" }],\n  outputDir: join(process.cwd(), "public"),\n  render: () => {...},\n  insert: () => {...}\n});'),r.a.createElement(u.b,null,r.a.createElement("p",null,r.a.createElement(i.b,null,"staticFiles()")," returns a Promise that resolve with an array of results. Each entry in the results array contains the"," ",r.a.createElement(i.b,null,"pathname")," of the result, a ",r.a.createElement(i.b,null,"success")," boolean, and, if ",r.a.createElement(i.b,null,"success")," is false, the ",r.a.createElement(i.b,null,"error")," that occurred."),r.a.createElement("p",null,"It can be useful to log the results to easily see what pages were successfully built and which had issues.")),r.a.createElement(u.a,null,'staticFiles({...})\n  .then(results => {\n    const resultString = results\n      .map(result => {\n        return result.success\n          ? `✔ ${result.pathname}`\n          : `✖ ${result.pathname} (${result.error.message})`;\n      })\n      .join("\\n");\n    console.log(resultString);\n  });'),r.a.createElement(s.a,{tag:"h4",title:"Arguments",id:"staticFiles-arguments"},r.a.createElement(s.a,{tag:"h5",title:"routes",id:"staticFiles-routes"},r.a.createElement(u.b,null,r.a.createElement("p",null,"The array of route descriptors that is passed to a router.")),r.a.createElement(u.a,null,'routes = prepareRoutes([\n  {\n    name: "Home",\n    path: "",\n  },\n  {\n    name: "User",\n    path: "u/:id"\n  }\n]);\n\n\nstaticFiles({\n  // ...\n  routes\n});')),r.a.createElement(s.a,{tag:"h5",title:"pages",id:"staticFiles-pages"},r.a.createElement(u.b,null,r.a.createElement("p",null,"An array of page descriptors. A page descriptor is an object with a ",r.a.createElement(i.b,null,"name")," property defining which route to generate a page for. If the route (or any of its ancestors) has any params, they should be passed as an object with the"," ",r.a.createElement(i.b,null,"params")," property.")),r.a.createElement(u.a,null,'const pages = [\n  { name: "Home" },\n  { name: "User", params: { id: 1 }},\n  { name: "User", params: { id: 2 }},\n];\n\n\nstaticFiles({\n  // ...\n  pages\n});')),r.a.createElement(s.a,{tag:"h5",title:"render()",id:"staticFiles-render"},r.a.createElement(u.b,null,r.a.createElement("p",null,"A function that takes the emitted ",r.a.createElement(i.b,null,"response"),","," ",r.a.createElement(i.b,null,"navigation"),", and ",r.a.createElement(i.b,null,"router")," for a location and returns the content that should be inserted into the page's HTML."),r.a.createElement("p",null,r.a.createElement(i.b,null,"render()"),"s behavior will depend on what type of application is being built. For a React application, this would call the ",r.a.createElement(i.b,null,"renderToString()")," method from"," ",r.a.createElement(i.b,null,"react-dom/server"),". A Vue application would use"," ",r.a.createElement(i.b,null,"vue-server-renderer"),"."),r.a.createElement("p",null,r.a.createElement(i.b,null,"render()")," can return anything you want it to. This may be a string for simple rendering, or an object with multiple properties for more complex rendering (e.g. title/style properties for the ",r.a.createElement(i.a,null,"head")," and rendered markup to insert in the ",r.a.createElement(i.a,null,"body"),").")),r.a.createElement(u.a,{lang:"jsx"},'// for a React application\nimport { renderToString } from "react-dom";\nimport { curiProvider } from "@curi/react-dom";\n\nfunction render(emitted) {\n  const { router } = emitted;\n  const Router = curiProvider(router);\n  return renderToString(\n    <Router>\n      {({ response }) => {...}}\n    </Router>\n  )\n}\n\nstaticFiles({\n  // ...\n  render\n});')),r.a.createElement(s.a,{tag:"h5",title:"insert()",id:"staticFiles-insert"},r.a.createElement(u.b,null,r.a.createElement("p",null,"A function that takes the value returned by the"," ",r.a.createElement(i.b,null,"render()")," function and inserts it into the full HTML for a page.")),r.a.createElement(u.a,null,'function insert(markup) {\n  return `<!doctype html>\n<html>\n  <head>\n    <title>${markup.title}</title>\n  </head>\n  <body>\n    <div id="root">${markup.html}</div>\n    <script src="/static/js/bundle.js"><\/script>\n  </body>\n</html>`;\n}\n\n// where the markup comes from the render() function:\nfunction render() {\n  return { title: "Yo!", html: "<div>Hey!</div>" };\n}\n\nstaticFiles({\n  // ...\n  insert\n});')),r.a.createElement(s.a,{tag:"h5",title:"outputDir",id:"staticFiles-outputDir"},r.a.createElement(u.b,null,r.a.createElement("p",null,"The folder where the generated HTML files should be saved."))),r.a.createElement(s.a,{tag:"h5",title:"outputRedirects",id:"staticFiles-outputRedirects"},r.a.createElement(u.b,null,r.a.createElement("p",null,"If a route automatically redirects, you probably do not need to create an HTML file for it. If you set"," ",r.a.createElement(i.b,null,"outputRedirects")," to ",r.a.createElement(i.b,null,"true"),", HTML files will be generated for redirect pages."),r.a.createElement("p",null,"Your server should be configured to return a fallback page when there is no content for a route, so you should not need to create HTML files for redirected pages."),r.a.createElement(c.a,null,"If you do create HTML files for redirects, be sure that your application knows how to render redirect responses. If you are using ",r.a.createElement(i.b,null,"emitRedirects = false")," in your client side code, your application probably doesn't know how to render redirects."))),r.a.createElement(s.a,{tag:"h5",title:"getRouterOptions()",id:"staticFiles-getRouterOptions"},r.a.createElement(u.b,null,r.a.createElement("p",null,"The ",r.a.createElement(i.b,null,"getRouterOptions()")," function returns the options for a router."),r.a.createElement("p",null,"When you call ",r.a.createElement(i.b,null,"staticFiles()"),", a number of routers will be created behind the scenes. ",r.a.createElement(i.b,null,"staticFiles()")," ","creates its own ",r.a.createElement(i.b,null,"history")," instances, and gets its routes from the ",r.a.createElement(i.b,null,"routes")," options, but the router may also need to be provided with other options, like route interactions."),r.a.createElement(c.a,null,"This is a function so that each router has its own instances of route interactions in order to avoid any possible issues with routers resetting other router's interactions.")),r.a.createElement(u.a,null,'import active from "@curi/active";\nconst getRouterOptions = () => ({\n  routes: [active()]\n});\n\nstaticFiles({\n  // ...\n  getRouterOptions\n});')))),r.a.createElement(s.a,{tag:"h3",title:"pathnames()",id:"pathnames"},r.a.createElement(u.b,null,r.a.createElement("p",null,"The ",r.a.createElement(i.b,null,"pathnames()")," function is used to generate pathnames from an array of provided page descriptors. This can be useful for generating a sitemap.")),r.a.createElement(s.a,{tag:"h4",title:"Arguments",id:"pathnames-arguments"},r.a.createElement(s.a,{tag:"h5",title:"routes",id:"pathnames-routes"},r.a.createElement(u.b,null,r.a.createElement("p",null,"The array of route descriptors that is passed to a router.")),r.a.createElement(u.a,null,'routes = prepareRoutes([\n  {\n    name: "Home",\n    path: "",\n  },\n  {\n    name: "User",\n    path: "u/:id"\n  }\n]);\n\n\nconst paths = pathnames({\n  // ...\n  routes\n});')),r.a.createElement(s.a,{tag:"h5",title:"pages",id:"pathnames-pages"},r.a.createElement(u.b,null,r.a.createElement("p",null,"An array of page descriptors. A page descriptor is an object with a ",r.a.createElement(i.b,null,"name")," property defining which route to generate a page for. If the route (or any of its ancestors) has any params, they should be passed as an object with the"," ",r.a.createElement(i.b,null,"params")," property.")),r.a.createElement(u.a,null,'const pages = [\n  { name: "Home" },\n  { name: "User", params: { id: 1 }},\n  { name: "User", params: { id: 2 }},\n];\n\n\nconst paths = pathnames({\n  // ...\n  pages\n});')),r.a.createElement(s.a,{tag:"h5",title:"routerOptions",id:"pathnames-routerOptions"},r.a.createElement(u.b,null,r.a.createElement("p",null,"The options for a router, predominantly useful for passing any route interactions the application may need while rendering.")),r.a.createElement(u.a,null,'import active from "@curi/active";\nconst routerOptions = {\n  routes: [active()]\n};\n\nconst paths = pathnames({\n  // ...\n  routerOptions\n});'))))))}}]),t}()}}]);