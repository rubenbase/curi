import path from "path";

import { writeConfig } from "../config";
import packagePrompts from "../prompts/packages";
import structurePrompts from "../prompts/structure";
import installDependencies from "../actions/installDependencies";
import ensureFiles from "../actions/ensureFiles";
import hasPackageJSON from "../validate/packageJSON";

import { CuriConfig } from "../types";

export default async function create() {
  try {
    const inPackage = await hasPackageJSON();
    if (!inPackage) {
      console.error(
        `"curi create" only works in a valid package. Did you forget to call "npm init"?`
      );
      return;
    }

    const { deps, install } = await packagePrompts();
    const structure = await structurePrompts();

    const config: CuriConfig = {
      files: {
        root: structure.root,
        src: structure.src,
        router: structure.router,
        routes: structure.routes,
        components: structure.components
      },
      async: false
    };

    const output = path.join(process.cwd(), "curi.config.js");
    writeConfig(config, output);

    installDependencies(install.deps, install.devDeps);

    await ensureFiles(config, deps);
  } catch (e) {
    console.error(e);
  }
}
