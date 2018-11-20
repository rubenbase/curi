import path from "path";
import * as fs from "fs-extra";

import { CuriConfig } from "../types";

const routesContent = `import { prepareRoutes } from "@curi/router";

export default prepareRoutes([
]);
`;

export default async function createRoutesFile(config: CuriConfig) {
  const { root, src, routes } = config.files;
  const srcDir = path.join(root, src);
  const routesSrc = path.join(srcDir, routes);

  // use ensure file in case the file is in a dir that needs to be created
  await fs.ensureFile(routesSrc);
  fs.writeFile(routesSrc, routesContent);
}
