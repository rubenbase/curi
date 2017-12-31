import React from 'react';
import BasePackage from './base/BasePackage';
import APIBlock from './base/APIBlock';
import { InlineJS as IJS, PrismBlock } from '../components/PrismBlocks';
import { Section, Subsection } from '../components/Sections';

export default ({ name, version, globalName }) => (
  <BasePackage
    name={name}
    version={version}
    globalName={globalName}
    about={
      <p>
        The <IJS>@curi/addon-active</IJS> package determines whether a route is
        "active" by comparing it to the current response. This can be restricted
        to complete matches or allow partial matches so that locations that
        represent an ancestor of the current location are also considered
        "active".
      </p>
    }
  >
    <APIBlock>
      <Section tag="h3" title="createActiveAddon" id="createActiveAddon">
        <p>
          The default export, this function is an add-on factory that will add
          an <IJS>active</IJS> function to your router's add-on property.
        </p>
        <p>
          The addon returns a boolean, <IJS>true</IJS> when a route is "active"
          (it matches the response's <IJS>location</IJS>) and <IJS>false</IJS>{' '}
          when it is not.
        </p>
        <PrismBlock lang="javascript">
          {`import curi from '@curi/core';
import createActiveAddon from '@curi/addon-active';

const router = curi(history, routes, {
  addons: [createActiveAddon()]
});`}
        </PrismBlock>
        <Subsection title="Arguments" id="arguments">
          <ul>
            <li>
              <IJS>name</IJS> - the name of the route to check.
            </li>
            <li>
              <IJS>response</IJS> - the response to check the route against.
            </li>
            <li>
              <IJS>params</IJS> - any route params for the route that is being
              checked
            </li>
            <li>
              <IJS>partial</IJS> - when <IJS>true</IJS>, ancestor routes can be
              considered active. (default <IJS>false</IJS>)
            </li>
          </ul>
          <PrismBlock lang="javascript">
            {`const isActive = router.addons.active(
  'Some Route',
  response,
  { id: 10 },
  false
);`}
          </PrismBlock>
        </Subsection>
      </Section>
    </APIBlock>
  </BasePackage>
);
