(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{62:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c});var a=t(0),l=t.n(a),r=t(1),o=t(8),s=(t(16),t(102)),i=t(5),m={title:"Svelte"};function c(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,m.title),l.a.createElement(s.a,{title:"Store Integration",id:"store"},l.a.createElement(i.b,null,l.a.createElement("p",null,"Curi relies on Svelte's store to interface with an application. By adding the ",l.a.createElement(o.b,null,"response")," (plus the ",l.a.createElement(o.b,null,"router")," and"," ",l.a.createElement(o.b,null,"navigation")," objects) to the store, they are accessible throughout the application."),l.a.createElement("p",null,l.a.createElement(o.b,null,"@curi/svelte")," provides a function to link the router to the store. This sets up an"," ",l.a.createElement(r.b,{name:"Guide",params:{slug:"navigating"},hash:"observer"},"observer"),", so that whenever there is a new response, the parts of your application that use the response will be re-rendered.")),l.a.createElement(i.a,{lang:"jsx"},'import store from "svelte/store";\nimport { curiStore } from "@curi/svelte";\n\nimport router from "./router";\n\nconst store = new Store();\ncuriStore(router, store);'),l.a.createElement(s.a,{title:"Rendering with the response",id:"rendering-response",tag:"h3"},l.a.createElement(i.b,null,l.a.createElement("p",null,"Svelte allows you to render dynamic components using the"," ",l.a.createElement(o.a,null,"svelte:component this")," syntax. If you set Svelte components as the ",l.a.createElement(o.b,null,"body")," properties on your responses, you can combine ",l.a.createElement(o.a,null,"svelte:component this")," and"," ",l.a.createElement(o.b,null,"response.body")," to render the appropriate component for a"," ",l.a.createElement(o.b,null,"response"),"."),l.a.createElement("p",null,"A root component is a good place to perform general application layout, like menus, in addition to rendering the response's"," ",l.a.createElement(o.b,null,"body"),".")),l.a.createElement(i.a,{lang:"html"},'<template>\n  <header>\n    <NavLinks />\n  </header>\n  <main>\n    <svelte:component this={$curi.response.body} />\n  </main>\n</template>\n\n<script>\n  import NavLinks from "./NavLinks";\n  export default {\n    components: { NavLinks }\n  };\n<\/script>'),l.a.createElement(i.b,null,l.a.createElement("p",null,"If your routes use an object to attach multiple components to a response, splitting them apart in computed properties may give your templates a cleaner look."),l.a.createElement("p",null,"If you do attach multiple components to a response, please remember that you want every route to set the same ",l.a.createElement(o.b,null,"body")," ","shape. Otherwise, you'll have to determine the shape and change how you render, which can quickly become messy.")),l.a.createElement(i.a,{lang:"html"},'<script>\nconst routes = prepareRoutes([\n  {\n    name: "Home",\n    path: "",\n    response() {\n      return {\n        body: {\n          main: HomeMain,\n          menu: HomeMenu\n        }\n      }\n    }\n  },\n  // ...\n]);\n<\/script>\n\n<template>\n  <header>\n    <svelte:component this={menu} />\n  </header>\n  <main>\n  <svelte:component this={main} />\n  </main>\n</template>\n\n<script>\n  export default {\n    computed: {\n      main({ $curi }) {\n        return $curi.response.body.main;\n      },\n      menu({ $curi }) {\n        return $curi.response.body.menu;\n      }\n    }\n  }\n<\/script>'))),l.a.createElement(s.a,{title:"Navigating",id:"navigating"},l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(o.a,null,"Link")," component is used to navigate between routes within an application. When it renders in the DOM, it will render as an anchor (",l.a.createElement(o.a,null,"a"),") element."),l.a.createElement("p",null,"The ",l.a.createElement(o.a,null,"Link"),"'s ",l.a.createElement(o.b,null,"to")," prop describes which route clicking the link should navigate to. If you pass an invalid route name, Curi will warn you."),l.a.createElement("p",null,"If a route has any params (or if any of a route's ancestors have params for nested routes), the ",l.a.createElement(o.b,null,"params")," prop is used to pass these to the ",l.a.createElement(o.a,null,"Link"),".")),l.a.createElement(i.a,{lang:"html"},'<template>\n  <nav>\n    <ul>\n      <li>\n        <Link name="Home">Home</Link>\n      </li>\n      <li>\n        <Link name="About">About</Link>\n      </li>\n      <li>\n        <Link name="User" params={{ id: \'blue\' }}>\n          Blue\n        </Link>\n      </li>\n    </ul>\n  </nav>\n</template>\n\n<script>\n  import Link from "@curi/svelte/components/Link.html";\n\n  export default {\n    components: { Link }\n  };\n<\/script>'),l.a.createElement(i.b,null,l.a.createElement("p",null,"The ",l.a.createElement(o.a,null,"Link")," also takes ",l.a.createElement(o.b,null,"hash"),", ",l.a.createElement(o.b,null,"query"),", and ",l.a.createElement(o.b,null,"state")," props to attach their values to the location that will be navigated to.")),l.a.createElement(i.a,{lang:"jsx"},'<Link name="Home" hash="details">Home</Link>\n// renders\n<a href="/#details">Home</a>')),l.a.createElement(i.b,null,l.a.createElement("p",null,"Please check out the full"," ",l.a.createElement(r.b,{name:"Package",params:{package:"svelte"},hash:"API"},l.a.createElement(o.b,null,"@curi/svelte"))," ","API documentation to see every component that the package provides.")))}}}]);