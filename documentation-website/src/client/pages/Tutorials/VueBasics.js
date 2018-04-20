import React from "react";
import { Link } from "@curi/react";

import BaseTutorial from "./base/BaseTutorial";
import { TutorialBranch, CompleteBranch, Outline } from "./base/Branch";
import {
  InlineJS as IJS,
  InlineComponent as Cmp,
  PrismBlock
} from "../../components/PrismBlocks";
import { Note } from "../../components/Messages";
import { Section, Subsection } from "../../components/Sections";
import CodeSandboxDemo from "../../components/CodeSandboxDemo";

export default () => (
  <BaseTutorial>
    <h1>Vue Basics Tutorial</h1>
    <p>
      In this tutorial, we will be building a website for a bookstore. This will
      focus on the front-end part of the application.
    </p>
    <Outline>
      <ul>
        <li>Learn how to define routes and setup the Curi router.</li>
        <li>
          Learn how to render Vue components based on the current location.
        </li>
        <li>Learn how to navigate within the application.</li>
      </ul>
    </Outline>
    {/*<Section title="Demo" id="demo">
      <p>You can run a demo of the site we are building with CodeSandbox.</p>
      <CodeSandboxDemo id="github/curijs/vue-basic-tutorial/tree/master/" />
</Section>*/}
    <Section title="Setup" id="setup">
      <p>
        We will be using{" "}
        <a href="https://github.com/vuejs/vue-cli">
          <IJS>@vue/cli</IJS>
        </a>{" "}
        to develop this website.
      </p>
      <Note>
        The instructions here assume that you have NodeJS and NPM > 5.2
        installed on your computer. If you do not and cannot or just prefer to
        avoid setup altogether, you can follow along using{" "}
        <a href="https://codesandbox.io/">CodeSandbox</a>. Some of the
        boilerplate will be different, but the differences are minor.
      </Note>
      <p>
        Begin by opening a terminal and navigating to the directory where you
        want to save your code. Then, we will use <IJS>@vue/cli</IJS> to create
        the application. We
      </p>
      <PrismBlock lang="bash">
        {`# install vue-cli if it isn't already
npm install --global @vue/cli
# create the application
vue create curi-bookstore
# select the default option

# enter the new app directory
cd curi-bookstore
# start the dev server
yarn serve`}
      </PrismBlock>
      <p>
        The dev server will automatically update when we change files, so we can
        leave that running. We will still be working in the terminal, so you
        will want to open up a new terminal window/tab and navigate to the
        application's directory. Once you have done that, there are a few
        packages that need to be installed.
      </p>
      <PrismBlock lang="bash">
        {`yarn add @hickory/browser @curi/core @curi/vue`}
      </PrismBlock>
      <p>
        The <IJS>@hickory/browser</IJS> package will be used to create an object
        that interacts with the browser to power navigation (e.g. updates the
        URI in the address bar when you click a link). <IJS>@curi/core</IJS>{" "}
        provides the function to actually create the router.{" "}
        <IJS>@curi/vue</IJS> gives us a plugin for Vue and some Vue components
        that interact with the router.
      </p>
    </Section>
    <Section title="History and Locations" id="history">
      <p>
        URIs can be broken into parts to identify a location. With a single-page
        application, we don't care about the URI's protocol (http, https) or its
        hostname (www.example.com). The properties we care about are the{" "}
        <IJS>pathname</IJS>, <IJS>hash</IJS>, and <IJS>query</IJS>.
      </p>
      <PrismBlock lang="javascript">
        {`// uri = "https://example.com/one?key=value#id
{
  pathname: "/one",
  query: "key=value",
  hash: "id"
}`}
      </PrismBlock>
      <p>
        The router will match its routes against a location's{" "}
        <IJS>pathname</IJS> to figure out which route matches. The{" "}
        <IJS>query</IJS> and <IJS>hash</IJS> values are not used for matching
        routes.
      </p>
      <p>
        Curi uses the <a href="https://github.com/pshrmn/hickory">Hickory</a>{" "}
        library to create a history object that will enable us to navigate
        within our application. Hickory provides a few different packages to
        create history objects for different environments, but the only one we
        care about right now is the browser history, which comes from the{" "}
        <IJS>@hickory/browser</IJS> package. A browser history object will
        interact with the browser's native{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API">
          History API
        </a>{" "}
        so that our application can change locations (and the URI in the address
        bar) without making a request to a server and reloading the page.
      </p>
      <p>
        We can import the <IJS>Browser</IJS> function from{" "}
        <IJS>@hickory/browser</IJS> in our main file (<IJS>src/main.js</IJS>,
        which <IJS>@vue/cli</IJS> created for us). To create a history object,
        we just need to call that function.
      </p>
      <Note>
        The history object can be configured with{" "}
        <a href="https://github.com/pshrmn/hickory/blob/master/docs/api/Browser.md#options">
          an options object
        </a>, but we will stick with the defaults.
      </Note>
      <PrismBlock lang="javascript" data-line="3,9">
        {`// src/main.js
import Vue from 'vue'
import Browser from '@hickory/browser'

import App from './App.vue'

Vue.config.productionTip = false

const history = Browser()

new Vue({
  render: h => h(App)
}).$mount('#app')`}
      </PrismBlock>
      <Note>
        Eslint will complain here because we haven't actually used the new{" "}
        <IJS>history</IJS> object. We can just ignore that warning for now
        because we'll get rid of it soon enough.
      </Note>
    </Section>
    <Section title="Defining the Routes" id="defining-routes">
      <p>
        Routes are simply JavaScript objects that define the valid locations for
        a router. They have a <IJS>name</IJS> and a <IJS>path</IJS>.
      </p>
      <PrismBlock lang="javascript">
        {`// this is a route
{ name: "Home", path: "" }`}
      </PrismBlock>
      <p>
        A route's <IJS>name</IJS> needs to be unique. We will use route names
        when we navigate within the application. A route's <IJS>path</IJS>{" "}
        describes the location pathname that it should match.
      </p>
      <Subsection title="Path basics" id="path-basics" type="aside">
        <p>
          Route paths are strings describing the pathname segments they should
          match.
        </p>
        <PrismBlock lang="javascript">
          {`{ path: '' } // matches "/"
{ path: 'about/stuff' } // matches "/about/stuff"`}
        </PrismBlock>
        <p>Paths never begin with a slash.</p>
        <PrismBlock lang="javascript">
          {`// yes
{ path: '' }
// no
{ path: '/' }`}
        </PrismBlock>
        <p>
          Paths can include dynamic parameters. These are specified with a
          string that starts with a colon (<IJS>:</IJS>) followed by the name of
          the params.
        </p>
        <PrismBlock lang="javascript">
          {`// a param named "id"
{ path: ':id' }`}
        </PrismBlock>
        <p>
          Routes can be nested using the <IJS>children</IJS> property of a
          route. A nested route inherits the path from its ancestor route(s), so
          its <IJS>path</IJS> is only the additional part of the pathname that
          should be matched.
        </p>
        <PrismBlock lang="javascript">
          {`{
  name: "Parent",
  path: "parent", // matches /parent
  children: [
    // matches /parent/daughter
    { name: "Daughter", path: "daughter" },
    // matches /parent/son
    { name: "Son", path: "son" }
  ]
}`}
        </PrismBlock>
      </Subsection>
      <p>The website will start with four routes.</p>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>path</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home</td>
            <td>
              <IJS>""</IJS>
            </td>
            <td>Lists books available for purchase</td>
          </tr>
          <tr>
            <td>Book</td>
            <td>
              <IJS>"book/:id"</IJS>
            </td>
            <td>Details about an individual book</td>
          </tr>
          <tr>
            <td>Checkout</td>
            <td>
              <IJS>"checkout"</IJS>
            </td>
            <td>"Buy" the books in the shopping cart</td>
          </tr>
          <tr>
            <td>Catch All</td>
            <td>
              <IJS>"(.*)"</IJS>
            </td>
            <td>Display a not found page for all other locations</td>
          </tr>
        </tbody>
      </table>
      <Note>
        The catch all route uses a regular expression syntax to indicate that it
        should match everything. Curi uses the{" "}
        <a href="https://github.com/pillarjs/path-to-regexp">
          <IJS>path-to-regexp</IJS>
        </a>{" "}
        package for route matching. We will only be using some of its basic
        syntax, but you can read its documentation to learn about more advanced
        path syntax.
      </Note>
      <p>
        Inside of the <IJS>src</IJS> directory, we will create a{" "}
        <IJS>routes.js</IJS> file where we can define the application's routes.
      </p>
      <PrismBlock lang="bash">{`touch src/routes.js`}</PrismBlock>
      <PrismBlock lang="javascript">
        {`// src/routes.js
export default [
  {
    name: "Home",
    path: ""
  },
  {
    name: "Book",
    path: "book/:id"
  },
  {
    name: "Checkout",
    path: "checkout"
  },
  {
    name: "Catch All",
    path: "(.*)"
  }
];`}
      </PrismBlock>
    </Section>
    <Section title="The Router" id="router">
      <p>
        With the history object created and the routes defined, we are ready to
        create the router. Back in the <IJS>src/index.js</IJS> file, we should
        import the <IJS>curi</IJS> function from <IJS>@curi/core</IJS> as well
        as our routes from <IJS>src/routes.js</IJS>
      </p>
      <PrismBlock lang="javascript" data-line="3,6,12">
        {`// src/main.js
import Vue from 'vue'
import curi from '@curi/core';
import Browser from '@hickory/browser'

import routes from './routes';
import App from './App.vue'

Vue.config.productionTip = false

const history = Browser()
const router = curi(history, routes)

new Vue({
  render: h => h(App)
}).$mount('#app')`}
      </PrismBlock>
      <Note>
        The Eslint warning has now moved to the <IJS>router</IJS>, but this is
        still nothing to worry about.
      </Note>
      <p>
        We will add router support to the Vue application using a plugin. This
        plugin does a couple of things. First, it makes some Curi components
        available within the application. The only one of these components that
        we will be using is the <Cmp>curi-link</Cmp>. Second, it makes router
        related values accessible to the components in the application. The
        router is available as <IJS>this.$router</IJS> and the{" "}
        <IJS>response</IJS> and <IJS>navigation</IJS> (we will cover these next)
        are grouped under <IJS>this.$curi</IJS>. When the <IJS>CuriPlugin</IJS>{" "}
        is installed, the <IJS>router</IJS> as passed in the options object.
      </p>
      <PrismBlock lang="javascript" data-line="5,14">
        {`// src/main.js
import Vue from 'vue'
import curi from '@curi/core';
import Browser from '@hickory/browser'
import { CuriPlugin } from '@curi/vue'

import routes from './routes';
import App from './App.vue'

Vue.config.productionTip = false

const history = Browser()
const router = curi(history, routes)
Vue.use(CuriPlugin, { router })

new Vue({
  render: h => h(App)
}).$mount('#app')`}
      </PrismBlock>
    </Section>
    <Section title="Rendering with Vue" id="rendering">
      <p>
        We can now render our application. We will re-use the provide{" "}
        <IJS>App.vue</IJS> file.
      </p>
      <Subsection title="Responses and Navigation" id="responses" type="aside">
        <p>
          Whenever Curi receives a location, it matches its routes against it
          and generates a response. This is an object with data related to the
          route that matched the location. Later on we will modify this data
          ourselves, but for now the important thing to know is that the
          response lets us know about the current route.
        </p>
        <PrismBlock lang="javascript">
          {`// a sample response object
{
  body: undefined,
  data: undefined,
  error: undefined,
  key: '1.0',
  location: { pathname: '/', ... },
  name: 'Home',
  params: {},
  partials: [],
  status: 200
}`}
        </PrismBlock>
        <p>
          The router uses an observer model to let functions subscribe to be
          called when a new response is generated. The <IJS>CuriPlugin</IJS>{" "}
          sets up an observer so that it can trigger a re-render whenever there
          is a new one.
        </p>
        <p>
          The <IJS>navigation</IJS> object contains additional information about
          a navigation that doesn't make sense to include in the response
          object. This includes the navigation's "action" (<IJS>PUSH</IJS>,{" "}
          <IJS>POP</IJS>, or <IJS>REPLACE</IJS>) and the previous response
          object. This can be useful for animation and modals.
        </p>
      </Subsection>
      <p>
        Most of the time, the response is the only property you will need to use
        to render, but the other two may occasionally be useful.
      </p>
      <p>
        How do we use the response to render? Any way you want, really. Based on
        the sample response above, the obvious idea would be to determine what
        component to render based on the response's <IJS>name</IJS>. However, we
        can make this even easier by using the <IJS>body</IJS> property.
      </p>
      <p>
        Earlier it was mentioned that response objects can be modified. This is
        done in a route's <IJS>response()</IJS> function. <IJS>response()</IJS>{" "}
        receives an object with a whole bunch of properties that we can use to
        modify the response. For the time being, we only care about one:{" "}
        <IJS>set</IJS>. This is an object with functions that actually modify
        the response. <IJS>set.body()</IJS> will set the <IJS>body</IJS>{" "}
        property of the response object.
      </p>
      <PrismBlock lang="javascript">
        {`{
  name: "Home",
  path: "",
  response({ set }) {
    set.body('Home, sweet home.');
    /*
      * response = {
      *   body: "Home, sweet home.",
      *   // ...
      * }
      */
  }
}`}
      </PrismBlock>
      <p>
        If we pass Vue components to <IJS>set.body()</IJS>, we can render those
        using <Cmp>Component :is</Cmp>.
      </p>
      <p>
        We haven't actually defined components for our routes yet, so we should
        throw together some placeholders.
      </p>
      <PrismBlock lang="bash">
        {`touch src/components/Home.vue src/components/Book.vue \\
  src/components/Checkout.vue src/components/NotFound.vue`}
      </PrismBlock>
      <PrismBlock lang="html">
        {`<!-- src/components/Home.vue -->
<template>
  <div>Home</div>
</template>`}
      </PrismBlock>
      <PrismBlock lang="html">
        {`<!-- src/components/Book.vue -->
<template>
  <div>Book</div>
</template>`}
      </PrismBlock>
      <PrismBlock lang="html">
        {`<!-- src/components/Checkout.vue -->
<template>
  <div>Checkout</div>
</template>`}
      </PrismBlock>
      <PrismBlock lang="html">
        {`<!-- src/components/NotFound.vue -->
<template>
  <div>Not Found</div>
</template>`}
      </PrismBlock>
      <p>
        These components can be imported in <IJS>src/routes.js</IJS> and
        attached to their respective routes.
      </p>
      <PrismBlock lang="javascript" data-line="2-5,11-15,20-24,29-33,38-42">
        {`// src/routes.js
import Home from './components/Home';
import Book from './components/Book';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';

export default [
  {
    name: "Home",
    path: "",
    response({ set }) {
      set.body(Home);
    }
  },
  {
    name: "Book",
    path: "book/:id",
    response({ set }) {
      set.body(Book);
    }
  },
  {
    name: "Checkout",
    path: "checkout",
    response({ set }) {
      set.body(Checkout);
    }
  },
  {
    name: "Catch All",
    path: "(.*)",
    response({ set }) {
      set.body(NotFound);
    }
  }
];`}
      </PrismBlock>
      <p>
        We can now update <IJS>App.vue</IJS> to render <IJS>response.body</IJS>{" "}
        as a component, which as mentioned above is available through{" "}
        <IJS>this.$curi</IJS>.
      </p>

      <PrismBlock lang="html">
        {`<!-- src/App.vue -->
<template>
  <component :is="$curi.response.body" />
</template>
`}
      </PrismBlock>
      <p>
        We can also remove the <Cmp>HelloWorld</Cmp> component.
      </p>
      <PrismBlock lang="bash">{`rm src/components/HelloWorld.vue`}</PrismBlock>
      <p>
        At this point in time our app is rendering, but is isn't very
        interesting because we cannot navigate between locations.
      </p>
    </Section>
    <Section title="Navigating between locations" id="navigating">
      <p>
        The <IJS>CuriPlugin</IJS> makes a <Cmp>curi-link</Cmp> component
        available with the appliaction. We can use that to navigate between
        locations within our application.
      </p>
      <Subsection
        title={
          <span>
            The <Cmp>curi-link</Cmp> Component
          </span>
        }
        id="link-component"
        type="aside"
      >
        <p>
          Navigation isn't done by manually typing the pathname of the location
          the link should navigate to. Instead, we specify the name of the route
          using the <IJS>to</IJS> prop.
        </p>
        <PrismBlock lang="html">
          {`<!-- { name: "Home", path: "" } -->
<curi-link to="Home">Home</curi-link>
<!-- <a href="/">Home</a> -->`}
        </PrismBlock>
        <p>
          If a route has params, we provide these to the <Cmp>curi-link</Cmp> as
          a <IJS>params</IJS> object. For a nested route, we would also need to
          provide params for any ancestor routes.
        </p>
        <PrismBlock lang="html">
          {`<!-- { name: "Book", path: "book/:id" } -->
<curi-link to="Book" :params="{ id: 7 }">The Dark Forest</curi-link>
<!-- <a href="/book/7">The Dark Forest</a> -->`}
        </PrismBlock>
        <p>
          The <Cmp>curi-link</Cmp> is only for in-app navigation. If you want to
          link to pages outside of the application, use an anchor.
        </p>
        <PrismBlock lang="html">
          {`<!-- in-app -->
<curi-link to="Some Route">Some Route</curi-link>

<!-- out of app -->
<a href="https://github.com">GitHub</a>`}
        </PrismBlock>
        <p>
          If you need to attach query or hash data to a <Cmp>curi-link</Cmp>,
          use the <IJS>details</IJS> prop.
        </p>
        <PrismBlock lang="html">
          {`<!-- { name: "Checkout", path: "checkout" } -->
<curi-link to="Checkout" :details="{ query: 'a=123' }">Checkout</curi-link>
<!-- <a href="/checkout?a=123">Checkout</a> -->`}
        </PrismBlock>
      </Subsection>
      <Subsection title="A Navigation Menu" id="nav-menu">
        <p>
          We will start with creating a navigation menu component with links to
          our home page and checkout page.
        </p>
        <PrismBlock lang="bash">{`touch src/components/NavMenu.vue`}</PrismBlock>
        <PrismBlock lang="html">
          {`<!-- src/components/NavMenu.vue -->
<template>
  <nav>
    <ul>
      <li>
        <curi-link to="Home">Home</curi-link>
      </li>
      <li>
        <curi-link to="Checkout">Checkout</curi-link>
      </li>
    </ul>
  </nav>
</template>`}
        </PrismBlock>
        <p>
          We can import that in our <IJS>App.vue</IJS> file and add it to our
          template. This is a good opportunity to also add some structure to the
          elements in the template.
        </p>
        <PrismBlock lang="html">
          {`<!-- src/App.vue -->
<template>
  <div>
    <header>
      <nav-menu />
    </header>
    <main>
      <component :is="$curi.response.body" />
    </main>
  </div>
</template>

<script type="src/javascript">
  import NavMenu from './components/NavMenu';

  export default {
    name: 'app',
    components: {
      'nav-menu': NavMenu
    }
  };
</script>`}
        </PrismBlock>
      </Subsection>
      <Subsection title="Linking to Books" id="book-links">
        <p>
          We want to be able to link to individual books from the home page.
          First, we need data about the books. For now, we're going to hard-code
          the books in the <IJS>src/books.js</IJS> module.
        </p>
        <PrismBlock lang="bash">{`touch src/books.js`}</PrismBlock>
        <p>
          You can copy+paste or modify the data, but the structure of the
          provided data should stay the same.
        </p>
        <PrismBlock lang="javascript">
          {`// src/books.js
export default [
  {
    id: 0,
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    published: '2007',
    pages: 662
  },
  {
    id: 1,
    title: "The Wise Man's Fear",
    author: 'Patrick Rothfuss',
    published: '2011',
    pages: 994
  },
  {
    id: 2,
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    published: '2010',
    pages: 1007
  },
  {
    id: 3,
    title: 'A Storm of Swords',
    author: 'George R.R. Martin',
    published: '2003',
    pages: 1177
  },
  {
    id: 78,
    title: 'Words of Radiance',
    author: 'Brandon Sanderson',
    published: '2014',
    pages: 1087
  }
];`}
        </PrismBlock>
        <p>
          The data can be imported in the <Cmp>Home</Cmp> component. We will
          iterate over the books with a <Cmp>Link</Cmp> to each one.
        </p>
        <PrismBlock lang="html">
          {`<!-- src/components/Home.vue -->
<template>
  <div>
    <ul>
      <li v-for="b in books" :key="b.id">
        <curi-link to="Book" :params="{ id: b.id }">
          {{b.title}} by {{b.author}}
        </curi-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import books from '../books';

  export default {
    name: 'home',
    data() {
      return { books };
    }
  }
</script>`}
        </PrismBlock>
        <p>
          Now that we can navigate to the books, we should fill out the UI for
          the <Cmp>Book</Cmp> component. We will once again import the{" "}
          <IJS>books.js</IJS> data. We can use <IJS>params.id</IJS> to select
          the correct book. However, <IJS>params.id</IJS> is a string, so we
          will need to parse it into an integer. Sometimes there won't be a
          valid book for the <IJS>params.id</IJS>. In that case, we will also
          want to display a message that the requested book could not be found.
        </p>
        <PrismBlock lang="html">
          {`<!-- src/components/Book.vue -->
<template>
  <div v-if="book">
    <h1>{{book.title}}</h1>
    <h2>by {{book.author}}</h2>
    <p>Published in {{book.published}}</p>
    <p>{{book.pages}} pages</p>
  </div>
  <div v-else>
    The requested book could not be found
  </div>
</template>

<script>
  import books from '../books';

  export default {
    name: 'book',
    computed: {
      book() {
        const id = parseInt(this.$curi.response.params.id, 10);
        return books.find(b => b.id === id);
      }
    }
  }
</script>`}
        </PrismBlock>
      </Subsection>
    </Section>
    <Section title="Let's go shopping" id="shopping">
      <p>
        We want to be able to add books to our shopping cart. Since this is a
        play site, we will store the cart data in memory.
      </p>
      <PrismBlock lang="bash">{`touch src/cart.js`}</PrismBlock>
      <p>
        The shopping cart implementation will be a JavaScript <IJS>Map</IJS>. We
        can call its <IJS>set</IJS> method to add books, its <IJS>clear</IJS>{" "}
        method to reset the cart, and iterate over its <IJS>entries</IJS> with a{" "}
        <IJS>for...of</IJS> loop.
      </p>
      <PrismBlock lang="javascript">
        {`// src/cart.js
const cart = new Map();

export default {
  add(book, quantity) {
    cart.set(book, quantity);
  },
  items() {
    const books = [];
    for (let [book, quantity] of cart.entries()) {
      books.push({
        title: book.title,
        quantity
      });
    }
    return books;
  },
  reset() {
    cart.clear();
    return [];
  }
};`}
      </PrismBlock>
      <p>
        As stated above, we can access our <IJS>router</IJS> in the{" "}
        <Cmp>Book</Cmp> component using <IJS>this.$router</IJS>.{" "}
        <IJS>router.history</IJS> is our Hickory history object. This object can
        be used to navigate to a new location. This means that when the user
        clicks a button to add a book to their shopping cart, we can
        automatically navigate to the checkout page.
      </p>
      <Subsection title="Navigation Methods" id="nav-methods" type="aside">
        <p>
          The <IJS>history</IJS> object provides three methods to navigate to
          new locations.
        </p>
        <p>
          <IJS>push()</IJS> pushes a new location after the current index,
          removing any locations after the current location.
        </p>
        <PrismBlock lang="javascript">
          {`// session = ['/one', '/two', '/three'], index = 1
history.push({ pathname: '/new' })
// session = ['/one', '/two', '/new'], index = 2`}
        </PrismBlock>
        <p>
          <IJS>replace()</IJS> replaces the location at the current index.
        </p>
        <PrismBlock lang="javascript">
          {`// session = ['/one', '/two', '/three'], index = 1
history.replace({ pathname: '/new' })
// session = ['/one', '/new', '/three'], index = 1`}
        </PrismBlock>
        <p>
          <IJS>navigate()</IJS> is a mix between <IJS>push()</IJS> and{" "}
          <IJS>replace()</IJS>. It mimics the behavior of clicking on links, so
          if you navigate to the same location as the current one, and if you
          navigate to a new location, it will push.
        </p>
        <PrismBlock lang="javascript">
          {`// session = ['/one', '/two', '/three'], index = 1
history.navigate({ pathname: '/two' })
// session = ['/one', '/two', '/three'], index = 1
history.navigate({ pathname: '/new' })
// session = ['/one', '/two', '/new'], index = 2`}`}
        </PrismBlock>
      </Subsection>
      <p>
        Curi uses route interactions to add functionality to routes. Most of the
        time, you have to include these while creating the router, but Curi has
        one built-in route interaction: <IJS>pathname</IJS>. The{" "}
        <Cmp>curi-link</Cmp> automatically generates the correct pathname string
        using the <IJS>pathname</IJS> route interaction, the <IJS>to</IJS> prop
        (and sometimes the <IJS>params</IJS> prop). We can access this route
        interaction as <IJS>router.route.pathname()</IJS> to generate pathnames
        ourselves.
      </p>
      <p>
        We also want to import our shopping cart API so that we can add a book
        to the cart.
      </p>
      <PrismBlock lang="html" data-line="8-10,19,29-35">
        {`<!-- src/components/Book.vue -->
<template>
  <div v-if="book">
    <h1>{{book.title}}</h1>
    <h2>by {{book.author}}</h2>
    <p>Published in {{book.published}}</p>
    <p>{{book.pages}} pages</p>
    <button type="button" v-on:click="onClick">
      Add to Cart
    </button>
  </div>
  <div v-else>
    The requested book could not be found
  </div>
</template>

<script>
  import books from '../books';
  import cart from '../cart';

  export default {
    name: 'book',
    computed: {
      book() {
        const id = parseInt(this.$curi.response.params.id, 10);
        return books.find(b => b.id === id);
      }
    },
    methods: {
      onClick: function() {
        cart.add(this.book, 1);
        const pathname = this.$router.route.pathname('Checkout');
        this.$router.history.push({ pathname });
      }
    }
  }
</script>`}
      </PrismBlock>
      <p>
        Finally, we can update our <Cmp>Checkout</Cmp> component to display the
        books in the shopping cart. To do this, we will import our cart and
        books. Our cart only stores book <IJS>id</IJS>s, so we will need to
        merge the book data with the cart data.
      </p>
      <p>
        When a user "buys" the books in their shopping cart, we need to clear
        out the cart. We will also replace the current location with one whose{" "}
        <IJS>location.hash</IJS> is the string "thanks". When that is present in
        the URI, we can render a "Thanks for your purchase" message to "confirm"
        the purchase.
      </p>
      <PrismBlock lang="html">
        {`<!-- src/components/Checkout.vue -->
<template>
  <div v-if="books.length">
    <h1>Checkout</h1>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.title">
          <td>{{book.title}}</td>
          <td>{{book.quantity}}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" v-on:click="onClick">
      Buy
    </button>
  </div>
  <div v-else-if="$curi.response.location.hash === 'thanks'">
    Thanks for your purchase!
  </div>
  <div v-else>
    The cart is currently empty
  </div>
</template>

<script>
  import cart from '../cart';

  export default {
    name: 'checkout',
    data() {
      return {
        books: cart.items()
      };
    },
    methods: {
      onClick: function() {
        this.books = cart.reset();
        const pathname = this.$router.route.pathname('Checkout');
        this.$router.history.replace({ pathname, hash: 'thanks' });
      }
    }
  }
</script>`}
      </PrismBlock>
    </Section>
    <Section title="What's next?" id="next">
      <p>
        We now have a functional website built with Vue and Curi. What should
        you do next? Build another site! You can also check out the{" "}
        <Link to="Guides">guides</Link> for information on advanced techniques.
      </p>
    </Section>
  </BaseTutorial>
);