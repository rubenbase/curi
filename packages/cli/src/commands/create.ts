import path from "path";

import { writeConfig } from "../config";
import packagePrompts from "../prompts/packages";
import structurePrompts from "../prompts/structure";
import installDependencies from "../actions/installDependencies";
import ensureFiles from "../actions/ensureFiles";

import { CuriConfig } from "../types";

export default async function create() {
  try {
    const { deps, devDeps } = await packagePrompts();
    const structure = await structurePrompts();

    const config: CuriConfig = {
      source: {
        dir: structure.dir,
        router: structure.router,
        routes: structure.routes,
        components: structure.components
      }
    };

    const output = path.join(process.cwd(), "curi.config.js");
    writeConfig(config, output);

    installDependencies(deps, devDeps);

    ensureFiles(config);
  } catch (e) {
    console.error(e);
  }
}
