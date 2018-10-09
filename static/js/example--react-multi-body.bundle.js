(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var a=n(0),o=n.n(a),r=n(93),l=n(94),i=n(9),s=n(6),u=n(16),c={title:"Multiple Body Components"};function m(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,c.title),o.a.createElement(r.a,{title:"Explanation",id:"explanation"},o.a.createElement("p",null,"The ",o.a.createElement(i.b,null,"body")," property of a response doesn't have to be a single component/function. Sometimes you might want to attach multiple values to a route. For example, specifying menu content for a route that is rendered in a different section of the application than the main content. Another use case is when you have multiple routes that may share the same root component, but may have different nested components."),o.a.createElement(s.a,{lang:"javascript"},"const routes = [\n    {\n      ...,\n      response() {\n        return {\n          body: {\n            main: MainComponent,\n            menu: MenuComponent\n          }\n        };\n      }\n    }\n  ];"),o.a.createElement(u.a,null,"One thing to remember when attaching multiple components to a route is that all of your routes should have the same root structure. Otherwise, when you render you will have to adapt your code to deal with different ",o.a.createElement(i.b,null,"response.body")," layouts."),o.a.createElement(s.a,{lang:"javascript"},"// be consistent, don't use\n  // different body types\n  const routes = [\n    {\n      ...,\n      response() {\n        return {\n          body: OneLayout\n        };\n      }\n    },\n    {\n      ...,\n      response() {\n        return {\n          body: { another: Layout }\n        };\n      }\n    }\n  ];")),o.a.createElement(r.a,{title:"Live Demo",id:"demo"},o.a.createElement(l.a,{id:"github/pshrmn/curi/tree/master/examples/react/multi-body"})),o.a.createElement(r.a,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",o.a.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/multi-body"},"here"),"."))}}}]);