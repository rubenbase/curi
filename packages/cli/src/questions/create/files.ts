import path from "path";
import * as fs from "fs-extra";

import { Questions } from "inquirer";

export interface FileAnswers {
  dir: string;
  routes: string;
  components: string;
}

const here = process.cwd();

const questions: Questions = [
  {
    type: "input",
    name: "dir",
    default: "src",
    message:
      "What directory is your source code in (relative to current location)?"
  },
  {
    type: "input",
    name: "router",
    default: "router.js",
    message:
      "The router is created in its own module. What should the module be called?"
  },
  {
    type: "confirm",
    name: "overwriteRouter",
    default: false,
    message: "A router file already exists. Do you want to overwrite it?",
    when(answers) {
      const routesFile = path.join(here, answers.dir, answers.router);
      return fs.existsSync(routesFile);
    }
  },
  {
    type: "input",
    name: "routes",
    default: "routes.js",
    message:
      "Routes are created in their own module. What should the module be called?"
  },
  {
    type: "confirm",
    name: "overwriteRoutes",
    default: false,
    message: "A routes file already exists. Do you want to overwrite it?",
    when(answers) {
      const routesFile = path.join(here, answers.dir, answers.routes);
      return fs.existsSync(routesFile);
    }
  },
  {
    type: "input",
    name: "components",
    default: "components/routes",
    message: "Where should route components be created?"
  }
];

export default questions;
