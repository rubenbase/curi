(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{57:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(0),r=n.n(a),l=n(1),o=n(8),s=n(16),c=n(102),u=n(5),i={title:"Responses"};function m(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,i.title),r.a.createElement(u.b,null,r.a.createElement("p",null,"When Curi receives a location, it compares the location's"," ",r.a.createElement(o.b,null,"pathname")," to each route's ",r.a.createElement(o.b,null,"path")," to find which one matches best and uses that route to create a response object.")),r.a.createElement(c.a,{title:"The Properties of a Response Object",id:"response-properties"},r.a.createElement(u.b,null,r.a.createElement("p",null,"There are two types of response properties.")),r.a.createElement(u.b,null,r.a.createElement("p",null,'The "match" properties are set based on the route that matches a location. A response always has these properties.')),r.a.createElement(u.a,null,"// match properties\n{\n  // The location object used to generate the response.\n  location: { pathname: '/photos/6789/12345', ... },\n\n  // The name of the best matching route\n  name: 'Photo',\n\n  // The name of ancestor routes that matched\n  // part of the location's pathname\n  partials: ['Album'],\n\n  // An object containing the values parsed\n  // from the pathname by path-to-regexp.\n  // This includes params from ancestor routes.\n  params: { photoID: 12345, albumID: 6789 },\n}"),r.a.createElement(u.b,null,r.a.createElement("p",null,'The "settable" properties are ones that are added by a matched route\'s ',r.a.createElement(o.b,null,"response()")," function. These only exist on the response when they are returned by a route's ",r.a.createElement(o.b,null,"response()")," ","function."),r.a.createElement("p",null,'The "settable" properties are:'),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"property"),r.a.createElement("th",null,"description"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"body"),r.a.createElement("td",null,"The component(s) that should be rendered for a route.")),r.a.createElement("tr",null,r.a.createElement("td",null,"status"),r.a.createElement("td",null,"An http status, mostly useful for server side rendering.")),r.a.createElement("tr",null,r.a.createElement("td",null,"data"),r.a.createElement("td",null,"A place to attach any data you want to the response, such as data loaded in the route's ",r.a.createElement(o.b,null,"resolve")," functions.")),r.a.createElement("tr",null,r.a.createElement("td",null,"title"),r.a.createElement("td",null,"The response's title, which can be used with"," ",r.a.createElement(l.b,{name:"Package",params:{package:"side-effect-title"}},r.a.createElement(o.b,null,"@curi/side-effect-title"))," ","to set the browsers tab's title.")),r.a.createElement("tr",null,r.a.createElement("td",null,"error"),r.a.createElement("td",null,"A convenient place to attach any errors to the response.")),r.a.createElement("tr",null,r.a.createElement("td",null,"redirectTo"),r.a.createElement("td",null,"An object describing a route that Curi should automatically redirect to."))))),r.a.createElement(u.a,null,"// settable properties (optional)\n{\n  body: Photo,\n  // or maybe\n  body: {\n    menu: PhotoMenu,\n    main: Photo\n  },\n  // Please see below for more information\n  // about this property\n\n  status: 200,\n\n  data: {...},\n\n  title: 'Photo 12345',\n\n  error: undefined,\n\n  redirectTo: {...}\n}")),r.a.createElement(c.a,{title:"Response Body",id:"response-body"},r.a.createElement(u.b,null,r.a.createElement("p",null,"Curi isn't strict about how you use responses, but you will most likely always want to use a route's ",r.a.createElement(o.b,null,"response()")," function to attach a ",r.a.createElement(o.b,null,"body")," property to a response. The usual pattern is to use a route's ",r.a.createElement(o.b,null,"body")," property to describe which component(s) to render when a route matches. This can either be a single component for basic layouts or an object with a number of components for"," ",r.a.createElement(l.b,{name:"Example",params:{category:"react",slug:"multi-body"}},"advanced layouts"),"."),r.a.createElement(s.a,null,"Each route should use the same ",r.a.createElement(o.b,null,"body"),' "shape". If one route returns a single component while another route return an object, you will be making rendering more complicated for yourself.')),r.a.createElement(u.a,null,"// do NOT do this\n// mixing body shapes complicates rendering\nconst routes = prepareRoutes([\n  {\n    response() {\n      return { body: One }\n    }\n  },\n  {\n    response() {\n      return {\n        body: {\n          main: Main,\n          menu: Menu\n        }\n      }\n    }\n  }\n]);")),r.a.createElement(c.a,{title:"Redirect Response",id:"redirect-properties"},r.a.createElement(u.b,null,r.a.createElement("p",null,"When a route's ",r.a.createElement(o.b,null,"response()")," function returns an object with a"," ",r.a.createElement(l.b,{name:"Package",params:{package:"router"},hash:"response"},r.a.createElement(o.b,null,"redirectTo")," property"),", the router will use it to generate a location object that Curi will automatically redirect to.")),r.a.createElement(u.a,null,"{\n  // The redirectTo property provides information on\n  // where you should redirect to\n  redirectTo: { url: '/login' }\n}"),r.a.createElement(u.b,null,r.a.createElement("p",null,"You can choose whether or not you want responses with a"," ",r.a.createElement(o.b,null,"redirectTo")," property to be emitted. If they are not emitted, then the router will redirect without the application's observers knowing about the redirect. The default behavior is to emit redirects, but this also means that you have to render using the redirect response. The ",r.a.createElement(o.b,null,"{ emitRedirects: false }")," ","option prevents this.")),r.a.createElement(u.a,null,"const router = curi(history, routes, {\n  emitRedirects: false\n});")))}}}]);