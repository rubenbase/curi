import path from "path";
import * as fs from "fs-extra";

import { CuriConfig, CuriDependencies } from "../types";

function mapHistoryName(history: string) {
  switch (history) {
    case "@hickory/browser":
      return "Browser";
    case "@hickory/hash":
      return "Hash";
    case "@hickory/in-memory":
      return "InMemory";
    default:
      return "H"; // this should never happen
  }
}

function mapInteractionName(interaction: string) {
  switch (interaction) {
    case "@curi/route-active":
      return "active";
    case "@curi/route-ancestors":
      return "ancestors";
    case "@curi/route-prefetch":
      return "prefetch";
    default:
      return "unknown";
  }
}

function mapSideEffectName(interaction: string) {
  switch (interaction) {
    case "@curi/side-effect-aria-live":
      return "ariaLive";
    case "@curi/side-effect-scroll":
      return "scroll";
    case "@curi/side-effect-title":
      return "title";
    default:
      return "unknown";
  }
}

function plainRouter() {
  return `export default curi(history, routes);`;
}

function routerWithDeps(
  interactions: Array<string>,
  sideEffects: Array<string>
) {
  let opts = [];

  if (interactions.length) {
    opts.push(`interactions: [${interactions.join(", ")}]`);
  }

  if (sideEffects.length) {
    opts.push(`sideEffects: [${sideEffects.join(", ")}]`);
  }

  return `export default curi(history, routes, {
  ${opts.join(",\n  ")}
});`;
}

function generateRouterModule(routes: string, deps: CuriDependencies) {
  const historyImport = mapHistoryName(deps.history);
  let importStatements: Array<string> = [];

  let interactionImports: Array<string> = [];
  let interactionCreates: Array<string> = [];
  if (deps.interactions.length) {
    deps.interactions.forEach(i => {
      const name = mapInteractionName(i);
      interactionImports.push(`import ${name} from "${i}";`);
      interactionCreates.push(`${name}()`);
    });
    importStatements = importStatements.concat(interactionImports);
  }

  let sideEffectImports: Array<string> = [];
  let sideEffectCreates: Array<string> = [];
  if (deps.sideEffects.length) {
    deps.sideEffects.forEach(s => {
      const name = mapSideEffectName(s);
      sideEffectImports.push(`import ${name} from "${s}";`);
      sideEffectCreates.push(`${name}()`);
    });
    importStatements = importStatements.concat(sideEffectImports);
  }

  const imports = importStatements.join("\n");

  return `import { curi } from "@curi/router";
import ${historyImport} from "${deps.history}";
${imports + "\n" || ""}
import routes from "${routes}";

const history = ${historyImport}();

${
    deps.interactions.length || deps.sideEffects.length
      ? routerWithDeps(interactionCreates, sideEffectCreates)
      : plainRouter()
  }
`;
}

export default async function createRouterFile(
  config: CuriConfig,
  deps: CuriDependencies
) {
  const { root, src, router, routes } = config.files;
  const srcDir = path.join(root, src);
  const routerSrc = path.join(srcDir, router);
  const routerDir = path.dirname(routerSrc);
  const routesSrc = path.join(srcDir, routes);
  let relativeRoutes = path.relative(routerDir, routesSrc);

  if (relativeRoutes.charAt(0) !== ".") {
    relativeRoutes = `./${relativeRoutes}`;
  }

  // use ensure file in case the file is in a dir that needs to be created
  await fs.ensureFile(routerSrc);
  const routerCode = generateRouterModule(relativeRoutes, deps);
  return fs.writeFile(routerSrc, routerCode);
}
