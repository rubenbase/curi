(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{53:function(e,t,l){"use strict";l.r(t),l.d(t,"default",function(){return c});var a=l(0),r=l.n(a),n=l(8),o=l(105),s=l(3),i={title:"Installation"};function c(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,i.title),r.a.createElement(s.b,null,r.a.createElement("p",null,"Every application that uses Curi needs to install is"," ",r.a.createElement(n.b,null,"@curi/router"),"."),r.a.createElement("p",null,"You will also need a Hickory package (",r.a.createElement(n.b,null,"@hickory/browser"),","," ",r.a.createElement(n.b,null,"@hickory/hash"),", or ",r.a.createElement(n.b,null,"@hickory/in-memory"),"). Which package you need depends on the application, but the browser package is best for most websites.")),r.a.createElement(s.a,{lang:"bash"},"npm install @hickory/browser @curi/router"),r.a.createElement(s.b,null,r.a.createElement("p",null,"These packages can also be loaded from"," ",r.a.createElement("a",{href:"https://unpkg.com"},"Unpkg"),".")),r.a.createElement(s.a,{lang:"markup"},'<script\n  src="https://unpkg.com/@hickory/browser/dist/hickory-browser.min.js"\n><\/script>\n<script\n  src="https://unpkg.com/@curi/router/dist/curi-router.min.js"\n><\/script>'),r.a.createElement(o.a,{title:"Promises",id:"promises"},r.a.createElement(s.b,null,r.a.createElement("p",null,"Curi uses Promises, so you may need to include a polyfill to add Promise support for older browsers (including IE 11)."),r.a.createElement("p",null,"If you need a general ES2015 polyfill, you can check out the one provided by Babel's"," ",r.a.createElement("a",{href:"https://babeljs.io/docs/usage/polyfill/#usage-in-browser"},"babel-polyfill")," ","package. If you only need a Promise polyfill, then you should check out the"," ",r.a.createElement("a",{href:"https://github.com/stefanpenner/es6-promise"},"es6-promise")," ","package or"," ",r.a.createElement("a",{href:"https://polyfill.io/v2/docs/features/"},"polyfill.io"),".")),r.a.createElement(s.a,{lang:"html"},'<script\n  src="https://cdn.polyfill.io/v2/polyfill.js?features=Promise"\n><\/script>')))}}}]);