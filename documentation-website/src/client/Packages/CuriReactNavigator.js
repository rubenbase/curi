import React from 'react';
import BasePackage from '../components/BasePackage';
import { InlineJS, PrismBlock } from '../components/PrismBlocks';
import APIBlock from '../components/APIBlock';

const name = 'curi-react-navigator';
const globalName = 'CuriReactNavigator';
const version = require('./versions').default[name];
const type = 'react';

const CuriReactNavigator = () => (
  <BasePackage name={name} version={version} globalName={globalName}>
    <APIBlock>
    <h3>&lt;Navigator&gt;</h3>
      <PrismBlock lang='javascript'>
        {
`import Navigator from 'curi-react-navigator';`
        }
      </PrismBlock>

      <p>
        The <InlineJS>&lt;Navigator&gt;</InlineJS> component provides a way to automatically re-render
        your application when the location changes. This component gets passed a curi configuration object,
        which it will subscribe to so that it can re-render when the location changes.
      </p>

      <PrismBlock lang='jsx'>
        {
`const config = createConfig(history, routes);

ReactDOM.render((
  <Navigator config={config}>
    {(response, config) => {
      if (!response) {
        return null;
      }
      return response.body ? <response.body /> : null;
    }}
  </Navigator>
), holder);`
        }
      </PrismBlock>

      <div className='section'>
        <h3>props</h3>

        <div className='subsection'>
          <h4>config</h4>
          <p>
            A configuration object (created by calling curi's createConfig function).
          </p>
        </div>

        <div className='subsection'>
          <h4>children</h4>
          <p>
            A render function. This will be called whenever the <InlineJS>&lt;Navigator&gt;</InlineJS>
            {' '}renders. The function will be passed the current response object and the config object it
            was passed as a prop. The function must return a React element.
          </p>
        </div>

        <div className='subsection'>
          <h4>response</h4>
          <p>
            A response object. You can pass your <InlineJS>&lt;Navigator&gt;</InlineJS> a response object and
            it will use that instead of subscribing to the configuration object. This is ideal for server-side
            rendering.
          </p>
        </div>
      </div>
    </APIBlock>
  </BasePackage>
);

export default {
  name,
  version,
  type,
  component: CuriReactNavigator
};