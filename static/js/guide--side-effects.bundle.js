(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{65:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var r=n(0),a=n.n(r),l=n(1),o=n(8),s=n(100),i=n(5),c={title:"Side Effects"};function u(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,c.title),a.a.createElement(i.b,null,a.a.createElement("p",null,"Curi side effects are permanent router response handlers that are run after those registered using ",a.a.createElement(o.b,null,"router.observe()")," and"," ",a.a.createElement(o.b,null,"router.once()"),"."),a.a.createElement("p",null,"Whenever a new response is generated, all of the side effect functions will be called. They will be given an object with the new"," ",a.a.createElement(o.b,null,"response"),", object, a ",a.a.createElement(o.b,null,"navigation")," object with some extra routing data (the navigation action the previous response), and the ",a.a.createElement(o.b,null,"router")," object.")),a.a.createElement(i.a,null,"function logResponse({ response }) {\n  // call your logging API to record the response\n}"),a.a.createElement(s.a,{title:"Adding Side Effects",id:"adding"},a.a.createElement(i.b,null,a.a.createElement("p",null,"Side effects are provided to your router with the"," ",a.a.createElement(o.b,null,"sideEffects")," property of the options object. This is an array of observer functions.")),a.a.createElement(i.a,null,"const router = curi(history, routes, {\n  sideEffects: [logResponse, updateTitle]\n});"),a.a.createElement(i.b,null,a.a.createElement("p",null,"Side effects are always run after observers registered using"," ",a.a.createElement(o.b,null,"router.observe()")," and ",a.a.createElement(o.b,null,"router.once()"),". Because those forms of response handler registration are primarily used for rendering the application, this means that the side effects will be called after the application has re-rendered.")),a.a.createElement(i.a,null,"const router = curi(history, routes, {\n  sideEffects: [logResponse]\n});\n\nconst render = () => {\n  // render the app\n};\n\nrouter.observe(render);\n\n// whenever there is a response, render will be\n// called before logResponse"),a.a.createElement(s.a,{title:"Official Side Effects",id:"official",tag:"h3"},a.a.createElement(i.b,null,a.a.createElement("p",null,'Curi has two "official" side effect packages:'),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.b,{name:"Package",params:{package:"side-effect-title"}},"@curi/side-effect-title")),a.a.createElement("li",null,a.a.createElement(l.b,{name:"Package",params:{package:"side-effect-scroll"}},"@curi/side-effect-scroll")))),a.a.createElement(i.a,null,'import titleEffect from "@curi/side-effect-title";\nimport scrollEffect from "@curi/side-effect-scroll";\n\nconst router = curi(history, routes, {\n  sideEffect: [titleEffect(), scrollEffect()]\n});'))),a.a.createElement(s.a,{title:"Creating Side Effects",id:"creating"},a.a.createElement(i.b,null,a.a.createElement("p",null,'When creating your own side effect, you can write a regular function or a side effect "factory".')),a.a.createElement(i.a,null,"function mySideEffect({ response, navigation }) {\n  console.log('Navigating to', response.location);\n  console.log('Navigation action:', navigation.action);\n}\n\nconst router = curi(history, routes, {\n  sideEffects: [mySideEffect]\n});"),a.a.createElement(i.b,null,a.a.createElement("p",null,"A side effect factory lets create a more customizable side effect.")),a.a.createElement(i.a,null,"function AnalyticsLogger(options) {\n  // do some setup with the provided options\n  const logger = setupMyLogger(options);\n\n  // and return the actual side effect function\n  return sideEffect({ response }) {\n    logger(response);\n  }\n}"),a.a.createElement(i.b,null,a.a.createElement("p",null,"You may want to review the"," ",a.a.createElement(l.b,{name:"Guide",params:{slug:"responses"},hash:"response-properties"},"response properties")," ","to know which properties you should expect a response to have."))))}}}]);