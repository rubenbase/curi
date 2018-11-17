import spawn from "cross-spawn";
import dedent from "dedent";

import { DependencyAnswers } from "../questions/create/deps";

async function installRegularDependencies(deps: Array<string>) {
  try {
    await runInstallCommand("npm", ["install", "--save", ...deps]);
  } catch (e) {
    console.error(e);
  }
}

async function installDevDependencies(deps: Array<string>) {
  if (!deps.length) {
    return;
  }
  try {
    await runInstallCommand("npm", ["install", "--save-dev", ...deps]);
  } catch (e) {
    console.error(e);
  }
}

function runInstallCommand(command: string, args: Array<string>) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit" });
    child.on("close", exit => {
      if (exit !== 0) {
        reject(dedent`
          Install failed:
          ${command} ${args.join(" ")}
        `);
      } else {
        resolve();
      }
    });
  });
}

export default async function installDependencies(deps: DependencyAnswers) {
  const regDeps: Array<string> = ["@curi/router", "@curi/helpers"];
  const devDeps: Array<string> = [];

  if (deps.ui) {
    regDeps.push(deps.ui);
  }

  regDeps.push(...deps.history);
  regDeps.push(...deps.interactions);
  if (deps.sideEffects) {
    regDeps.push(...deps.sideEffects);
  }

  if (deps.static) {
    devDeps.push("@curi/static");
  }

  try {
    // can these safely be run concurrently?
    await installRegularDependencies(regDeps);
    await installDevDependencies(devDeps);
  } catch (e) {
    console.error(e);
    return;
  }
  console.log("Finished installing dependencies");
}
