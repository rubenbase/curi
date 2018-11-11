(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{69:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var a=t(0),r=t.n(a),l=t(1),o=t(8),u=t(16),s=t(99),i=t(5),c={title:"Apollo Integration"};function p(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,c.title),r.a.createElement(i.b,null,r.a.createElement("p",null,r.a.createElement("a",{href:"https://apollographql.com"},"Apollo")," is a great solution for managing an application's data using"," ",r.a.createElement("a",{href:"http://graphql.org"},"GraphQL"),"."),r.a.createElement("p",null,"There are a few different implementation strategies for integrating Apollo and Curi based on how tightly you want them to be paired."),r.a.createElement(u.a,null,r.a.createElement("p",null,"This guide only covers integration between Curi and Apollo. If you are not already familiar with how to use Apollo, you will want to learn that first."),r.a.createElement("p",null,"Also, this guide will only be referencing Apollo's React implementation, but the principles are the same no matter how you render your application."))),r.a.createElement(s.a,{title:"Setup",id:"setup"},r.a.createElement(i.b,null,r.a.createElement("p",null,"Apollo's React package provides an ",r.a.createElement(o.a,null,"ApolloProvider")," ","component for accessing your Apollo client throughout the application. The ",r.a.createElement(o.a,null,"Router")," (or whatever you name the root Curi component) should be a descendant of the"," ",r.a.createElement(o.a,null,"ApolloProvider")," because we don't need to re-render the"," ",r.a.createElement(o.a,null,"ApolloProvider")," for every new response.")),r.a.createElement(i.a,{lang:"jsx"},'import { ApolloProvider } from "react-apollo";\nimport { curiProvider } from "@curi/react-dom";\n\nconst Router = curiProvider(router);\n\nReactDOM.render((\n  <ApolloProvider client={client}>\n    <Router>\n      {() => {...}}\n    </Router>\n  </ApolloProvider>\n), holder);')),r.a.createElement(s.a,{title:"Loose Pairing",id:"loose-pairing"},r.a.createElement(i.b,null,r.a.createElement("p",null,"Apollo and Curi don't actually have to know about each other. Curi can create a response without doing any data fetching and let Apollo handle that with its ",r.a.createElement(o.a,null,"Query")," component.")),r.a.createElement(i.a,null,"// routes.js\nimport Noun from \"./pages/Noun\";\n\n// nothing Apollo related in here\nconst routes = prepareRoutes([\n  {\n    name: 'Noun',\n    path: 'noun/:word',\n    response: () => {\n      return {\n        body: Noun\n      };\n    }\n  }\n]);"),r.a.createElement(i.b,null,r.a.createElement("p",null,"Any location data that a query needs can be taken from the response object. The best way to access this from your components would be to pass the ",r.a.createElement(o.b,null,"response")," to the components rendered in the"," ",r.a.createElement(o.a,null,"Router"),"'s ",r.a.createElement(o.b,null,"children")," prop, which is a render-invoked function.")),r.a.createElement(i.a,{lang:"jsx"},"// index.js\nReactDOM.render((\n  <ApolloProvider client={client}>\n    <Router>\n      {({ response }) => {\n        const { body:Body } = response;\n        return <Body response={response} />;\n      }}\n    </Router>\n  </ApolloProvider>\n), holder);"),r.a.createElement(i.b,null,r.a.createElement("p",null,"Because we pass the ",r.a.createElement(o.b,null,"response")," to the route's"," ",r.a.createElement(o.b,null,"body")," component, we can pass a ",r.a.createElement(o.a,null,"Query")," the response's location params using ",r.a.createElement(o.b,null,"props.response.params"),".")),r.a.createElement(i.a,{lang:"jsx"},'// pages/Nouns.js\nimport { Query } from "react-apollo";\n\nconst GET_NOUN = gql`\n  query noun($word: String!) {\n    noun(word: $word) {\n      word,\n      type,\n      definition\n    }\n  }\n`;\n\n// use the "word" param from the response props\n// to query the correct data\nconst Noun = ({ response }) => (\n  <Query\n    query={GET_NOUN}\n    variables={{ word: response.params.word }}\n  >\n    {({ loading, error, data }) => {\n      if (loading) {\n        return <Loading />;\n      }\n      // ...\n\n      return (\n        <div>\n          <h1>{data.noun.word}</h1>\n          <p>{data.noun.definition}</p>\n        </div>\n      )\n    }}\n  </Query>\n);')),r.a.createElement(s.a,{title:"Tight Pairing",id:"tight-pairing"},r.a.createElement(i.b,null,r.a.createElement("p",null,"You can use your Apollo client instance to call queries in a route's"," ",r.a.createElement(o.b,null,"resolve")," functions. ",r.a.createElement(o.b,null,"resolve")," functions are expected to return a Promise, which is exactly what"," ",r.a.createElement(o.b,null,"client.query()")," returns. Tightly pairing Curi and Apollo is mostly center around using a ",r.a.createElement(o.b,null,"resolve")," function to return a ",r.a.createElement(o.b,null,"client.query()")," call. This will delay navigation until after a route's GraphQL data has been loaded by Apollo."),r.a.createElement("p",null,"The ",r.a.createElement(o.b,null,"external")," option can be used when creating the router to make the Apollo client accessible from routes.")),r.a.createElement(i.a,null,'import client from "./apollo";\n          \nconst router = curi(history, routes, {\n  external: { client }\n});'),r.a.createElement(i.a,null,'import { EXAMPLE_QUERY } from "./queries";\n\nconst routes = prepareRoutes([\n  {\n    name: "Example",\n    path: "example/:id",\n    resolve: {\n      data({ params }, external) {\n        return external.client.query({\n          query: EXAMPLE_QUERY,\n          variables: { id: params.id }\n        });\n      }\n    }\n  }\n]);'),r.a.createElement(i.b,null,r.a.createElement("p",null,"There are two strategies for doing this."),r.a.createElement("p",null,"The first approach is to avoid the ",r.a.createElement(o.a,null,"Query")," altogether. Instead, you can use a route's ",r.a.createElement(o.b,null,"response()")," property to attach the data fetched by Apollo directly to a response through its"," ",r.a.createElement(o.b,null,"data")," property."),r.a.createElement("p",null,"While we know at this point that the query has executed, we should also check ",r.a.createElement(o.b,null,"error")," in the ",r.a.createElement(o.b,null,"response()")," function to ensure that the query was executed successfully.")),r.a.createElement(i.a,null,'// routes.js\nimport GET_VERB from "./queries";\n\nimport Verb from "./pages/Verb";\n\nexport default [\n  {\n    name: "Verb",\n    path: "verb/:word",\n    resolve: {\n      verb({ params }, external) {\n        return external.client.query({\n          query: GET_VERB,\n          variables: { word: params.word }\n        })\n      }\n    },\n    response({ error, resolved }) {\n      if (error) {\n        // handle failed queries\n      }\n      return {\n        body: Verb,\n        data: resolved.verb.data\n      }\n    }\n  }\n];'),r.a.createElement(i.b,null,r.a.createElement("p",null,"When rendering, you can access the query data through the"," ",r.a.createElement(o.b,null,"response"),"'s ",r.a.createElement(o.b,null,"data")," property.")),r.a.createElement(i.a,{lang:"jsx"},"// pages/Verb.js\nconst Verb = ({ response }) => (\n  <div>\n    <h1>{response.data.verb.word}</h1>\n    <p>\n      {response.data.verb.definition}\n    </p>\n  </div>\n)"),r.a.createElement(i.b,null,r.a.createElement("p",null,"The second approach is to use a ",r.a.createElement(o.b,null,"resolve")," function as a way to cache the data, but also use ",r.a.createElement(o.a,null,"Query"),". With this approach, we do not have to attach the query data to the response; we are just relying on the fact that Apollo will execute and cache the results prior to navigation.")),r.a.createElement(i.a,null,'// routes.js\nimport { GET_VERB } from "./queries";\n\nexport default [\n  {\n    name: "Verb",\n    path: "verb/:word",\n    resolve: {\n      data({ params, external }) {\n        // load the data so it is cached by\n        // your Apollo client\n        return external.client.query({\n          query: GET_VERB,\n          variables: { word: params.word }\n        })\n      }\n    }\n  }\n];'),r.a.createElement(i.b,null,r.a.createElement("p",null,"The route's component will render a ",r.a.createElement(o.a,null,"Query")," to also call the query. Because the query has already been executed, Apollo will grab the data from its cache instead of re-sending a request to your server.")),r.a.createElement(i.a,{lang:"jsx"},'// pages/Verb.js\nimport { GET_VERB } from "../queries";\n\nconst Verb = ({ response }) => (\n  <Query\n    query={GET_VERB}\n    variables={{ word: response.params.word }}\n  >\n    {({ loading, error, data }) => {\n      // ...\n      return (\n        <div>\n          <h1>{data.verb.word}</h1>\n          <p>\n            {data.verb.definition}\n          </p>\n        </div>\n      );\n    }}\n  </Query>\n)'),r.a.createElement(s.a,{title:"Prefetching",id:"prefetch",tag:"h3"},r.a.createElement(i.b,null,r.a.createElement("p",null,"One additional benefit of adding queries to routes using"," ",r.a.createElement(o.b,null,"resolve")," functions is that you can prefetch data for a route."),r.a.createElement("p",null,"The"," ",r.a.createElement(l.b,{name:"Package",params:{package:"route-prefetch"}},r.a.createElement(o.b,null,"@curi/route-prefetch"))," ","interaction lets you programmatically fetch the data for a route prior to navigating to a location.")),r.a.createElement(i.a,null,'// index.js\nimport prefetch from "@curi/route-prefetch";\n\nconst routes = prepareRoutes([\n  {\n    name: "Example",\n    path: "example/:id",\n    resolve: {\n      examples({ params }, external) {\n        return external.client.query({\n          query: GET_EXAMPLES,\n          variables: { id: params.id }\n        })\n      }\n    }\n  }\n]);\n\nconst router = curi(history, routes, {\n  route: [prefetch()]\n});\n\n// this will call the GET_EXAMPLES query\n// and Apollo will cache the results\nrouter.route.prefetch(\n  "Example",\n  { params: { id: 2 }}\n);'))))}}}]);