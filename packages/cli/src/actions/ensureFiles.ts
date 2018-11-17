import path from "path";
import * as fs from "fs-extra";

import { CuriConfig } from "../types";

export default function setupProjectFiles(config: CuriConfig) {
  const { dir, routes, components } = config;
  const src = path.join(process.cwd(), dir);
  const routeSrc = path.join(src, routes);
  const componentSrc = path.join(src, components);

  fs.ensureDirSync(src);
  fs.ensureFileSync(routeSrc);
  fs.ensureDirSync(componentSrc);
}
