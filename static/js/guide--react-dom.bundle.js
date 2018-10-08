(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{108:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(u.Section,{title:"Rendering Responses",id:"rendering"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"The ",l.default.createElement(o.InlineJS,null,"curiProvider()")," function is used to create the component at the root of a Curi + React application. You can call this component anything that you want, but here it will be referred to as the ",l.default.createElement(o.InlineComponent,null,"Router"),"."),l.default.createElement(r.Note,null,l.default.createElement("p",null,"Why does ",l.default.createElement(o.InlineJS,null,"@curi/react-dom")," export a function to create a component and not just a component? Props signify values that can change, but an application should only ever have one router. By hard-coding the ",l.default.createElement(o.InlineJS,null,"router")," into a component, we avoid having to handle the possibility of switching routers (which should not happen).")),l.default.createElement("p",null,l.default.createElement(o.InlineJS,null,"curiProvider()")," is passed the application's Curi router. The returned component will automatically add an"," ",l.default.createElement(a.Link,{to:"Guide",params:{slug:"navigating"},hash:"observer"},"observer")," ","to the Curi router when it mounts, so that it can re-render when there are new responses."),l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Router")," takes a render-invoked function as its"," ",l.default.createElement(o.InlineJS,null,"children")," prop. This function will be called with an object that has three properties— ",l.default.createElement(o.InlineJS,null,"response"),","," ",l.default.createElement(o.InlineJS,null,"router"),", and ",l.default.createElement(o.InlineJS,null,"navigation"),"—and returns the React element(s) that form the root of the application.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},'import { curiProvider } from \'@curi/react-dom\';\n\nimport router from "./router";\nconst Router = curiProvider(router);\n\n// router.once() is used to delay rendering in case\n// the initially matched route is asynchronous\nrouter.once(() => {\n  ReactDOM.render((\n    <Router>\n      {({ response, router, navigation }) => {\n        return <response.body />;\n      }}\n    </Router>\n  ), document.getElementById("root"));\n});'),l.default.createElement(u.Subsection,{title:"What to return from children()",id:"children-return"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"The render-invoked ",l.default.createElement(o.InlineJS,null,"children()")," is responsible for rendering the root elements for an application."),l.default.createElement("p",null,"If you set React components as the ",l.default.createElement(o.InlineJS,null,"body")," properties on your responses, you can create a React element for the"," ",l.default.createElement(o.InlineJS,null,"body")," component in this function."),l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Body")," element (it is useful to rename the"," ",l.default.createElement(o.InlineJS,null,"response"),"'s ",l.default.createElement(o.InlineJS,null,"body")," to ",l.default.createElement(o.InlineJS,null,"Body"),' for JSX transformation) is a placeholder for the "real" component that you render for a route. This means that the "real" component will be different for every route. When it comes to passing props to the'," ",l.default.createElement(o.InlineComponent,null,"Body"),", you ",l.default.createElement("em",null,"could")," use ",l.default.createElement(o.InlineJS,null,"response.name")," ","to determine what props to pass based on which route matched, but passing the same props to every route's ",l.default.createElement(o.InlineComponent,null,"Body")," is usually sufficient. Passing the entire ",l.default.createElement(o.InlineJS,null,"response")," is generally useful so that the route components can access any"," ",l.default.createElement(o.InlineJS,null,"params"),", ",l.default.createElement(o.InlineJS,null,"data"),", and other properties of the"," ",l.default.createElement(o.InlineJS,null,"response"),".")),l.default.createElement(i.CodeBlock,{lang:"jsx"},'ReactDOM.render((\n  <Router>\n    {({ response, router, navigation }) => {\n      // rename body to Body for JSX transformation\n      const { body:Body } = response;\n      return (\n        <React.Fragment>\n          <header>\n            <NavLinks />\n          </header>\n          <main>\n            <Body response={response} />\n          </main>\n        </React.Fragment>\n      );\n    }}\n  </Router>\n), document.getElementById("root"));'),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"If your routes use an object to attach multiple components to a response, the ",l.default.createElement(o.InlineJS,null,"children()")," function also provides a good place to split these apart."),l.default.createElement("p",null,"If you do take this approach, please remember that you want every route to set the same ",l.default.createElement(o.InlineJS,null,"body")," shape. Otherwise, you'll have to determine the shape and change how you render in the"," ",l.default.createElement(o.InlineJS,null,"children()")," function, which can quickly become messy.")),l.default.createElement(i.CodeBlock,{lang:"jsx","data-line":"20,24,27"},'const routes = [\n  {\n    name: "Home",\n    path: "",\n    response() {\n      return {\n        body: {\n          Main: HomeMain,\n          Menu: HomeMenu\n        }\n      }\n    }\n  },\n  // ...\n];\n\nReactDOM.render((\n  <Router>\n    {({ response, router, navigation }) => {\n      const { Main, Menu } = response.body;\n      return (\n        <React.Fragment>\n          <header>\n            <Menu />\n          </header>\n          <main>\n            <Main response={response} />\n          </main>\n        </React.Fragment>\n      );\n    }}\n  </Router>\n), document.getElementById("root"));'),l.default.createElement(i.Explanation,null,l.default.createElement(r.Note,null,l.default.createElement("p",null,"There is a ",l.default.createElement(o.InlineComponent,null,"Curious")," component that you can render to access the ",l.default.createElement(o.InlineJS,null,"response"),", ",l.default.createElement(o.InlineJS,null,"router"),", and"," ",l.default.createElement(o.InlineJS,null,"navigation")," objects anywhere* in your application. This can help prevent having to pass props through multiple layers of components."),l.default.createElement("p",null,"* anywhere that is a child of your ",l.default.createElement(o.InlineComponent,null,"Router"),"."))),l.default.createElement(i.CodeBlock,{lang:"jsx"},'import { Curious } from "@curi/react-dom";\n            \nconst BaseRouteName = ({ response }) => (\n  <div>{response.name}</div>\n);\n\nexport default function RouteName() {\n  return (\n    <Curious>\n      {({ response }) => <BaseRouteName response={response} />}\n    </Curious>\n  );\n}')),l.default.createElement(u.Subsection,{title:"Accessibility",id:"accessibility"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"Managing the application's focus when navigating is useful for users who use screen readers. The ",l.default.createElement(o.InlineComponent,null,"Focus")," component provides a convenient way to focus a page's main content when it renders a new response."),l.default.createElement("p",null,"You can read some more about accessibility in the"," ",l.default.createElement(a.Link,{to:"Guide",params:{slug:"accessibility"}},"accessibility")," ","guide.")),l.default.createElement(i.CodeBlock,{lang:"jsx","data-line":"12-18"},'import { Focus } from "@curi/react-dom";\n            \nReactDOM.render((\n  <Router>\n    {({ response }) => {\n      const { body:Body } = response;\n      return (\n        <React.Fragment>\n          <header>\n            <NavLinks />\n          </header>\n          <Focus>\n            {ref => (\n              <main ref={ref} tabIndex={-1}>\n                <Body response={response} />\n              </main>\n            )}\n          </Focus>\n        </React.Fragment>\n      );\n    }}\n  </Router>\n), document.getElementById("root"));'))),l.default.createElement(u.Section,{title:"Navigating",id:"navigating"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Link")," component is used to navigate between routes within an application. When it renders in the DOM, it will render as an anchor (",l.default.createElement(o.InlineComponent,null,"a"),") element."),l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Link"),"'s ",l.default.createElement(o.InlineJS,null,"to")," prop describes which route clicking the link should navigate to. If you pass an invalid route name, Curi will warn you."),l.default.createElement("p",null,"If a route has any params (or if any of a route's ancestors have params for nested routes), the ",l.default.createElement(o.InlineJS,null,"params")," prop is used to pass these to the ",l.default.createElement(o.InlineComponent,null,"Link"),".")),l.default.createElement(i.CodeBlock,{lang:"jsx"},'import { Link } from "@curi/react-dom";\n          \nconst NavLinks = () => (\n  <nav>\n    <ul>\n      <li>\n        <Link to="Home">Home</Link>\n      </li>\n      <li>\n        <Link to="About">About</Link>\n      </li>\n      <li>\n        <Link to="User" params={{ id: "red" }}>Red</Link>\n      </li>\n    </ul>\n  </nav>\n);'),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Link")," also takes ",l.default.createElement(o.InlineJS,null,"hash"),", ",l.default.createElement(o.InlineJS,null,"query"),", and ",l.default.createElement(o.InlineJS,null,"state")," props to attach their values to the location that will be navigated to.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},'<Link to="Home" hash="details">Home</Link>\n// renders\n<a href="/#details">Home</a>')),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"Please check out the full"," ",l.default.createElement(a.Link,{to:"Package",params:{package:"react-dom"},hash:"API"},l.default.createElement(o.InlineJS,null,"@curi/react-dom"))," ","API documentation to see every component that the package provides.")))};var l=function(e){return e&&e.__esModule?e:{default:e}}(t(0)),a=t(1),o=t(6),r=t(11),u=t(10),i=t(7)}}]);