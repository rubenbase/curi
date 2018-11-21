(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(0),o=n.n(a),r=n(1),s=n(8),i=n(16),l=n(102),c=n(5),u={title:"Accessibility"};function h(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,u.title),o.a.createElement(c.b,null,o.a.createElement("p",null,'It is important to keep in mind that some visitors to your site rely on screen readers, so you should ensure that they have a pleasant experience. One "issue" with single-page applications is that they traditionally are more difficult for screen reader users because they do not have a great way for detecting navigation.'),o.a.createElement("p",null,"Curi provides a couple approaches to help you make your site accessible.")),o.a.createElement(l.a,{title:"Announcing Navigation",id:"aria-live"},o.a.createElement(c.b,null,o.a.createElement("p",null,"When the content of"," ",o.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"},"ARIA live regions")," ","change, the new content will be announced to screen reader users. The"," ",o.a.createElement(r.b,{name:"Package",params:{package:"side-effect-aria-live"}},o.a.createElement(s.b,null,"@curi/side-effect-aria-live"))," ","package provides a side effect for creating a live region and updating its content to announce navigation."),o.a.createElement("p",null,"The side effect takes a function which returns a string that should be read by screen readers. This can be whatever you want it to be, but screen readers normally read a page's title, so if you are setting ",o.a.createElement(s.b,null,"title"),"s for your responses, it is probably a good idea to have those announced.")),o.a.createElement(c.a,null,'import ariaLive from "@curi/side-effect-aria-live";\n  \nconst announcer = ariaLive(\n  ({ response }) => `Navigated to ${response.title}`\n);\n\nconst routes = prepareRoutes([\n  {\n    name: "Home",\n    path: "",\n    response() {\n      return {\n        title: "Home"\n      };\n    }\n  }\n]);\n\nconst router = curi(history, routes, {\n  sideEffects: [announcer]\n});\n\n// when the user navigates to "/", the screen reader\n// will read: "Navigated to Home"')),o.a.createElement(l.a,{title:"Focusing Content",id:"focus"},o.a.createElement(c.b,null,o.a.createElement("p",null,"Screen readers read the content of elements in the page that are focused. They can move through the page to read different elements. When you navigate, the content of the site will be re-rendered, so it is important for you to focus on the new content so that users using screen readers don't have to tab around looking for the new content. This is focus management and there are a couple things to keep in mind when implementing it.")),o.a.createElement(c.b,null,o.a.createElement("p",null,"When you focus an element, make sure to focus the specific content for a page. If you were to just focus the page's ",o.a.createElement(s.a,null,"body")," or a root ",o.a.createElement(s.a,null,"div"),", then the user might have to tab through less important content, like the page's menus, while looking for the new content.")),o.a.createElement(c.a,{lang:"html"},"\x3c!--\n  it is better to focus the important content (<main>)\n  and not the entire page\n--\x3e\n<div>\n  <header></header>\n  <main></main>\n</div>"),o.a.createElement(c.b,null,o.a.createElement("p",null,"The element that you focus needs to be focusable. Elements can be natively focusable (e.g. ",o.a.createElement(s.a,null,"input"),"s and ",o.a.createElement(s.a,null,"a"),"s) or you can use the ",o.a.createElement(s.b,null,"tabIndex")," property. A ",o.a.createElement(s.b,null,"tabIndex")," of"," ",o.a.createElement(s.b,null,"-1")," lets you focus an element, but keeps screen readers from accidentally focusing it when a user is tabbing through the page's contents."),o.a.createElement(i.b,null,"If you try to focus an element that is not focusable, then the document's ",o.a.createElement(s.a,null,"body")," will be focused instead.")),o.a.createElement(c.a,{lang:"html"},'\x3c!-- you can focus us --\x3e\n<input />\n<a href="https://example.com">Example</a>\n<div tabIndex="-1"></div>\n\n\x3c!-- but not me --\x3e\n<div></div>'),o.a.createElement(l.a,{title:"Focusing in React Applications",id:"focus-react",tag:"h3"},o.a.createElement(c.b,null,o.a.createElement("p",null,"The ",o.a.createElement(s.b,null,"@curi/react-dom")," package provides a ",o.a.createElement(s.a,null,"Focus")," ","component that gives you a ",o.a.createElement(s.b,null,"ref")," to attach to the component that should be focused. Whenever the user navigates, it will re-focus so that the screen reader is focused on the correct content.")),o.a.createElement(c.a,{lang:"jsx"},'import { curiProvider, Focus } from "@curi/react-dom";\n\nconst Router = curiProvider(router);\n\nReactDOM.render((\n  <Router>\n    {({ response }) => {\n      const { body:Body } = response;\n      return (\n        <Header />\n        <Focus>\n          {ref => (\n            <main ref={ref} tabIndex={-1}>\n            </main>\n          )}\n        </Focus>\n      );\n    }}\n  </Router>\n), holder);')),o.a.createElement(l.a,{title:"Focusing in Vue Applications",id:"focus-vue",tag:"h3"},o.a.createElement(c.b,null,o.a.createElement("p",null,"The ",o.a.createElement(s.b,null,"@curi/vue")," package provides a directive for focusing an element. The directive needs to be passed something that changes when the user navigates, so you can just pass it the current ",o.a.createElement(s.b,null,"response"))),o.a.createElement(c.a,{lang:"html"},'<template>\n  <header>...</header>\n  <main tabIndex="-1" v-curi-focus="$curi.response">\n    <component :is="$curi.response.body" />\n  </main>\n</template>'))),o.a.createElement(l.a,{title:"More Resources",id:"more"},o.a.createElement(c.b,null,o.a.createElement("p",null,"The above content is great for making navigation within your application accessible, but those aren't the only steps that you should take to making your site more accessible."),o.a.createElement("p",null,"If you are interested in other resources for improving the accessibility of your website, I would recommend Google's"," ",o.a.createElement("a",{href:"https://developers.google.com/web/fundamentals/accessibility/"},"collection of accessibility articles"),". WebAIM also provides a good"," ",o.a.createElement("a",{href:"https://webaim.org/standards/wcag/checklist"},"checklist")," ","to consult."),o.a.createElement("p",null,"The"," ",o.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en"},"ChromeVox")," ","extension for Chrome is a free screen reader that you can use to experience your site like a user using a screen reader would. This documentation site uses the above announcement and focus techniques, so you can see how they work by activating a screen reader and navigating throughout this site."))))}}}]);