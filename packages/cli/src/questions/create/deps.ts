import { Questions } from "inquirer";

export interface UIAnswers {
  ui: string;
}

export interface InteractionAnswers {
  active: boolean;
  ancestors: boolean;
  prefetch: boolean;
}

export interface SideEffectAnswers {
  ariaLive: boolean;
  scroll: boolean;
  title: boolean;
}

export interface HistoryAnswers {
  testing: boolean;
  ssr: boolean;
}

export const uiQuestions: Questions<UIAnswers> = [
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
  }
];

export const interactionQuestions: Questions<InteractionAnswers> = [
  {
    type: "confirm",
    name: "active",
    message: 'Do you need to detect when a route is "active"?',
    default: false
  },
  {
    type: "confirm",
    name: "ancestors",
    message:
      "Do you need to determine a route's ancestors (e.g. for breadcrumbs)?",
    default: false
  },
  {
    type: "confirm",
    name: "prefetch",
    message: "Do you need to prefetch data for a route?",
    default: false
  }
];

export const sideEffectQuestions: Questions<SideEffectAnswers> = [
  {
    type: "confirm",
    name: "ariaLive",
    message: "Should your app announce navigation to screen reader users?",
    default: true
  },
  {
    type: "confirm",
    name: "scroll",
    message:
      "Should your app automatically scroll when navigating to a location with a hash?",
    default: true
  },
  {
    type: "confirm",
    name: "title",
    message: "Should your app set the document's title after navigating?",
    default: true
  }
];

export const webHistoryQuestions: Questions<HistoryAnswers> = [
  {
    type: "confirm",
    name: "testing",
    message:
      "Will you be writing tests for the application that will run in Node (e.g. with Jest)?"
  },
  {
    type: "confirm",
    name: "ssr",
    message:
      "Will you be using server-side rendering or static site generation?"
  }
];
