import path from "path";
import * as fs from "fs-extra";

import { CuriConfig } from "../types";

export default function setupProjectFiles(config: CuriConfig) {
  const { dir, router, routes, components } = config.source;
  const src = path.join(process.cwd(), dir);
  const routerSrc = path.join(src, router);
  const routeSrc = path.join(src, routes);
  const componentDir = path.join(src, components);

  fs.ensureDirSync(src);
  fs.ensureFileSync(routerSrc);
  fs.ensureFileSync(routeSrc);
  fs.ensureDirSync(componentDir);
}
