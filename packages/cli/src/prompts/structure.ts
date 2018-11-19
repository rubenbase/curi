import { prompt } from "inquirer";

import fileQuestions from "../questions/create/files";

export default async function structurePrompts() {
  console.log("\nFiles\n");
  return await prompt(fileQuestions);
}
