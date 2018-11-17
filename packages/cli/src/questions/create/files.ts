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
    message: "Source code directory (relative to current location)"
  },
  {
    type: "input",
    name: "routes",
    default: "routes.js",
    message: "Route module filename"
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
    message: "Route components location"
  }
];

export default questions;
