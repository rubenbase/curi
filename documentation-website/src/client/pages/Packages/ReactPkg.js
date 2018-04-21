import React from "react";
import { Link } from "@curi/react";

import BasePackage from "./base/BasePackage";
import APIBlock from "./base/APIBlock";
import {
  PrismBlock,
  InlineJS as IJS,
  InlineComponent as Cmp
} from "../../components/PrismBlocks";
import { Note, Warning } from "../../components/Messages";
import { Section, Subsection } from "../../components/Sections";

export default ({ name, version, globalName }) => (
  <BasePackage
    name={name}
    version={version}
    globalName={globalName}
    about={
      <div>
        <p>
          The <IJS>@curi/react</IJS> provides a number of React components that
          you can use for rendering your application.
        </p>
      </div>
    }
  >
    <APIBlock>
      <Section title={<Cmp>CuriProvider</Cmp>} id="CuriProvider">
        <PrismBlock lang="javascript">
          {`import { CuriProvider } from '@curi/react';`}
        </PrismBlock>
        <p>
          The <Cmp>CuriProvider</Cmp> is the root Curi component for an
          application. It has two jobs:
        </p>
        <ol>
          <li>Re-rendering the application when a new response is emitted.</li>
          <li>
            Placing values on the context so that the other Curi components can
            access them.
          </li>
        </ol>
        <Note>
          All of the other components provided by <IJS>@curi/react</IJS> must be
          descendants of a <Cmp>CuriProvider</Cmp>.
        </Note>
        <p>
          This component will listen for new responses to be emitted by your{" "}
          <IJS>router</IJS> and will automatically re-render your application
          when this happens.
        </p>

        <PrismBlock lang="jsx">
          {`const App = () => (
  <CuriProvider router={router}>
    {({ response, navigation, router }) => {
      const { body:Body } = response;
      return <Body response={response} />;
    }}
  </CuriProvider>
);`}
        </PrismBlock>
        <Section tag="h3" title="Props" id="CuriProvider-props">
          <Subsection tag="h4" title="router" id="CuriProvider-router">
            <p>A Curi router.</p>
          </Subsection>

          <Subsection tag="h4" title="children" id="CuriProvider-render">
            <p>
              <IJS>children</IJS> is a render-invoked prop that will be passed
              an object with three properties:
            </p>
            <ol>
              <li>
                <IJS>response</IJS> is the response object generated for the
                current location.
              </li>
              <li>
                <IJS>navigation</IJS> is additional information about the last
                navigation that doesn't make sense to place in the response.
              </li>
              <li>
                <IJS>router</IJS> is the Curi router.
              </li>
            </ol>
          </Subsection>
        </Section>
      </Section>

      <Section title={<Cmp>Link</Cmp>} id="Link">
        <PrismBlock lang="javascript">
          {`import { Link } from '@curi/react';`}
        </PrismBlock>
        <p>
          A <Cmp>Link</Cmp> allows you to navigate within your application using
          an anchor element (<Cmp>a</Cmp>). When the rendered element is
          clicked, instead of reloading the page it will use your router
          object's history object to navigate.
        </p>

        <p>
          With the <Cmp>Link</Cmp>, instead of providing a URI to navigate to,
          you just need to specify the name of the route you want to link to.
          Then, the pathname of the URI you want the component to link to will
          be automatically generated for you.
        </p>

        <PrismBlock lang="jsx">
          {`<Link to='User' params={{ id: 16 }}>User 16</Link>
// <a href='/user/16'>User 16</a>`}
        </PrismBlock>

        <Section tag="h3" title="Props" id="Link-props">
          <Subsection tag="h4" title="to" id="Link-to">
            <p>The name of the route that you want to navigate to.</p>
            <PrismBlock lang="jsx">
              {`// Home route is { name: "Home", path: "" }
<Link to="Home">Home</Link>`}
            </PrismBlock>
            <p>
              If <IJS>to</IJS> is not provided, the <Cmp>Link</Cmp> will re-use
              the current location's <IJS>pathname</IJS>. This is useful for
              linking to hashes within the current page.
            </p>
          </Subsection>

          <Subsection tag="h4" title="params" id="Link-params">
            <p>
              If the route that you want to navigate to (or any of its parents)
              include path parameters, you can specify them using the params
              prop.
            </p>
            <PrismBlock lang="jsx">
              {`// User route is { name: 'User', path: '/user/:id' }
<Link to='User' params={{ id: 16 }}>User 16</Link>`}
            </PrismBlock>
          </Subsection>

          <Subsection tag="h4" title="details" id="Link-details">
            <p>
              While the pathname of the location to navigate to will be
              generated for you, this does not cover over location properties
              (query, hash, and state). You can provide these values using the
              details prop.
            </p>
            <PrismBlock lang="jsx">
              {`<Link
  to='Products'
  params={{ type: 'vacuums' }}
  details={{ hash: 'iroomba' }}
>
  DJ Roomba
</Link>`}
            </PrismBlock>
          </Subsection>

          <Subsection tag="h4" title="anchor" id="Link-anchor">
            <p>
              By default, when you render a <Cmp>Link</Cmp>, an anchor element
              will be rendered (<IJS>React.createElement('a', ...)</IJS>).
              However, you can provide your own component to be rendered
              instead. This can be useful for using styled components to
              navigate.
            </p>
            <Warning>
              You can provide any component that you want, but you{" "}
              <em>should</em> stick with an anchor (or a component that renders
              an anchor). There are accessibility issues that will occur when
              you use other DOM elements as links. The component's prop type is
              func in an attempt to discourage you from making your link render
              a button, div, span, etc.
            </Warning>
          </Subsection>

          <Subsection tag="h4" title="active" id="Link-active">
            <p>
              The active prop gives you an opportunity to style the element
              rendered by the <Cmp>Link</Cmp> when it is "active". Being active
              means that the <Cmp>Link</Cmp>'s route parameters are the same as
              the current response's route parameters.
            </p>

            <p>The active prop is an object with a few properties.</p>
            <ol>
              <li>
                <p>
                  <IJS>merge</IJS> (required) - The <IJS>merge</IJS> property
                  must be a function. That function's argument is the props
                  object that will be passed used to render the element rendered
                  by the <Cmp>Link</Cmp>. The merge function can modify these
                  props however it likes. It must return the resulting props
                  object.
                </p>
                <PrismBlock lang="jsx">
                  {`function merge(props) {
  props.className = 'active';
  return props;
}

<Link to='Home' active={{ merge }}>Home</Link>`}
                </PrismBlock>
              </li>
              <li>
                <p>
                  <IJS>partial</IJS> (optional) - By default, only{" "}
                  <Cmp>Link</Cmp>s that match the response object's name can be
                  considered "active". However, when partial is true, any parent
                  routes can also be "active". This is done using the response
                  object's partials property.
                </p>
                <PrismBlock lang="jsx">
                  {`<Link to='Users' active={{ partial: true, merge }}>Users</Link>`}
                </PrismBlock>
              </li>
              <li>
                <p>
                  <IJS>extra</IJS> (optional) - Curi only uses a location's{" "}
                  <IJS>pathname</IJS> to determine whether or not it is active.
                  If you want to use a location's <IJS>query</IJS> or{" "}
                  <IJS>hash</IJS>, you can pass an <IJS>extra</IJS> function.
                  This will be passed two arguments: the first is the{" "}
                  <IJS>location</IJS> and the second is the <IJS>details</IJS>{" "}
                  object you passed to the <Cmp>Link</Cmp>. This function should
                  return a boolean to indicate whether or not it should be
                  active based on these values. This will only be called if the{" "}
                  <IJS>pathname</IJS> is also active.
                </p>
                <PrismBlock lang="jsx">
                  {`function sameHash(location, details) {
  return location.hash === details.hash;
}
<Link to='Users' active={{ extra: sameHash, merge }}>Users</Link>`}
                </PrismBlock>
              </li>
            </ol>
            <Note>
              <p>
                If you use the active prop, you have to include the{" "}
                <Link to="Package" params={{ package: "route-active" }}>
                  @curi/route-active
                </Link>{" "}
                route interaction in your Curi router. If you do not, an error
                will be thrown.
              </p>
              <PrismBlock lang="javascript">
                {`import active from "@curi/route-active";

const router = curi(history, routes, {
  route: [active()]
});`}
              </PrismBlock>
            </Note>
          </Subsection>
        </Section>
      </Section>

      <Section title={<Cmp>Curious</Cmp>} id="Curious">
        <PrismBlock lang="javascript">
          {`import { Curious } from '@curi/react';`}
        </PrismBlock>
        <p>
          A context consumer component for injecting router values into
          components.
        </p>

        <PrismBlock lang="jsx">
          {`class MyComponent extends React.Component {
  render() {
    return (
      <Curious>
        {({ router, response, navigation }) => {
          // pass these props to any components that need them
          return (
            <ThingThatNeedsResponse response={response} />
          );
        }}
      </Curious>
    )
  }
}

export default MyComponent;`}
        </PrismBlock>

        <Section tag="h3" title="Props" id="curious-props">
          <Subsection tag="h4" title="children" id="curious-children">
            A render-invoked function that returns a React element. This
            function will receive an object with <IJS>router</IJS>,{" "}
            <IJS>response</IJS> and <IJS>navigation</IJS> properties.
          </Subsection>
        </Section>
      </Section>

      <Section title={<Cmp>Active</Cmp>} id="Active">
        <PrismBlock lang="javascript">
          {`import { Active } from '@curi/react';`}
        </PrismBlock>
        <p>
          The <Cmp>Active</Cmp> component allows you to style its child
          component as "active" when the location that <Cmp>Active</Cmp>{" "}
          describe matches the current location.
        </p>

        <p>
          The <Cmp>Active</Cmp> component lets you modify its children element's
          props. It takes a merge function as a prop, which you can use to
          modify the child element's props when the component is "active".
        </p>

        <Section tag="h3" title="Props" id="Active-props">
          <Subsection tag="h4" title="name" id="Active-name">
            <p>The name of the route to compare against the response object.</p>
          </Subsection>

          <Subsection tag="h4" title="params" id="Active-params">
            <p>
              An object containing route parameters. These will be compared
              against the route params of the response object.
            </p>
          </Subsection>

          <Subsection tag="h4" title="children" id="Active-children">
            <p>
              A React element that will have its props updated when the{" "}
              <Cmp>Active</Cmp> component is "active".
            </p>
          </Subsection>

          <Subsection tag="h4" title="merge" id="Active-merge">
            <p>
              A function that will modify the children element's props. It
              receives a props object as its argument and must return a props
              object.
            </p>
          </Subsection>

          <Subsection tag="h4" title="partial" id="Active-partial">
            <p>
              A boolean that defaults to false. When it is true, the "active"
              check will check the response's partials array in addition to its
              name. This allows you to style ancestor routes of the actually
              "active" route.
            </p>
          </Subsection>

          <Subsection tag="h4" title="details" id="Active-details">
            <p>
              An object with additional location properties (<IJS>query</IJS>{" "}
              and <IJS>hash</IJS>) that will be used in the <IJS>extra</IJS>{" "}
              function. This is a separate prop so that you can re-use an{" "}
              <IJS>extra</IJS> function across <Cmp>Active</Cmp> components.
            </p>
          </Subsection>

          <Subsection tag="h4" title="extra" id="Active-extra">
            <p>
              A function that will receive the current <IJS>location</IJS> and
              the <IJS>details</IJS> that you passed to the <Cmp>Active</Cmp>.
              This allows you to determine if the location is active based on
              location properties other than the <IJS>pathname</IJS> . The
              function should return a boolean to indicate whether or not the
              the location is active. This will only be called if the{" "}
              <IJS>pathname</IJS> is also active.
            </p>
          </Subsection>
        </Section>

        <Section tag="h3" title="Usage" id="Active-usage">
          <PrismBlock lang="jsx">
            {`function merge(props) {
  props.className = 'active';
  return props; 
}

const Users = (props) => (
  {
    props.users.map(u => (
      <Active
        key={u.id}
        name='User'
        merge={merge}
        params={u}
      >
        <User {...u} />
      </Active>
    ))
  }
);`}
          </PrismBlock>

          <p>
            This relies on the active route interaction from{" "}
            <Link to="Package" params={{ package: "route-active" }}>
              @curi/route-active
            </Link>{" "}
            being added to your router.
          </p>

          <PrismBlock lang="javascript">
            {`import active from '@curi/route-active';

const router = curi(history, routes, {
  route: [active()]
});`}
          </PrismBlock>
        </Section>
      </Section>

      <Section title={<Cmp>Block</Cmp>} id="Block">
        <PrismBlock lang="javascript">
          {`import { Block } from '@curi/react';`}
        </PrismBlock>
        <p>
          The <Cmp>Block</Cmp> component lets you prevent navigation until a
          user has confirmed that they want to navigate. This can be useful when
          the user attempts to navigate away from a partially filled form. This{" "}
          <strong>will not</strong> prevent the user from navigating to another
          site, it only works for navigation within the application.
        </p>

        <Section tag="h3" title="Props" id="Block-props">
          <Subsection tag="h4" title="active" id="Block-active">
            <p>
              A boolean, which is true by default. When it is true, the
              navigation block is active. When it is false, navigation will not
              be blocked.
            </p>
            <PrismBlock lang="jsx">
              {`// will block navigation
<Block active={true} confirm={confirm} />

// will not block navigation
<Block active={false} confirm={confirm} />`}
            </PrismBlock>
          </Subsection>

          <Subsection tag="h4" title="confirm" id="Block-confirm">
            <p>
              The confirm prop is a function that will be called whenever there
              is navigation. The function will receive four arguments: location,
              action, success, and failure. The location and action values are
              the location object that is being navigated to and the type of
              navigation. The success and failure arguments are functions that
              you should call depending on whether or not you want to let the
              navigation happen. When the navigation should occur, the confirm
              function should call the success function. When the navigation
              should be cancelled, the failure function should be called.
            </p>
            <PrismBlock lang="jsx">
              {`<Block
  confirm={({ location, action }, success, failure) => {
    const response = window.confirm("Shall we?");
    if (response) {
      success();
    } else {
      failure();
    }
  }}
/>`}
            </PrismBlock>
          </Subsection>
        </Section>
      </Section>
    </APIBlock>
  </BasePackage>
);
