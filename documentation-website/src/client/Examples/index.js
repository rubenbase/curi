// misc
import CodeSplitting from './misc/CodeSplitting';
import ScriptTags from './misc/ScriptTags';
import ServerRendering from './misc/ServerRendering';
import SideEffect from './misc/SideEffect';
// react
import ActiveLinksReact from './react/ActiveLinks';
import AuthenticationReact from './react/Authentication';
import BasicReact from './react/Basic';
import BlockingNavigationReact from './react/BlockingNavigation';
import BreadcrumbsReact from './react/Breadcrumbs';
import DataLoadingReact from './react/DataLoading';
import ModalReact from './react/Modal';
import MultiBodyReact from './react/MultiBody';
import Redux from './react/Redux';
import TransitionsReact from './react/Transitions';
// vue
import ActiveLinksVue from './vue/ActiveLinks';
import AuthenticationVue from './vue/Authentication';
import BasicVue from './vue/Basic';
import BlockingNavigationVue from './vue/BlockingNavigation';
import BreadcrumbsVue from './vue/Breadcrumbs';
import TransitionsVue from './vue/Transitions';
// svelte
import BasicSvelte from './svelte/Basic';

export default {
  misc: {
    'code-splitting': CodeSplitting,
    'script-tags': ScriptTags,
    'server-rendering': ServerRendering,
    'side-effect': SideEffect
  },
  react: {
    'active-links': ActiveLinksReact,
    authentication: AuthenticationReact,
    basic: BasicReact,
    'blocking-navigation': BlockingNavigationReact,
    breadcrumbs: BreadcrumbsReact,
    'data-loading': DataLoadingReact,
    modal: ModalReact,
    'multi-body': MultiBodyReact,
    redux: Redux,
    transitions: TransitionsReact
  },
  svelte: {
    basic: BasicSvelte
  },
  vue: {
    'active-links': ActiveLinksVue,
    authentication: AuthenticationVue,
    basic: BasicVue,
    'blocking-navigation': BlockingNavigationVue,
    breadcrumbs: BreadcrumbsVue,
    transitions: TransitionsVue
  }
};
