import path from "path";
import { prompt } from "inquirer";

import { writeConfig } from "../config";
import dependencyQuestions from "../questions/create/deps";
import fileQuestions from "../questions/create/files";
import installDependencies from "../actions/installDependencies";
import ensureFiles from "../actions/ensureFiles";

import { CuriConfig } from "../types";
import { DependencyAnswers } from "../questions/create/deps";
import { FileAnswers } from "../questions/create/files";

type Answers = DependencyAnswers & FileAnswers;

export default function create() {
  return prompt([...dependencyQuestions, ...fileQuestions]).then(
    (answers: Answers) => {
      installDependencies({
        ui: answers.ui,
        history: answers.history,
        interactions: answers.interactions,
        sideEffects: answers.sideEffects,
        static: answers.static
      });

      const config: CuriConfig = {
        dir: answers.dir,
        routes: answers.routes,
        components: answers.components
      };

      const output = path.join(process.cwd(), "curi.config.js");
      writeConfig(config, output);

      ensureFiles(config);
    }
  );
}
