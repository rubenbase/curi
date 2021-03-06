import { Route, Interaction } from "@curi/router";

export default function getRouteAncestors(): Interaction {
  let routeAncestors: { [key: string]: Array<string> } = {};

  function get(name: string, level: number): string;
  function get(name: string): Array<string>;
  function get(name: string, level?: number) {
    const ancestors = routeAncestors[name];
    if (!ancestors) {
      return;
    }
    if (level == null) {
      return ancestors.slice();
    }
    if (level <= 0) {
      return;
    }
    return ancestors[level - 1];
  }

  return {
    name: "ancestors",
    register: (
      route: Route,
      parentRoutes: Array<string> = []
    ): Array<string> => {
      let { name } = route;
      routeAncestors[name] = parentRoutes;
      return [name, ...parentRoutes];
    },
    get,
    reset() {
      routeAncestors = {};
    }
  };
}
