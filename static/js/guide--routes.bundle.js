(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{56:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var n=a(0),l=a.n(n),r=a(1),o=a(8),u=a(16),i=a(100),s=a(5),c={title:"Routes"};function h(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,c.title),l.a.createElement(s.b,null,l.a.createElement("p",null,"Routes are JavaScript objects with two required properties—",l.a.createElement(o.b,null,"name")," ","and ",l.a.createElement(o.b,null,"path"),"—and a number of optional properties."),l.a.createElement("p",null,"A route's ",l.a.createElement(o.b,null,"path")," is used to determine if a route matches a location. Path strings use"," ",l.a.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp"},l.a.createElement(o.b,null,"path-to-regexp"))," ","formatting, which allows you to define dynamic path parameters that a route should match."),l.a.createElement("p",null,"A route's ",l.a.createElement(o.b,null,"name")," is a unique identifier for a route. The"," ",l.a.createElement(o.b,null,"name")," is used to"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"route-interactions"}},"interact")," ","with a specific route."),l.a.createElement(u.a,null,l.a.createElement(o.b,null,"path")," strings do not start with a slash.")),l.a.createElement(s.a,null,'const routes = prepareRoutes([\n  {\n    name: "Home",\n    path: ""\n  },\n  {\n    name: "Album",\n    // the "id" segment can be any value\n    path: "a/:id"\n  }\n]);'),l.a.createElement(i.a,{title:"Preparing Routes",id:"prepareRoutes",tag:"h3"},l.a.createElement(s.b,null,l.a.createElement("p",null,"The routes array should be wrapped in a ",l.a.createElement(o.b,null,"prepareRoutes()")," ","call. This will pre-build the routes for the router.")),l.a.createElement(s.a,null,'import { prepareRoutes } from "@curi/router";\n\n// plain routes\nconst routes = [...]\n\n// prepared routes\nexport default prepareRoutes(routes);')),l.a.createElement(i.a,{title:"Route names",id:"route-names",tag:"h3"},l.a.createElement(s.b,null,l.a.createElement("p",null,"Why do routes have names? Curi lets you interact with routes using their names."),l.a.createElement("p",null,"For example, Curi provides a ",l.a.createElement(o.b,null,"pathname")," route interaction to generate the ",l.a.createElement(o.b,null,"pathname")," of a location to navigate to. Instead of manually writing ",l.a.createElement(o.b,null,"pathname")," strings, you tell Curi the name of the route that you want to navigate to (and also any required params) and Curi will create the ",l.a.createElement(o.b,null,"pathname")," ","for you.")),l.a.createElement(s.a,null,'const pathname = router.route.pathname(\n  "Album", { id: "abcd" }\n);\n// pathname = "/a/abcd"')),l.a.createElement(i.a,{title:"Asynchronous Routes",id:"async",tag:"h3"},l.a.createElement(s.b,null,l.a.createElement("p",null,"When a route matches, you might want to perform some actions before the application re-renders. This can include validating that a user is authorized to navigate to a route and loading data based on the path parameters parsed from the location."),l.a.createElement("p",null,"A route's ",l.a.createElement(o.b,null,"resolve")," property is an optional object for attaching functions to a route. A response will not be emitted until after all of a route's ",l.a.createElement(o.b,null,"resolve")," functions have finished.")),l.a.createElement(s.a,null,'{\n  name: "User",\n  path: "u/:id",\n  resolve: {\n    authorized: () => {\n      // run code to verify the user can view the page\n      return Promise.resolve(true);\n    },\n    body: () => {\n      // import the User component using the import() API\n      return import("./components/User");\n    },\n    data: ({ name, location, params, partials }) => {\n      // get specific data using the route\'s params\n      return UserAPI.get(params.id);\n    }\n  }\n}'),l.a.createElement(s.b,null,l.a.createElement("p",null,"A route with ",l.a.createElement(o.b,null,"resolve")," properties is asynchronous, which has some effects to be aware of. You can read about these in the"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"sync-or-async"}},"Sync or Async")," ","guide."))),l.a.createElement(i.a,{title:"The Response Function",id:"route-response",tag:"h3"},l.a.createElement(s.b,null,l.a.createElement("p",null,"Each route can have a ",l.a.createElement(o.b,null,"response()"),' function, which returns an object of properties to merge with route\'s "match" properties. This combined object is a'," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"responses"}},'"response"')," ","object.")),l.a.createElement(s.a,null,'import User from "./components/User";\n\nconst routes = prepareRoutes([\n  {\n    name: "User",\n    path: "u/:id",\n    resolve: {\n      data: ({ params }) => UserAPI.get(params.id)\n    },\n    response({ match, resolved, error }) {\n      if (error) {\n        // ...\n      }\n      return {\n        body: User,\n        data: resolved.data,\n        title: `User ${match.params.id}`\n      };\n    }\n  }\n]);'),l.a.createElement(s.b,null,l.a.createElement("p",null,"Only valid response properties will be merged onto the response. These are the optional response properties listed above (",l.a.createElement(o.b,null,"body"),", ",l.a.createElement(o.b,null,"title"),", ",l.a.createElement(o.b,null,"status"),", ",l.a.createElement(o.b,null,"data"),","," ",l.a.createElement(o.b,null,"redirectTo"),", and ",l.a.createElement(o.b,null,"error"),")."),l.a.createElement("p",null,"The function receives an object with a number of properties you might find useful."),l.a.createElement("ol",null,l.a.createElement("li",null,l.a.createElement(o.b,null,"match")," is an object of properties based on the matched route."),l.a.createElement("li",null,l.a.createElement(o.b,null,"resolved")," is an object with the results of the route's"," ",l.a.createElement(o.b,null,"resolve")," functions."),l.a.createElement("li",null,l.a.createElement(o.b,null,"error")," is only defined when one of the"," ",l.a.createElement(o.b,null,"resolve")," functions throws an error does not catch it itself.")))),l.a.createElement(i.a,{title:"Matching Routes",id:"matching-routes"},l.a.createElement(s.b,null,l.a.createElement("p",null,"Whenever Curi receives a new location, it will determine which route has a ",l.a.createElement(o.b,null,"path")," that matches the new location's"," ",l.a.createElement(o.b,null,"pathname"),". It does this by walking over the route objects in the order that they are defined in the array. If a route has"," ",l.a.createElement(o.b,null,"children"),", those will be checked before moving to the route's nest sibling.")),l.a.createElement(i.a,{title:"No Matching Route",id:"catch-all",tag:"h3"},l.a.createElement(s.b,null,l.a.createElement(u.b,null,"If none of your routes match a location, Curi will do nothing! Your routes should include catch all route to match these locations yourself. The best way to do this is to add a route to the end of your routes array with a ",l.a.createElement(o.b,null,"path")," of"," ",l.a.createElement(o.b,null,'"(.*)"'),", which will match every pathname.")),l.a.createElement(s.a,null,"{\n  name: 'Not Found',\n  path: '(.*)',\n}")),l.a.createElement(i.a,{title:"Route Matching Walkthrough",id:"match-walkthrough",tag:"h3"},l.a.createElement(s.a,null,"const routes = prepareRoutes([\n  {\n    name: 'Home',\n    path: '',\n  },\n  {\n    name: 'Album',\n    path: 'a/:album'\n  },\n  {\n    name: 'Not Found',\n    path: '(.*)' // this matches EVERY pathname\n  }\n]);"),l.a.createElement(s.b,null,l.a.createElement("p",null,"Curi's default matching behavior looks for exact matches. This means that when the route only matches part of the pathname, it does not count as a match. Routes can be configured to allow partial matching, but exact matching is usually preferable."),l.a.createElement("p",null,"If the user navigates to a location with the pathname"," ",l.a.createElement(o.b,null,'"/a/red/yellow"'),", the ",l.a.createElement(o.b,null,"Album")," route will only partially match, so Curi will move on to the next route,"," ",l.a.createElement(o.b,null,"Not Found"),". ",l.a.createElement(o.b,null,"Not Found")," has a catch all"," ",l.a.createElement(o.b,null,"path")," that matches every pathname, so it will match the location."),l.a.createElement("p",null,"If a route has children, Curi will check if any of those routes form a complete match before moving on to the next route in the routes array.")),l.a.createElement(s.a,null,"// when the pathname is '/a/Coloring+Book/All+Night',\n// the Album route will partially match the pathname.\n// Then, its child route Song will be tested and fully\n// match the pathname.\n{\n  name: 'Album',\n  path: 'a/:album',\n  children: [\n    {\n      name: 'Song',\n      path: ':title'\n    }\n  ]\n}")),l.a.createElement(i.a,{title:"Path Matching Options",id:"options",tag:"h3"},l.a.createElement(s.b,null,l.a.createElement("p",null,"You can control whether a route does exact or partial matching with"," ",l.a.createElement(r.b,{hash:"pathOptions"},l.a.createElement(o.b,null,"pathOptions"))," ","property. If you set ",l.a.createElement(o.b,null,"{ end: false }"),", a route that partially matches will consider itself matched.")),l.a.createElement(s.a,null,"// when the pathname is\n// '/a/Good+Kid,+M.A.A.D+City/Poetic+Justice',\n// the Album route will partially match, but because\n// it sets \"end\" to false, the partial match will still be used.\n{\n  name: 'Album',\n  path: 'a/:albumID',\n  pathOptions: {\n    end: false\n  }\n}"))))}}}]);