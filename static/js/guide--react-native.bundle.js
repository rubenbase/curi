(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{109:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return l.default.createElement(l.default.Fragment,null,l.default.createElement(u.Section,{title:"Rendering Responses",id:"rendering"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"The ",l.default.createElement(o.InlineJS,null,"curiProvider()")," function is used to create the component at the root of a Curi + React application. You can call this component anything that you want, but here it will be referred to as the ",l.default.createElement(o.InlineComponent,null,"Router"),"."),l.default.createElement(r.Note,null,l.default.createElement("p",null,"Why does ",l.default.createElement(o.InlineJS,null,"@curi/react-native")," export a function to create a component and not just a component? Props signify values that can change, but an application should only ever have one router. By hard-coding the ",l.default.createElement(o.InlineJS,null,"router")," into a component, we avoid having to handle the possibility of switching routers (which should not happen).")),l.default.createElement("p",null,l.default.createElement(o.InlineJS,null,"curiProvider()")," is passed the application's Curi router. The returned component will automatically add an"," ",l.default.createElement(a.Link,{to:"Guide",params:{slug:"navigating"},hash:"observer"},"observer")," ","to the Curi router when it mounts, so that it can re-render when there are new responses."),l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Router")," takes a render-invoked function as its"," ",l.default.createElement(o.InlineJS,null,"children")," prop. This function will be called with an object that has three properties— ",l.default.createElement(o.InlineJS,null,"response"),","," ",l.default.createElement(o.InlineJS,null,"router"),", and ",l.default.createElement(o.InlineJS,null,"navigation"),"—and returns the React element(s) that form the root of the application.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"import { curiProvider } from '@curi/react-native';\n\nimport router from \"./router\";\nconst Router = curiProvider(router);\n\nconst App = () => (\n  <Router>\n    {({ response, router, navigation }) => {\n      return <response.body />;\n    }}\n  </Router>\n);"),l.default.createElement(u.Subsection,{title:"What to return from children()",id:"children-return"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"The render-invoked ",l.default.createElement(o.InlineJS,null,"children()")," is responsible for rendering the root elements for an application."),l.default.createElement("p",null,"Unlike with the DOM, React Native cannot have its initial render delayed with a ",l.default.createElement(o.InlineJS,null,"router.once()")," call. Instead, the"," ",l.default.createElement(o.InlineJS,null,"children()")," function should check if the"," ",l.default.createElement(o.InlineJS,null,"response")," exists, and rendering a loading component when it does not."),l.default.createElement("p",null,"If you set React components as the ",l.default.createElement(o.InlineJS,null,"body")," properties on your responses, you can create a React element for the"," ",l.default.createElement(o.InlineJS,null,"body")," component in this function."),l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Body")," element (it is useful to rename the"," ",l.default.createElement(o.InlineJS,null,"response"),"'s ",l.default.createElement(o.InlineJS,null,"body")," to ",l.default.createElement(o.InlineJS,null,"Body"),' for JSX transformation) is a placeholder for the "real" component that you render for a route. This means that the "real" component will be different for every route. When it comes to passing props to the'," ",l.default.createElement(o.InlineComponent,null,"Body"),", you ",l.default.createElement("em",null,"could")," use ",l.default.createElement(o.InlineJS,null,"response.name")," ","to determine what props to pass based on which route matched, but passing the same props to every route's ",l.default.createElement(o.InlineComponent,null,"Body")," is usually sufficient. Passing the entire ",l.default.createElement(o.InlineJS,null,"response")," is generally useful so that the route components can access any"," ",l.default.createElement(o.InlineJS,null,"params"),", ",l.default.createElement(o.InlineJS,null,"data"),", and other properties of the"," ",l.default.createElement(o.InlineJS,null,"response"),".")),l.default.createElement(i.CodeBlock,{lang:"jsx"},"const App = () => (\n  <Router>\n    {({ response, router, navigation }) => {\n      // async route protection\n      if (!response) {\n        return <Loading />;\n      }\n\n      // rename body to Body for JSX transformation\n      const { body:Body } = response;\n      return (\n        <React.Fragment>\n          <NavLinks />\n          <Body response={response} />\n        </React.Fragment>\n      );\n    }}\n  </Router>\n);"),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"If your routes use an object to attach multiple components to a response, the ",l.default.createElement(o.InlineJS,null,"children()")," function also provides a good place to split these apart."),l.default.createElement("p",null,"If you do take this approach, please remember that you want every route to set the same ",l.default.createElement(o.InlineJS,null,"body")," shape. Otherwise, you'll have to determine the shape and change how you render in the"," ",l.default.createElement(o.InlineJS,null,"children()")," function, which can quickly become messy.")),l.default.createElement(i.CodeBlock,{lang:"jsx","data-line":"20,24,27"},'const routes = [\n  {\n    name: "Home",\n    path: "",\n    response() {\n      return {\n        body: {\n          Main: HomeMain,\n          Menu: HomeMenu\n        }\n      }\n    }\n  },\n  // ...\n];\n\nconst App = () => (\n  <Router>\n    {({ response, router, navigation }) => {\n      const { Main, Menu } = response.body;\n      return (\n        <React.Fragment>\n          <Menu />\n          <Main response={response} />\n        </React.Fragment>\n      );\n    }}\n  </Router>\n);'),l.default.createElement(i.Explanation,null,l.default.createElement(r.Note,null,l.default.createElement("p",null,"There is a ",l.default.createElement(o.InlineComponent,null,"Curious")," component that you can render to access the ",l.default.createElement(o.InlineJS,null,"response"),", ",l.default.createElement(o.InlineJS,null,"router"),", and"," ",l.default.createElement(o.InlineJS,null,"navigation")," objects anywhere* in your application. This can help prevent having to pass props through multiple layers of components."),l.default.createElement("p",null,"* anywhere that is a child of your ",l.default.createElement(o.InlineComponent,null,"Router"),"."))),l.default.createElement(i.CodeBlock,{lang:"jsx"},'import { Curious } from "@curi/react-native";\n            \nconst BaseRouteName = ({ response }) => (\n  <Text>{response.name}</Text>\n);\n\nexport default function RouteName() {\n  return (\n    <Curious>\n      {({ response }) => <BaseRouteName response={response} />}\n    </Curious>\n  );\n}'))),l.default.createElement(u.Section,{title:"Navigating",id:"navigating"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Link")," component is used to navigate between routes within an application. By default, the ",l.default.createElement(o.InlineComponent,null,"Link")," will render as a ",l.default.createElement(o.InlineComponent,null,"TouchableHighlight"),", but you can specify a different component using the ",l.default.createElement(o.InlineJS,null,"anchor")," prop."),l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Link"),"'s ",l.default.createElement(o.InlineJS,null,"to")," prop describes which route clicking the link should navigate to. If you pass an invalid route name, Curi will warn you."),l.default.createElement("p",null,"If a route has any params (or if any of a route's ancestors have params for nested routes), the ",l.default.createElement(o.InlineJS,null,"params")," prop is used to pass these to the ",l.default.createElement(o.InlineComponent,null,"Link"),".")),l.default.createElement(i.CodeBlock,{lang:"jsx"},'import { Link } from "@curi/react-native";\n          \nconst NavLinks = () => (\n  <View>\n    <Link to="Home">\n      <Text>Home</Text>\n    </Link>\n    <Link to="About" anchor={TouchableOpacity}>\n      <Text>About</Text>\n    </Link>\n    <Link to="User" params={{ id: "blue" }}>\n      <Text>Blue</Text>\n    </Link>\n  </View>\n);'),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"The ",l.default.createElement(o.InlineComponent,null,"Link")," also takes ",l.default.createElement(o.InlineJS,null,"hash"),", ",l.default.createElement(o.InlineJS,null,"query"),", and ",l.default.createElement(o.InlineJS,null,"state")," props to attach their values to the location that will be navigated to.")),l.default.createElement(i.CodeBlock,{lang:"jsx"},'<Link to="Home" hash="details">\n  <Text>Home</Text>\n</Link>')),l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"Please check out the full"," ",l.default.createElement(a.Link,{to:"Package",params:{package:"react-dom"},hash:"API"},l.default.createElement(o.InlineJS,null,"@curi/react-dom"))," ","API documentation to see every component that the package provides.")),l.default.createElement(u.Section,{title:"React Native Tips",id:"tips"},l.default.createElement(i.Explanation,null,l.default.createElement(r.Note,null,"This guide assumes that you are already familiar with React Native.")),l.default.createElement(u.Subsection,{title:"Back Button",id:"back-button"},l.default.createElement(i.Explanation,null,l.default.createElement("p",null,"To add back button support, you need to use your"," ",l.default.createElement(o.InlineJS,null,"history")," object (which you can use directly or access through your router)."),l.default.createElement("p",null,"The ",l.default.createElement(o.InlineJS,null,"history.go()")," method is used for jumping between locations, so passing it ",l.default.createElement(o.InlineJS,null,"-1")," will jump back to the previous location."),l.default.createElement("p",null,"When the app is at the initial location, you may want to return"," ",l.default.createElement(o.InlineJS,null,"false")," to close the app when the user presses the back button.")),l.default.createElement(i.CodeBlock,null,"import { BackHandler } from 'react-native';\n\n// create your router\nconst router = curi(history, routes);\n\nBackHandler.addEventListener(\n  \"hardwareBackPress\",\n  () => {\n    // close the app when pressing back button\n    // while on the initial screen\n    if (router.history.index === 0) {\n      return false;\n    }\n    router.history.go(-1);\n    return true;\n  }\n);"))))};var l=function(e){return e&&e.__esModule?e:{default:e}}(t(0)),a=t(1),o=t(6),r=t(11),u=t(10),i=t(7)}}]);