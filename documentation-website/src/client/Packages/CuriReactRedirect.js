import React from 'react';
import BasePackage from '../components/BasePackage';
import {
  PrismBlock,
  InlineJS as IJS,
  InlineComponent as Cmp
} from '../components/PrismBlocks';
import APIBlock from '../components/APIBlock';

export default ({ name, version, globalName }) => (
  <BasePackage name={name} version={version} globalName={globalName}>
    <APIBlock>
      <h3>&lt;Redirect&gt;</h3>
      <PrismBlock lang='javascript'>
        {
`import Redirect from '@curi/react-redirect';`
        }
      </PrismBlock>

      <p>
        The <Cmp>Redirect</Cmp> component lets you "render" a redirect. After
        the <Cmp>Redirect</Cmp> component has mounted, it will call the appropriate
        history method to navigate to a new location.
      </p>

      <p>
        <Cmp>Redirect</Cmp> works very similarly to a <Cmp>Link</Cmp>,
        except instead of having navigation triggered by a click, with a <Cmp>Redirect</Cmp>
        {' '}the navigation will happen automatically just by rendering the component.
      </p>
      <PrismBlock lang='jsx'>
        {
`<Redirect to='Home' />`
        }
      </PrismBlock>

      <div className='section'>
        <h3>props</h3>

        <div className='subsection'>
          <h4>to</h4>
          <p>
            The name of the route that should be used to generate the pathname of the location to navigate to.
          </p>
        </div>

        <div className='subsection'>
          <h4>params</h4>
          <p>
            Any path params of the route specified with the to prop (or the params for any of its ancestor
            routes).
          </p>
        </div>

        <div className='subsection'>
          <h4>details</h4>
          <p>
            Additional location properties to include when generating the URI to redirect to (search, hash, state).
          </p>
        </div>

        <div className='subsection'>
          <h4>children</h4>
          <p>
            You can provide a children element that will be rendered until the response generated by the redirect
            has resolved. This allows you to render some sort of "loading" message, which can be useful if the
            redirect takes a bit of time and you don't want to just render a blank page.
          </p>
        </div>
      </div>
    </APIBlock>
  </BasePackage>
);
