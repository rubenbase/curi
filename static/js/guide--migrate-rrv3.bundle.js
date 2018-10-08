(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"Curi is mostly conceptually similar to React Router versions 2 and 3."),l.default.createElement("ol",null,l.default.createElement("li",null,"Both use a centralized router."),l.default.createElement("li",null,"Both routers are made up of route objects (although with React Router some of these are disguised as JSX with ",l.default.createElement(o.InlineComponent,null,"Route")," ","components)."),l.default.createElement("li",null,"With both Reaft Router and Curi, routes can be nested. This can be used to specify child routes that build off of the paths from their parent routes.")),l.default.createElement("p",null,"Migration from React Router v2/3 to Curi should not require a complete reworking of your application, but there are some key differences."),l.default.createElement("ol",null,l.default.createElement("li",null,"Curi's routing is handled entirely outside of React; there are no"," ",l.default.createElement(o.InlineComponent,null,"Route")," components."),l.default.createElement("li",null,"With Curi, when a nested route matches, only that route renders. Any ancestor routes that also (partially) match are not rendered. This is different from React Router, where ancestors of the best matched route also render."))),l.default.createElement(u.Section,{title:"Routes",id:"routes"},l.default.createElement("p",null,"Let’s get started with setting up our routes."),l.default.createElement(u.Subsection,{title:"With React Router",id:"routes-with-react-router"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"In React Router v2/3, there are two ways to define routes. You can either use JavaScript objects or JSX ",l.default.createElement(o.InlineComponent,null,"Route"),"s (which React Router converts to JavaScript objects)."),l.default.createElement("p",null,"Both styles described above define the same route structure for three routes: ",l.default.createElement(o.InlineJS,null,"/"),", ",l.default.createElement(o.InlineJS,null,"/inbox"),", and"," ",l.default.createElement(o.InlineJS,null,"/inbox/:message"),". Each one of these has a component that will be rendered when it matches. The ",l.default.createElement(o.InlineJS,null,"/inbox/:message")," ","route has some methods defined to describe its behavior when the route enters, updates, and leaves.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"// JavaScript objects\n{\n  path: '/',\n  component: App,\n  indexRoute: Home,\n  childRoutes: [\n    {\n      path: 'inbox',\n      component: Inbox,\n      childRoutes: [\n        {\n          path: ':message',\n          component: Message,\n          onEnter: (next) => {...},\n          onChange: (prev, next) => {...},\n          onLeave: (prev) => {...}\n        }\n      ]\n    }\n  ]\n// JSX\n<Route path='/' component={App}>\n  <IndexRoute component={Home} />\n  <Route path='inbox' component={Inbox}>\n    <Route\n      path=':message'\n      component={Message}\n      onEnter={next => {...}}\n      onChange={(prev, next) => {...}}\n      onLeave={prev => {...}}\n    />\n  </Route>\n</Route>")),l.default.createElement(u.Subsection,{title:"With Curi",id:"routes-with-curi"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"Routes in Curi are always JavaScript objects. Like React Router, each route object has a path property that describes the path segments that the route matches. React Router v2/3 uses a custom path matcher, but Curi uses ",l.default.createElement(o.InlineJS,null,"path-to-regexp"),". You can read learn how to format paths from the"," ",l.default.createElement("a",{href:"https://github.com/pillarjs/path-to-regexp"},l.default.createElement(o.InlineJS,null,"path-to-regexp")," repo"),"."),l.default.createElement("p",null,"First, we will define the names and paths for our routes."),l.default.createElement("p",null,"Each route must also have a unique name. A route's name will be used for interacting with it. For example, to navigate to a route, you only have to know its name, not its URL."),l.default.createElement("p",null,"The biggest difference between the Curi paths and the React Router paths is that with Curi, you never include a forward slash at the beginning of the path. This means that while the root path for React Router is ",l.default.createElement(o.InlineJS,null,"'/'"),", the root path for Curi is"," ",l.default.createElement(o.InlineJS,null,"''"),".")),l.default.createElement(i.CodeBlock,null,"const routes = [\n  {\n    name: 'Home',\n    path: ''\n  },\n  {\n    name: 'Inbox',\n    path: 'inbox',\n    children: [\n      {\n        name: 'Message',\n        path: ':message'\n      }\n    ]\n  }\n];"),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"Next, we should add our components to each route. We will ignore the ",l.default.createElement(o.InlineComponent,null,"App")," component that is used in the React Router routes. That is not route specific and will be rendered by our application (assuming we actually need it)."),l.default.createElement("p",null,'With Curi, the router creates a "response" object when it matches locations. Some of the properties of the response are automatically set based on the location and the matching route. Others can be set by a route. This is done using the'," ",l.default.createElement(o.InlineJS,null,"response()")," property, which is a function that returns an object whose properties will be added to the response. For this React application, we want a response's ",l.default.createElement(o.InlineJS,null,"body")," property to be the React component associated with each route."),l.default.createElement(r.Note,null,"Only known properties will be merged onto the response.")),l.default.createElement(i.CodeBlock,null,"import Home from './pages/Home';\nimport Inbox from './pages/Inbox';\nimport Mesage from './pages/Message';\n\nconst routes = [\n  {\n    name: 'Home',\n    path: '',\n    response: () => {\n      return {\n        body: Home\n      };\n    }\n  },\n  {\n    name: 'Inbox',\n    path: 'inbox',\n    response: () => {\n      return {\n        body: Inbox\n      };\n    },\n    children: [\n      {\n        name: 'Message',\n        path: ':message',\n        response: () => {\n          return {\n            body: Message\n          };\n        }\n      }\n    ]\n  }\n];"),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"We are close to replicating our React Router routes, but we still need to implement the ",l.default.createElement(o.InlineJS,null,"on___")," methods for our ",l.default.createElement(o.InlineJS,null,":message")," ","route. With Curi, routes can have functions that are called when they match the new location. These are grouped under the route's"," ",l.default.createElement(o.InlineJS,null,"resolve")," object. The ",l.default.createElement(o.InlineJS,null,"resolve")," functions are called every time that a route matches a location."),l.default.createElement("p",null,"With React Router, ",l.default.createElement(o.InlineJS,null,"onEnter")," is called when the route first matches, while ",l.default.createElement(o.InlineJS,null,"onChange")," is called when the same route matches a new location (e.g. with new path parameters)."," ",l.default.createElement(o.InlineJS,null,"onEnter")," and ",l.default.createElement(o.InlineJS,null,"onChange")," are nearly the same; the big difference between the two is that ",l.default.createElement(o.InlineJS,null,"onChange")," ","will receive the previous props, which could be used to determine which props changed. The functionality for both ",l.default.createElement(o.InlineJS,null,"onEnter")," ","and ",l.default.createElement(o.InlineJS,null,"onChange")," can be covered using a ",l.default.createElement(o.InlineJS,null,"resolve")," ","function."),l.default.createElement("p",null,"There currently is no equivalent to ",l.default.createElement(o.InlineJS,null,"onLeave")," with Curi. This is mostly because I haven’t seen a compelling need for it. It certainly could be implemented, but so far I have not found a reason to use that. If you have something you need this functionality for, please open up an issue in the GitHub repo."),l.default.createElement("p",null,"The"," ",l.default.createElement(a.Link,{to:"Package",params:{package:"router"},hash:"route-properties"},l.default.createElement(o.InlineJS,null,"@curi/router")," route API documentation")," ","covers all of the route properties.")),l.default.createElement(i.CodeBlock,null,"const routes = [\n  {\n    name: 'Home',\n    path: '',\n    response: () => {\n      return {\n        body: Home\n      };\n    }\n  },\n  {\n    name: 'Inbox',\n    path: 'inbox',\n    response: () => {\n      return {\n        body: Inbox\n      };\n    },\n    children: [\n      {\n        name: 'Message',\n        path: ':message',\n        response: () => {\n          return {\n            body: Message\n          };\n        },\n        resolve: {\n          data: (route) => { return ... },\n        }\n      }\n    ]\n  }\n];")),l.default.createElement("p",null,"Once your routes have been defined, you can move on to creating your Curi router.")),l.default.createElement(u.Section,{title:"Creating the router",id:"creating-the-router"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"With React Router, you create your router by rendering a"," ",l.default.createElement(o.InlineComponent,null,"Router"),". That either takes the ",l.default.createElement(o.InlineComponent,null,"Route")," components as props or the route objects through its ",l.default.createElement(o.InlineJS,null,"routes")," prop. The ",l.default.createElement(o.InlineComponent,null,"Router")," also takes a ",l.default.createElement(o.InlineJS,null,"history")," prop, which is either one of the pre-routerured objects (",l.default.createElement(o.InlineJS,null,"browserHistory")," ","or ",l.default.createElement(o.InlineJS,null,"hashHistory"),") or one that you create yourself.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"import { Router, browserHistory } from 'react-router';\nconst routes = [...];\nReactDOM.render((\n  <Router history={browserHistory} routes={routes} />\n), holder);"),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"With Curi, the router is created prior to rendering. It takes a Hickory history object, your routes array, and possibly an options object. ",l.default.createElement("a",{href:"https://github.com/pshrmn/hickory"},"Hickory")," is similar to the ",l.default.createElement(o.InlineJS,null,"history")," package used by React Router, but has a slight modified API (easier navigation blocking and navigation that imitates how anchors work) and more convenient location objects (you can use a ",l.default.createElement(o.InlineJS,null,"query")," object instead of having to manually create a ",l.default.createElement(o.InlineJS,null,"search")," string).")),l.default.createElement(i.CodeBlock,null,"import { curi } from '@curi/router';\nimport Browser from '@hickory/browser';\nconst history = Browser();\nconst routes = [...];\nconst router = curi(history, routes);")),l.default.createElement(u.Section,{title:"Rendering",id:"rendering"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"We will walk through the rendering differences between React Router and Curi by looking at what happens in each when we navigate to the URI ",l.default.createElement(o.InlineJS,null,"/inbox/test-message-please-ignore"),".")),l.default.createElement(u.Subsection,{title:"React Router v2/3",id:"rendering-react-router"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"React Router uses the ",l.default.createElement(o.InlineComponent,null,"Router")," component to subscribe to location changes. Each time that the location changes, it walks over its routes and determines which route(s!) match."),l.default.createElement("p",null,"React Router starts by rendering the root component. In the above router, that is the ",l.default.createElement(o.InlineComponent,null,"App"),". Next, our ",l.default.createElement(o.InlineJS,null,"inbox")," ","route also matches, so React Router also renders our"," ",l.default.createElement(o.InlineComponent,null,"Inbox")," component. Finally, the URI"," ",l.default.createElement(o.InlineJS,null,"/inbox/test-message-please-ignore")," also matches our ",l.default.createElement(o.InlineJS,null,":message")," ","route (which is concatenated with its parents to form the path"," ",l.default.createElement(o.InlineJS,null,"/inbox/:message"),"), so ",l.default.createElement(o.InlineComponent,null,"Message")," is rendered as well. Each child component is rendered by its parent, so we end up with a component tree that looks something like this:"),l.default.createElement("p",null,"With this structure, any routes with children will be rendered when one of the children matches. That means that those routes need to know how to render based on what type of match they have. For example, ",l.default.createElement(o.InlineComponent,null,"Inbox")," needs to know how to render for an exact match (the URI is ",l.default.createElement(o.InlineJS,null,"/inbox"),") and for a partial match (",l.default.createElement(o.InlineJS,null,"/inbox/test-message-please-ignore"),"). Also, if the"," ",l.default.createElement(o.InlineComponent,null,"Inbox")," needs to pass any props to ",l.default.createElement(o.InlineComponent,null,"Message"),", it has to use ",l.default.createElement(o.InlineJS,null,"React.cloneElement"),", which works but is not the cleanest looking code.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"<App>\n  <Inbox>\n    <Message>\n  </Inbox>\n</App>")),l.default.createElement(u.Subsection,{title:"Curi",id:"rendering-with-curi"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"With Curi, we also need to re-render our application every time that the location changes. We will do this by creating a root Curi component by calling the ",l.default.createElement(o.InlineJS,null,"curiProvider()")," function, which comes from the ",l.default.createElement(o.InlineJS,null,"@curi/react-dom")," package, and passing it our Curi router. While the name of this component is entirely up to you, we will refer to it as the ",l.default.createElement(o.InlineComponent,null,"Router")," here."),l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Router")," will setup an observer on the provided router so that it can re-render your application whenever there is a new ",l.default.createElement(o.InlineJS,null,"response"),". The ",l.default.createElement(o.InlineComponent,null,"Router")," expects a function as its ",l.default.createElement(o.InlineJS,null,"children")," prop (a render-invoked function). This function renders the application using the"," ",l.default.createElement(o.InlineJS,null,"response"),"."),l.default.createElement("p",null,"When the ",l.default.createElement(o.InlineComponent,null,"Router"),"'s ",l.default.createElement(o.InlineJS,null,"children()")," function is called, it will receive an object with three properties:"),l.default.createElement("ol",null,l.default.createElement("li",null,l.default.createElement(o.InlineJS,null,"response")," is the new response object"),l.default.createElement("li",null,l.default.createElement(o.InlineJS,null,"navigation")," is an object with additional information about the navigation"),l.default.createElement("li",null,l.default.createElement(o.InlineJS,null,"router")," is your Curi router (mostly useful if the function is defined in a separate file)")),l.default.createElement("p",null,"Above, we added ",l.default.createElement(o.InlineJS,null,"response()")," functions to each route. The functions set React components as the ",l.default.createElement(o.InlineJS,null,"body")," property of responses. We can now use ",l.default.createElement(o.InlineJS,null,"response.body")," to render those components."),l.default.createElement("p",null,"In the React Router section, we had three components that were rendered: ",l.default.createElement(o.InlineComponent,null,"App"),",",l.default.createElement(o.InlineComponent,null,"Inbox"),", and ",l.default.createElement(o.InlineComponent,null,"Message"),". With Curi, only the most accurately matched route actually matches. That means that for the URL ",l.default.createElement(o.InlineJS,null,"/inbox/test-message-please-ignore"),", the"," ",l.default.createElement(o.InlineJS,null,'"Message"')," route will match, but its parent route,"," ",l.default.createElement(o.InlineJS,null,'"Inbox"')," will not, so ",l.default.createElement(o.InlineJS,null,"response.body")," will be the ",l.default.createElement(o.InlineComponent,null,"Message")," component. Unlike React Router, we don’t render ",l.default.createElement(o.InlineComponent,null,"Inbox")," because we did not match the"," ",l.default.createElement(o.InlineJS,null,"inbox")," route.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},'import { curiProvider } from "@curi/react-dom";\n\nconst router = curi(history, routes);            \nconst Router = curiProvider(router);\n\nReactDOM.render((\n  <Router>\n    {({ response }) => {\n      const { body:Body } = response;\n      return <Body />;\n    }}\n  </Router>\n), holder);\n\n/*\n  <Router>\n    <Message />\n  </Router>\n*/'),l.default.createElement(i.Explanation,null,l.default.createElement(r.Note,null,"Wildcard routes (",l.default.createElement(o.InlineJS,null,"{ path: '(.*)' }"),") can be used to easily display a not found page for any location not matched by other routes.")),l.default.createElement(i.CodeBlock,null,'const routes = [\n  // ...,\n  {\n    name: "Not Found",\n    path: "(.*)",\n    response() {\n      return { body: NotFound };\n    }\n  }\n];'),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"It was mentioned above that there is no need for the"," ",l.default.createElement(o.InlineComponent,null,"App")," component with Curi. If you want to have an"," ",l.default.createElement(o.InlineComponent,null,"App")," component, you can render it either inside of the"," ",l.default.createElement(o.InlineJS,null,"children()")," function or as a parent of your"," ",l.default.createElement(o.InlineComponent,null,"Router"),". This can be useful for rendering content that is unrelated to specific routes, like a page header or menu."),l.default.createElement("p",null,"Rendering the ",l.default.createElement(o.InlineComponent,null,"App")," inside of the ",l.default.createElement(o.InlineJS,null,"children()")," ","function is necessary if any of the components rendered by the"," ",l.default.createElement(o.InlineComponent,null,"App")," are location aware components, since they need to access the Curi router (through React’s context, which the"," ",l.default.createElement(o.InlineComponent,null,"Router")," provides)")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"function render({ response }) {\n  const { body:Body } = response;\n  return (\n    <App>\n      <Body />\n    </App>\n  );\n}\n// or\nfunction render({ response }) {\n  const { body:Body } = response;\n  return (\n    <div>\n      <Header />\n      <Body />\n      <Footer />\n    </div>\n  );\n}"),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"What about props that you want to send to your route components? Pass them to the ",l.default.createElement(o.InlineComponent,null,"Body")," component that you render. Props can be passed individually, but passing the whole"," ",l.default.createElement(o.InlineJS,null,"response")," object is recommended.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"function render({ response }) {\n  const { body:Body } = response;\n  return <Body response={response} />;\n}"))),l.default.createElement(u.Section,{title:"Links",id:"links"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"You will want to be able to navigate between routes in your application. React Router provides a ",l.default.createElement(o.InlineComponent,null,"Link")," component to do this, and so does Curi (through the ",l.default.createElement(o.InlineJS,null,"@curi/react-dom")," ","package). There are a few differences to note between these two components:")),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"React Router expects you to generate the pathname yourself, while Curi expects you to pass the name of the route that you want to navigate to. Any path parameters are passed to Curi’s"," ",l.default.createElement(o.InlineComponent,null,"Link")," using the ",l.default.createElement(o.InlineJS,null,"params")," prop.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"// React Router\n<Link to='/'>Home</Link>\n<Link to={`/inbox/${message}`}>Hello</Link>\n\n// Curi\n<Link to='Home'>Home</Link>\n<Link to='Message' params={{ message }}>Hello</Link>")),l.default.createElement("li",null,l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"With React Router, any additional location properties are passed to the ",l.default.createElement(o.InlineComponent,null,"Link")," using the ",l.default.createElement(o.InlineJS,null,"to")," object. With Curi, these properties are passed using the prop name (",l.default.createElement(o.InlineJS,null,"hash"),", ",l.default.createElement(o.InlineJS,null,"query")," &",l.default.createElement(o.InlineJS,null,"state"),").")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"// React Router\n<Link to={{ pathname: '/inbox', hash: '#test' }}>\n  Inbox\n</Link>\n\n// Curi\n<Link to='Inbox' hash='test'>Inbox</Link>")),l.default.createElement("li",null,l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"Active detection with Curi uses an ",l.default.createElement(o.InlineComponent,null,"Active")," component."," ",l.default.createElement(o.InlineComponent,null,"Active"),"'s ",l.default.createElement(o.InlineJS,null,"children")," prop is a render-invoked function that receives a boolean ",l.default.createElement(o.InlineJS,null,"true")," when the named route is active and ",l.default.createElement(o.InlineJS,null,"false")," when it is not. You can also pass ",l.default.createElement(o.InlineJS,null,"partial={true}")," to let partial matches (ancestor routes) be considered active (the opposite of React Router's ",l.default.createElement(o.InlineJS,null,"onlyActiveOnIndex"),").")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"// React Router\n<Link\n  to='/'\n  onlyActiveOnIndex\n  activeClassName='active'\n>\n  Home\n</Link>\n\n// Curi\n// You need to add @curi/route-active\n// to your router object\nimport active from '@curi/route-active';\nconst router = curi(history, routes, {\n  route: [active()]\n});\n\n// The <Active> component determines if a route is active\n// and passes true/false to the render-invoked children\n// function\n<Active name=\"Home\">\n  {active => (\n    <Link\n      to='Home'\n      className={active ? \"active\" : \"\"}\n    >Home</Link>\n  )}\n</Active>")))),l.default.createElement(u.Section,{title:"Accessing router props from nested components",id:"router-props"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"React Router provides a ",l.default.createElement(o.InlineJS,null,"withRouter")," higher-order component that will inject router props into the wrapped component."),l.default.createElement("p",null,"Curi provides similar functionality with the ",l.default.createElement(o.InlineJS,null,"Curious")," ","component."),l.default.createElement("p",null,l.default.createElement(o.InlineJS,null,"Curious")," has a render-invoked ",l.default.createElement(o.InlineJS,null,"children")," ","function, which you can use to inject the Curi ",l.default.createElement(o.InlineJS,null,"router"),", the current ",l.default.createElement(o.InlineJS,null,"response"),", and the current"," ",l.default.createElement(o.InlineJS,null,"navigation")," object into components.")),l.default.createElement(i.CodeBlock,null,"// React Router\nexport default withRouter(SomeComponent);\n\n// Curi\nexport default () => (\n  <Curious>\n    {({ response }) => (\n      <SomeComponent response={response} />\n    )}\n  </Curious>\n);")),l.default.createElement("p",null,"At this point, hopefully you are comfortable with migrating from React Router v2/3 to Curi. If there are any concepts not covered here that you think should be, please feel free to open up an issue"," ",l.default.createElement("a",{href:"https://github.com/pshrmn/curi/issues"},"on GitHub"),"."))};var l=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),a=n(1),o=n(6),r=n(11),u=n(10),i=n(7)}}]);