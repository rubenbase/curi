(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return u});var a=n(0),r=n.n(a),i=n(8),o=n(5),s=n(100),l=n(101),c={title:"Transitions"};function u(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,c.title),r.a.createElement(s.a,{title:"Explanation",id:"explanation"},r.a.createElement("p",null,"This example uses ",r.a.createElement(i.b,null,"react-transition-group")," (v1) to animate navigation transitions, but it should be relatively straightforward to adapt this for other animation packages (e.g. react-motion)."),r.a.createElement("p",null,"All that this does is to render a ",r.a.createElement(i.a,null,"CSSTransitionGroup")," around the response's body. The only other thing that you need to do is to set a key on the rendered component, which is necessary for"," ",r.a.createElement(i.a,null,"CSSTransitionGroup")," to know which of its children are entering/leaving/staying."),r.a.createElement(o.a,{lang:"jsx"},"function render({ response }) {\n    return (\n      <CSSTransitionGroup>\n        <response.body key={response.location.pathname} />\n      </CSSTransitionGroup>\n    );\n  }")),r.a.createElement(s.a,{title:"Live Demo",id:"demo"},r.a.createElement(l.a,{id:"github/pshrmn/curi/tree/master/examples/react/transitions"})),r.a.createElement(s.a,{title:"On GitHub",id:"source"},"If you want to run this code locally, the source code is available on GitHub"," ",r.a.createElement("a",{href:"https://github.com/pshrmn/curi/tree/master/examples/react/transitions"},"here"),"."))}}}]);