import dedent from "dedent";

import { Questions } from "inquirer";

export type Deps = string[];

export interface DependencyAnswers {
  ui: string;
  interactions: Deps;
  sideEffects: Deps;
  static: boolean;
  history: Deps;
}

const questions: Questions<DependencyAnswers> = [
  {
    type: "list",
    name: "ui",
    message: "What will you use to render your application?",
    choices: [
      {
        name: `React DOM`,
        value: "@curi/react-dom"
      },
      {
        name: `React Native`,
        value: "@curi/react-native"
      },
      {
        name: `Vue`,
        value: "@curi/vue"
      },
      {
        name: `Svelte`,
        value: "@curi/svelte"
      },
      {
        name: `other`,
        value: undefined
      }
    ],
    pageSize: 5
  },
  {
    type: "checkbox",
    name: "interactions",
    message: "Which route interactions do you need?",
    choices: [
      {
        name: dedent`
          @curi/route-active
              detect active routes`,
        value: "@curi/route-active"
      },
      {
        name: dedent`
          @curi/route-ancestors
              determine a route's ancestor routes`,
        value: "@curi/route-ancestors"
      },
      {
        name: dedent`
          @curi/route-prefetch
              prefetch data for asynchronous routes`,
        value: "@curi/route-prefetch"
      }
    ],
    pageSize: 6
  },
  {
    type: "checkbox",
    name: "sideEffects",
    message: "When the user navigates to a new location, do you want to:",
    choices(answers): Array<any> {
      const isReactNative = answers.ui === "@curi/react-native";
      return [
        {
          name: `automatically scroll if the new location has a hash`,
          value: "@curi/side-effect-scroll",
          disabled: !isReactNative
        },
        {
          name: `set the document's title`,
          value: "@curi/side-effect-title",
          disabled: !isReactNative
        },
        {
          name: `announce navigation to screen reader users`,
          value: "@curi/side-effect-aria-live",
          disabled: !isReactNative,
          checked: true
        }
      ];
    },
    when(answers) {
      return answers.ui !== "@curi/react-native";
    },
    pageSize: 3
  },
  {
    type: "confirm",
    name: "static",
    message: "Do you want to use @curi/static to render static HTML pages?",
    default: false,
    when(answers) {
      return answers.ui !== "@curi/react-native";
    }
  },
  {
    type: "checkbox",
    name: "history",
    message: "Where will you be running the application?",
    choices(answers): Array<any> {
      let shouldUseBrowser = false;
      let shouldUseMemory = false;

      if (
        answers.ui === "@curi/react-dom" ||
        answers.ui === "@curi/vue" ||
        answers.ui === "@curi/svelte"
      ) {
        shouldUseBrowser = true;
      }

      if (answers.ui === "@curi/react-native" || answers.static) {
        shouldUseMemory = true;
      }

      return [
        {
          name: `In the browser, with a server that can handle dynamic requests`,
          value: "@hickory/browser",
          checked: shouldUseBrowser
        },
        {
          name: `Outside of a browser (this includes server-side rendering, testing, and React Native)`,
          value: "@hickory/in-memory",
          checked: shouldUseMemory
        },
        {
          name: `In the browser, WITHOUT a server that can handle dynamic requests`,
          value: "@hickory/hash"
        }
      ];
    },
    pageSize: 5,
    validate(value) {
      return value.length >= 1;
    }
  }
];

export default questions;
