(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var a=n(0),o=n.n(a),l=n(1),r=n(110),i=n(8),s=n(3),c=n(16),u=n(105);n(106);function h(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Vue Basics Tutorial"),o.a.createElement("p",null,"In this tutorial, we will be building a website for a bookstore. This will focus on the front-end part of the application."),o.a.createElement(r.a,null,o.a.createElement("ul",null,o.a.createElement("li",null,"Learn how to define routes and setup the Curi router."),o.a.createElement("li",null,"Learn how to render Vue components based on the current location."),o.a.createElement("li",null,"Learn how to navigate within the application."))),o.a.createElement(u.a,{title:"Setup",id:"setup"},o.a.createElement("p",null,"We will be using"," ",o.a.createElement("a",{href:"https://github.com/vuejs/vue-cli"},o.a.createElement(i.b,null,"@vue/cli"))," ","to develop this website."),o.a.createElement(c.a,null,"The instructions here assume that you have NodeJS and NPM > 5.2 installed on your computer. If you do not, cannot, or prefer to avoid setup altogether, you can follow along using"," ",o.a.createElement("a",{href:"https://codesandbox.io/"},"CodeSandbox"),". Some of the boilerplate will be different, but the differences are minor."),o.a.createElement("p",null,"Begin by opening a terminal and navigating to the directory where you want to save your code. Then, we will use ",o.a.createElement(i.b,null,"@vue/cli")," to create the application. We"),o.a.createElement(s.a,{lang:"bash"},"# install vue-cli if it isn't already\nnpm install --global @vue/cli\n# create the application\nvue create curi-bookstore\n# select the default option\n\n# enter the new app directory\ncd curi-bookstore\n# start the dev server\nyarn serve"),o.a.createElement("p",null,"The dev server will automatically update when we change files, so we can leave that running. We will still be working in the terminal, so you will want to open up a new terminal window/tab and navigate to the application's directory. Once you have done that, there are a few packages that need to be installed."),o.a.createElement(s.a,{lang:"bash"},"yarn add @hickory/browser @curi/router @curi/vue"),o.a.createElement("p",null,"The ",o.a.createElement(i.b,null,"@hickory/browser")," package will be used to create an object that interacts with the browser to power navigation (e.g. updates the URI in the address bar when you click a link)."," ",o.a.createElement(i.b,null,"@curi/router")," provides the function to actually create the router. ",o.a.createElement(i.b,null,"@curi/vue")," gives us a plugin for Vue and some Vue components that interact with the router.")),o.a.createElement(u.a,{title:"History and Locations",id:"history"},o.a.createElement("p",null,"URIs can be broken into parts to identify a location. With a single-page application, we don't care about the URI's protocol (http, https) or its hostname (www.example.com). The properties we care about are the ",o.a.createElement(i.b,null,"pathname"),", ",o.a.createElement(i.b,null,"hash"),", and ",o.a.createElement(i.b,null,"query"),"."),o.a.createElement(s.a,{lang:"javascript"},'// uri = "https://example.com/one?key=value#id\n{\n  pathname: "/one",\n  query: "key=value",\n  hash: "id"\n}'),o.a.createElement("p",null,"The router will match its routes against a location's"," ",o.a.createElement(i.b,null,"pathname")," to figure out which route matches. The"," ",o.a.createElement(i.b,null,"query")," and ",o.a.createElement(i.b,null,"hash")," values are not used for matching routes."),o.a.createElement("p",null,"Curi uses the ",o.a.createElement("a",{href:"https://github.com/pshrmn/hickory"},"Hickory")," ","library to create a history object that will enable us to navigate within our application. Hickory provides a few different packages to create history objects for different environments, but the only one we care about right now is the browser history, which comes from the"," ",o.a.createElement(i.b,null,"@hickory/browser")," package. A browser history object will interact with the browser's native"," ",o.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API"},"History API")," ","so that our application can change locations (and the URI in the address bar) without making a request to a server and reloading the page."),o.a.createElement("p",null,"We can import the ",o.a.createElement(i.b,null,"Browser")," function from"," ",o.a.createElement(i.b,null,"@hickory/browser")," in our main file (",o.a.createElement(i.b,null,"src/main.js"),", which ",o.a.createElement(i.b,null,"@vue/cli")," created for us). To create a history object, we call that function."),o.a.createElement(c.a,null,"The history object can be configured with"," ",o.a.createElement("a",{href:"https://github.com/pshrmn/hickory/blob/master/docs/api/Browser.md#options"},"an options object"),", but we will stick with the defaults."),o.a.createElement(s.a,{lang:"javascript","data-line":"3,9"},"// src/main.js\nimport Vue from 'vue'\nimport Browser from '@hickory/browser'\n\nimport App from './App.vue'\n\nVue.config.productionTip = false\n\nconst history = Browser()\n\nnew Vue({\n  render: h => h(App)\n}).$mount('#app')"),o.a.createElement(c.a,null,"Eslint will complain here because we haven't actually used the new"," ",o.a.createElement(i.b,null,"history")," object. We can ignore that warning for now because we'll get rid of it soon enough.")),o.a.createElement(u.a,{title:"Defining the Routes",id:"defining-routes"},o.a.createElement("p",null,"Routes are JavaScript objects that define the valid locations for a router. They have a ",o.a.createElement(i.b,null,"name")," and a ",o.a.createElement(i.b,null,"path"),"."),o.a.createElement(s.a,{lang:"javascript"},'// this is a route\n{ name: "Home", path: "" }'),o.a.createElement("p",null,"A route's ",o.a.createElement(i.b,null,"name")," needs to be unique. We will use route names when we navigate within the application. A route's ",o.a.createElement(i.b,null,"path")," ","describes the location pathname that it should match."),o.a.createElement(u.a,{title:"Path basics",id:"path-basics",className:"aside",tag:"h3"},o.a.createElement("p",null,"Route paths are strings describing the pathname segments they should match."),o.a.createElement(s.a,{lang:"javascript"},"{ path: '' } // matches \"/\"\n{ path: 'about/stuff' } // matches \"/about/stuff\""),o.a.createElement("p",null,"Paths never begin with a slash."),o.a.createElement(s.a,{lang:"javascript"},"// yes\n{ path: '' }\n// no\n{ path: '/' }"),o.a.createElement("p",null,"Paths can include dynamic parameters. These are specified with a string that starts with a colon (",o.a.createElement(i.b,null,":"),") followed by the name of the params."),o.a.createElement(s.a,{lang:"javascript"},"// a param named \"id\"\n{ path: ':id' }"),o.a.createElement("p",null,"Routes can be nested using the ",o.a.createElement(i.b,null,"children")," property of a route. A nested route inherits the path from its ancestor route(s), so its ",o.a.createElement(i.b,null,"path")," is only the additional part of the pathname that should be matched."),o.a.createElement(s.a,{lang:"javascript"},'{\n  name: "Parent",\n  path: "parent", // matches /parent\n  children: [\n    // matches /parent/daughter\n    { name: "Daughter", path: "daughter" },\n    // matches /parent/son\n    { name: "Son", path: "son" }\n  ]\n}')),o.a.createElement("p",null,"The website will start with four routes."),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"name"),o.a.createElement("th",null,"path"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Home"),o.a.createElement("td",null,o.a.createElement(i.b,null,'""')),o.a.createElement("td",null,"Lists books available for purchase")),o.a.createElement("tr",null,o.a.createElement("td",null,"Book"),o.a.createElement("td",null,o.a.createElement(i.b,null,'"book/:id"')),o.a.createElement("td",null,"Details about an individual book")),o.a.createElement("tr",null,o.a.createElement("td",null,"Checkout"),o.a.createElement("td",null,o.a.createElement(i.b,null,'"checkout"')),o.a.createElement("td",null,'"Buy" the books in the shopping cart')),o.a.createElement("tr",null,o.a.createElement("td",null,"Catch All"),o.a.createElement("td",null,o.a.createElement(i.b,null,'"(.*)"')),o.a.createElement("td",null,"Display a not found page for all other locations")))),o.a.createElement(c.a,null,"The catch all route uses a regular expression syntax to indicate that it should match everything. Curi uses the"," ",o.a.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp"},o.a.createElement(i.b,null,"path-to-regexp"))," ","package for route matching. We will only be using some of its basic syntax, but you can read its documentation to learn about more advanced path syntax."),o.a.createElement("p",null,"Inside of the ",o.a.createElement(i.b,null,"src")," directory, we will create a"," ",o.a.createElement(i.b,null,"routes.js")," file where we can define the application's routes."),o.a.createElement(s.a,{lang:"bash"},"touch src/routes.js"),o.a.createElement(s.a,{lang:"javascript"},'// src/routes.js\nexport default [\n  {\n    name: "Home",\n    path: ""\n  },\n  {\n    name: "Book",\n    path: "book/:id"\n  },\n  {\n    name: "Checkout",\n    path: "checkout"\n  },\n  {\n    name: "Catch All",\n    path: "(.*)"\n  }\n];')),o.a.createElement(u.a,{title:"The Router",id:"router"},o.a.createElement("p",null,"With the history object created and the routes defined, we are ready to create the router. Back in the ",o.a.createElement(i.b,null,"src/index.js")," file, we should import the ",o.a.createElement(i.b,null,"curi")," function from"," ",o.a.createElement(i.b,null,"@curi/router")," as well as our routes from"," ",o.a.createElement(i.b,null,"src/routes.js"),". Creating the router is done by calling the"," ",o.a.createElement(i.b,null,"curi()")," function and passing it the ",o.a.createElement(i.b,null,"history")," ","object and the ",o.a.createElement(i.b,null,"routes")," array."),o.a.createElement(s.a,{lang:"javascript","data-line":"3,6,12"},"// src/main.js\nimport Vue from 'vue'\nimport { curi } from '@curi/router';\nimport Browser from '@hickory/browser'\n\nimport routes from './routes';\nimport App from './App.vue'\n\nVue.config.productionTip = false\n\nconst history = Browser()\nconst router = curi(history, routes)\n\nnew Vue({\n  render: h => h(App)\n}).$mount('#app')"),o.a.createElement(c.a,null,"The Eslint warning has now moved to the ",o.a.createElement(i.b,null,"router"),", but this is still nothing to worry about."),o.a.createElement("p",null,"We will add router support to the Vue application using a plugin. This plugin does a couple of things. First, it makes some Curi components available within the application. The only one of these components that we will be using is the ",o.a.createElement(i.a,null,"curi-link"),". Second, it makes router related values accessible to the components in the application. The router is available as ",o.a.createElement(i.b,null,"this.$router")," and the"," ",o.a.createElement(i.b,null,"response")," and ",o.a.createElement(i.b,null,"navigation")," (we will cover these next) are grouped under ",o.a.createElement(i.b,null,"this.$curi"),". When the"," ",o.a.createElement(i.b,null,"CuriPlugin")," is installed, the ",o.a.createElement(i.b,null,"router")," as passed in the options object."),o.a.createElement(s.a,{lang:"javascript","data-line":"5,14"},"// src/main.js\nimport Vue from 'vue'\nimport { curi } from '@curi/router';\nimport Browser from '@hickory/browser'\nimport { CuriPlugin } from '@curi/vue'\n\nimport routes from './routes';\nimport App from './App.vue'\n\nVue.config.productionTip = false\n\nconst history = Browser()\nconst router = curi(history, routes)\nVue.use(CuriPlugin, { router })\n\nnew Vue({\n  render: h => h(App)\n}).$mount('#app')")),o.a.createElement(u.a,{title:"Rendering with Vue",id:"rendering"},o.a.createElement("p",null,"We can now render our application. We will re-use the provide"," ",o.a.createElement(i.b,null,"App.vue")," file."),o.a.createElement(u.a,{title:"Responses and Navigation",id:"responses",className:"aside",tag:"h3"},o.a.createElement("p",null,"Whenever Curi receives a location, it matches its routes against it and generates a response. This is an object with data related to the route that matched the location. Later on we will modify this data ourselves, but for now the important thing to know is that the response lets us know about the current route."),o.a.createElement(s.a,{lang:"javascript"},"// a sample response object\n{\n  body: undefined,\n  data: undefined,\n  error: undefined,\n  location: { pathname: '/', ... },\n  name: 'Home',\n  params: {},\n  partials: [],\n  status: 200\n}"),o.a.createElement("p",null,"The router uses an observer model to let functions subscribe to be called when a new response is generated. The ",o.a.createElement(i.b,null,"CuriPlugin")," ","sets up an observer so that it can trigger a re-render whenever there is a new one."),o.a.createElement("p",null,"The ",o.a.createElement(i.b,null,"navigation")," object contains additional information about a navigation that doesn't make sense to include in the response object. This includes the navigation's \"action\" (",o.a.createElement(i.b,null,"PUSH"),", ",o.a.createElement(i.b,null,"POP"),", or ",o.a.createElement(i.b,null,"REPLACE"),") and the previous response object. This can be useful for animation and modals.")),o.a.createElement("p",null,"Most of the time, the response is the only property you will need to use to render, but the other two may occasionally be useful."),o.a.createElement("p",null,"How do we use the response to render? Any way you want. Based on the sample response above, the ",o.a.createElement(i.b,null,"name")," stands out as the best way to identify which route matched. We can make this even easier by adding another property to the response: ",o.a.createElement(i.b,null,"body"),"."),o.a.createElement("p",null,"Earlier it was mentioned that response objects can be modified. This is done by returning an object from a route's ",o.a.createElement(i.b,null,"response()")," ","function. ",o.a.createElement(i.b,null,"response()")," receives an object with a whole bunch of properties that we can use to help determine how to modify the response, but for the time being, we don't care about any of those. All we need to know is that if we return an object with a"," ",o.a.createElement(i.b,null,"body")," property, that value will be set on our response object."),o.a.createElement(s.a,{lang:"javascript"},'{\n  name: "Home",\n  path: "",\n  response() {\n    return {\n      body: "Home, sweet home."\n    };\n    /*\n      * response = {\n      *   body: "Home, sweet home.",\n      *   // ...\n      * }\n      */\n  }\n}'),o.a.createElement("p",null,"If the return object's ",o.a.createElement(i.b,null,"body")," property is a Vue component, we can render it using ",o.a.createElement(i.a,null,"Component :is"),"."),o.a.createElement("p",null,"We haven't actually defined components for our routes yet, so we should throw together some placeholders."),o.a.createElement(s.a,{lang:"bash"},"touch src/components/Home.vue src/components/Book.vue \\\n  src/components/Checkout.vue src/components/NotFound.vue"),o.a.createElement(s.a,{lang:"html"},"\x3c!-- src/components/Home.vue --\x3e\n<template>\n  <div>Home</div>\n</template>"),o.a.createElement(s.a,{lang:"html"},"\x3c!-- src/components/Book.vue --\x3e\n<template>\n  <div>Book</div>\n</template>"),o.a.createElement(s.a,{lang:"html"},"\x3c!-- src/components/Checkout.vue --\x3e\n<template>\n  <div>Checkout</div>\n</template>"),o.a.createElement(s.a,{lang:"html"},"\x3c!-- src/components/NotFound.vue --\x3e\n<template>\n  <div>Not Found</div>\n</template>"),o.a.createElement("p",null,"These components can be imported in ",o.a.createElement(i.b,null,"src/routes.js")," and attached to their respective routes."),o.a.createElement(s.a,{lang:"javascript","data-line":"2-5,11-15,20-24,29-33,38-42"},'// src/routes.js\nimport Home from \'./components/Home\';\nimport Book from \'./components/Book\';\nimport Checkout from \'./components/Checkout\';\nimport NotFound from \'./components/NotFound\';\n\nexport default [\n  {\n    name: "Home",\n    path: "",\n    response() {\n      return {\n        body: Home\n      };\n    }\n  },\n  {\n    name: "Book",\n    path: "book/:id",\n    response() {\n      return {\n        body: Book\n      };\n    }\n  },\n  {\n    name: "Checkout",\n    path: "checkout",\n    response() {\n      return {\n        body: Checkout\n      };\n    }\n  },\n  {\n    name: "Catch All",\n    path: "(.*)",\n    response() {\n      return {\n        body: NotFound\n      };\n    }\n  }\n];'),o.a.createElement("p",null,"We can now update ",o.a.createElement(i.b,null,"App.vue")," to render"," ",o.a.createElement(i.b,null,"response.body")," as a component, which as mentioned above is available through ",o.a.createElement(i.b,null,"this.$curi"),"."),o.a.createElement(s.a,{lang:"html"},'\x3c!-- src/App.vue --\x3e\n<template>\n  <component :is="$curi.response.body" />\n</template>\n'),o.a.createElement("p",null,"We can also remove the ",o.a.createElement(i.a,null,"HelloWorld")," component."),o.a.createElement(s.a,{lang:"bash"},"rm src/components/HelloWorld.vue"),o.a.createElement("p",null,"At this point in time our app is rendering, but is isn't very interesting because we cannot navigate between locations.")),o.a.createElement(u.a,{title:"Navigating between locations",id:"navigating"},o.a.createElement("p",null,"The ",o.a.createElement(i.b,null,"CuriPlugin")," makes a ",o.a.createElement(i.a,null,"curi-link")," component available with the appliaction. We can use that to navigate between locations within our application."),o.a.createElement(u.a,{title:o.a.createElement("span",null,"The ",o.a.createElement(i.a,null,"curi-link")," Component"),id:"link-component",className:"aside",tag:"h3"},o.a.createElement("p",null,"Navigation isn't done by manually typing the pathname of the location the link should navigate to. Instead, we specify the name of the route using the ",o.a.createElement(i.b,null,"to")," prop."),o.a.createElement(s.a,{lang:"html"},'\x3c!-- { name: "Home", path: "" } --\x3e\n<curi-link to="Home">Home</curi-link>\n\x3c!-- <a href="/">Home</a> --\x3e'),o.a.createElement("p",null,"If a route has params, we provide these to the ",o.a.createElement(i.a,null,"curi-link")," ","as a ",o.a.createElement(i.b,null,"params")," object. For a nested route, we would also need to provide params for any ancestor routes."),o.a.createElement(s.a,{lang:"html"},'\x3c!-- { name: "Book", path: "book/:id" } --\x3e\n<curi-link to="Book" :params="{ id: 7 }">The Dark Forest</curi-link>\n\x3c!-- <a href="/book/7">The Dark Forest</a> --\x3e'),o.a.createElement("p",null,"The ",o.a.createElement(i.a,null,"curi-link")," is only for in-app navigation. If you want to link to pages outside of the application, use an anchor."),o.a.createElement(s.a,{lang:"html"},'\x3c!-- in-app --\x3e\n<curi-link to="Some Route">Some Route</curi-link>\n\n\x3c!-- out of app --\x3e\n<a href="https://github.com">GitHub</a>'),o.a.createElement("p",null,"If you need to attach query or hash data to a ",o.a.createElement(i.a,null,"curi-link"),", use the ",o.a.createElement(i.b,null,"query")," and ",o.a.createElement(i.b,null,"hash")," props."),o.a.createElement(s.a,{lang:"html"},'\x3c!-- { name: "Checkout", path: "checkout" } --\x3e\n<curi-link to="Checkout" :query="a=123">Checkout</curi-link>\n\x3c!-- <a href="/checkout?a=123">Checkout</a> --\x3e')),o.a.createElement(u.a,{title:"A Navigation Menu",id:"nav-menu",tag:"h3"},o.a.createElement("p",null,"We will start with creating a navigation menu component with links to our home page and checkout page."),o.a.createElement(s.a,{lang:"bash"},"touch src/components/NavMenu.vue"),o.a.createElement(s.a,{lang:"html"},'\x3c!-- src/components/NavMenu.vue --\x3e\n<template>\n  <nav>\n    <ul>\n      <li>\n        <curi-link to="Home">Home</curi-link>\n      </li>\n      <li>\n        <curi-link to="Checkout">Checkout</curi-link>\n      </li>\n    </ul>\n  </nav>\n</template>'),o.a.createElement("p",null,"We can import that in our ",o.a.createElement(i.b,null,"App.vue")," file and add it to our template. This is a good opportunity to also add some structure to the elements in the template."),o.a.createElement(s.a,{lang:"html"},"\x3c!-- src/App.vue --\x3e\n<template>\n  <div>\n    <header>\n      <nav-menu />\n    </header>\n    <main>\n      <component :is=\"$curi.response.body\" />\n    </main>\n  </div>\n</template>\n\n<script type=\"src/javascript\">\n  import NavMenu from './components/NavMenu';\n\n  export default {\n    name: 'app',\n    components: {\n      'nav-menu': NavMenu\n    }\n  };\n<\/script>")),o.a.createElement(u.a,{title:"Linking to Books",id:"book-links",tag:"h3"},o.a.createElement("p",null,"We want to be able to link to individual books from the home page. First, we need data about the books. For now, we're going to hard-code the books in the ",o.a.createElement(i.b,null,"src/books.js")," module."),o.a.createElement(s.a,{lang:"bash"},"touch src/books.js"),o.a.createElement("p",null,"You can copy+paste or modify the data, but the structure of the provided data should stay the same."),o.a.createElement(s.a,{lang:"javascript"},"// src/books.js\nexport default [\n  {\n    id: 0,\n    title: 'The Name of the Wind',\n    author: 'Patrick Rothfuss',\n    published: '2007',\n    pages: 662\n  },\n  {\n    id: 1,\n    title: \"The Wise Man's Fear\",\n    author: 'Patrick Rothfuss',\n    published: '2011',\n    pages: 994\n  },\n  {\n    id: 2,\n    title: 'The Way of Kings',\n    author: 'Brandon Sanderson',\n    published: '2010',\n    pages: 1007\n  },\n  {\n    id: 3,\n    title: 'A Storm of Swords',\n    author: 'George R.R. Martin',\n    published: '2003',\n    pages: 1177\n  },\n  {\n    id: 78,\n    title: 'Words of Radiance',\n    author: 'Brandon Sanderson',\n    published: '2014',\n    pages: 1087\n  }\n];"),o.a.createElement("p",null,"The data can be imported in the ",o.a.createElement(i.a,null,"Home")," component. We will iterate over the books with a ",o.a.createElement(i.a,null,"Link")," to each one."),o.a.createElement(s.a,{lang:"html"},'\x3c!-- src/components/Home.vue --\x3e\n<template>\n  <div>\n    <ul>\n      <li v-for="b in books" :key="b.id">\n        <curi-link to="Book" :params="{ id: b.id }">\n          {{b.title}} by {{b.author}}\n        </curi-link>\n      </li>\n    </ul>\n  </div>\n</template>\n\n<script>\n  import books from \'../books\';\n\n  export default {\n    name: \'home\',\n    data() {\n      return { books };\n    }\n  }\n<\/script>'),o.a.createElement("p",null,"Now that we can navigate to the books, we should fill out the UI for the ",o.a.createElement(i.a,null,"Book")," component. We will once again import the"," ",o.a.createElement(i.b,null,"books.js")," data. We can use ",o.a.createElement(i.b,null,"params.id")," to select the correct book. ",o.a.createElement(i.b,null,"params.id")," is a string, so we will need to parse it into an integer. Sometimes there won't be a valid book for the ",o.a.createElement(i.b,null,"params.id"),". In that case, we will also want to display a message that the requested book could not be found."),o.a.createElement(s.a,{lang:"html"},"\x3c!-- src/components/Book.vue --\x3e\n<template>\n  <div v-if=\"book\">\n    <h1>{{book.title}}</h1>\n    <h2>by {{book.author}}</h2>\n    <p>Published in {{book.published}}</p>\n    <p>{{book.pages}} pages</p>\n  </div>\n  <div v-else>\n    The requested book could not be found\n  </div>\n</template>\n\n<script>\n  import books from '../books';\n\n  export default {\n    name: 'book',\n    computed: {\n      book() {\n        const id = parseInt(this.$curi.response.params.id, 10);\n        return books.find(b => b.id === id);\n      }\n    }\n  }\n<\/script>"))),o.a.createElement(u.a,{title:"Let's go shopping",id:"shopping"},o.a.createElement("p",null,"We want to be able to add books to our shopping cart. Since this is a play site, we will store the cart data in memory."),o.a.createElement(s.a,{lang:"bash"},"touch src/cart.js"),o.a.createElement("p",null,"The shopping cart implementation will be a JavaScript ",o.a.createElement(i.b,null,"Map"),". We can call its ",o.a.createElement(i.b,null,"set")," method to add books, its"," ",o.a.createElement(i.b,null,"clear")," method to reset the cart, and iterate over its"," ",o.a.createElement(i.b,null,"entries")," with a ",o.a.createElement(i.b,null,"for...of")," loop."),o.a.createElement(s.a,{lang:"javascript"},"// src/cart.js\nconst cart = new Map();\n\nexport default {\n  add(book, quantity) {\n    cart.set(book, quantity);\n  },\n  items() {\n    const books = [];\n    for (let [book, quantity] of cart.entries()) {\n      books.push({\n        title: book.title,\n        quantity\n      });\n    }\n    return books;\n  },\n  reset() {\n    cart.clear();\n    return [];\n  }\n};"),o.a.createElement("p",null,"As stated above, we can access our ",o.a.createElement(i.b,null,"router")," in the"," ",o.a.createElement(i.a,null,"Book")," component using ",o.a.createElement(i.b,null,"this.$router"),". The router's"," ",o.a.createElement(i.b,null,"navigate()")," function can be used to navigate to a new location. This means that when the user clicks a button to add a book to their shopping cart, we can automatically navigate to the checkout page."),o.a.createElement(u.a,{title:"Navigate Method",id:"nav-method",className:"aside",tag:"h3"},o.a.createElement("p",null,o.a.createElement(i.b,null,"router.navigate()")," is used to navigate to new locations. There are three methods of navigation: ",o.a.createElement(i.b,null,"PUSH"),","," ",o.a.createElement(i.b,null,"REPLACE"),", and ",o.a.createElement(i.b,null,"ANCHOR"),"."),o.a.createElement("p",null,o.a.createElement(i.b,null,"PUSH")," pushes a new location after the current index, removing any locations after the current location."),o.a.createElement(s.a,{lang:"javascript"},"// session = ['/one', '/two', '/three'], index = 1\nrouter.navigate({ name: \"New\", method: \"PUSH\" });\n// session = ['/one', '/two', '/new'], index = 2"),o.a.createElement("p",null,o.a.createElement(i.b,null,"REPLACE")," replaces the location at the current index."),o.a.createElement(s.a,{lang:"javascript"},"// session = ['/one', '/two', '/three'], index = 1\nrouter.navigate({ name: \"Replace\", method: \"REPLACE\" });\n// session = ['/one', '/replacement', '/three'], index = 1"),o.a.createElement("p",null,o.a.createElement(i.b,null,"ANCHOR")," is a mix between ",o.a.createElement(i.b,null,"PUSH")," and"," ",o.a.createElement(i.b,null,"REPLACE"),". It mimics the behavior of clicking on links, so if you navigate to the same location as the current one it will replace, and if you navigate to a new location it will push."),o.a.createElement("p",null,"If ",o.a.createElement(i.b,null,"method.navigate()")," is called without a navigation"," ",o.a.createElement(i.b,null,"method"),", it will default to ",o.a.createElement(i.b,null,"ANCHOR"),"."),o.a.createElement(s.a,{lang:"javascript"},"// session = ['/one', '/two', '/three'], index = 1\nrouter.navigate({ name: \"Two\", method: \"ANCHOR\" });\n// session = ['/one', '/two', '/three'], index = 1\nrouter.navigate({ name: \"New\", method: \"ANCHOR\" });\n// session = ['/one', '/two', '/new'], index = 2","`}")),o.a.createElement("p",null,"We also want to import our shopping cart API so that we can add a book to the cart."),o.a.createElement(s.a,{lang:"html","data-line":"8-10,19,29-35"},'\x3c!-- src/components/Book.vue --\x3e\n<template>\n  <div v-if="book">\n    <h1>{{book.title}}</h1>\n    <h2>by {{book.author}}</h2>\n    <p>Published in {{book.published}}</p>\n    <p>{{book.pages}} pages</p>\n    <button type="button" v-on:click="onClick">\n      Add to Cart\n    </button>\n  </div>\n  <div v-else>\n    The requested book could not be found\n  </div>\n</template>\n\n<script>\n  import books from \'../books\';\n  import cart from \'../cart\';\n\n  export default {\n    name: \'book\',\n    computed: {\n      book() {\n        const id = parseInt(this.$curi.response.params.id, 10);\n        return books.find(b => b.id === id);\n      }\n    },\n    methods: {\n      onClick: function() {\n        cart.add(this.book, 1);\n        this.$router.navigate({ name: "Checkout" });\n      }\n    }\n  }\n<\/script>'),o.a.createElement("p",null,"Finally, we can update our ",o.a.createElement(i.a,null,"Checkout")," component to display the books in the shopping cart. To do this, we will import our cart and books. Our cart only stores book ",o.a.createElement(i.b,null,"id"),"s, so we will need to merge the book data with the cart data."),o.a.createElement("p",null,'When a user "buys" the books in their shopping cart, we need to clear out the cart. We will also replace the current location with one whose'," ",o.a.createElement(i.b,null,"location.hash"),' is the string "thanks". When that is present in the URI, we can render a "Thanks for your purchase" message to "confirm" the purchase.'),o.a.createElement(s.a,{lang:"html"},'\x3c!-- src/components/Checkout.vue --\x3e\n<template>\n  <div v-if="books.length">\n    <h1>Checkout</h1>\n    <table>\n      <thead>\n        <tr>\n          <th>Title</th>\n          <th>Quantity</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr v-for="book in books" :key="book.title">\n          <td>{{book.title}}</td>\n          <td>{{book.quantity}}</td>\n        </tr>\n      </tbody>\n    </table>\n    <button type="button" v-on:click="onClick">\n      Buy\n    </button>\n  </div>\n  <div v-else-if="$curi.response.location.hash === \'thanks\'">\n    Thanks for your purchase!\n  </div>\n  <div v-else>\n    The cart is currently empty\n  </div>\n</template>\n\n<script>\n  import cart from \'../cart\';\n\n  export default {\n    name: \'checkout\',\n    data() {\n      return {\n        books: cart.items()\n      };\n    },\n    methods: {\n      onClick: function() {\n        this.books = cart.reset();\n        this.$router.navigate(\n          { name: "Checkout",\n          hash: "thanks",\n          method: "REPLACE"\n        });\n      }\n    }\n  }\n<\/script>')),o.a.createElement(u.a,{title:"What's next?",id:"next"},o.a.createElement("p",null,"We now have a functional website built with Vue and Curi. What should you do next? Build another site! You can also check out the"," ",o.a.createElement(l.b,{name:"Guides"},"guides")," for information on advanced techniques.")))}}}]);