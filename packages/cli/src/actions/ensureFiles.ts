import path from "path";
import * as fs from "fs-extra";

import createRouterFile from "./createRouterFile";
import createRoutesFile from "./createRoutesFile";

import { CuriConfig, CuriDependencies } from "../types";

export default async function setupProjectFiles(
  config: CuriConfig,
  deps: CuriDependencies
) {
  const { root, src, components } = config.files;
  const srcDir = path.join(root, src);
  const componentDir = path.join(srcDir, components);

  await fs.ensureDir(src);
  await createRouterFile(config, deps);
  await createRoutesFile(config);
  await fs.ensureDir(componentDir);
}
