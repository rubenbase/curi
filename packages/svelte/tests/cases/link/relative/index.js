import InMemory from "@hickory/in-memory";
import { curi, prepareRoutes } from "@curi/router";
import { curiStore } from "@curi/svelte";

import app from "./app.html";

const routes = prepareRoutes([
  { name: "Home", path: "" },
  { name: "User", path: "u/:id" },
  { name: "Not Found", path: "(.*)" }
]);

const history = InMemory({ locations: ["/u/2"] });
const router = curi(history, routes);
const store = curiStore(router);

export default function render() {
  const target = document.createElement("div");
  new app({ target, store });
  const a = target.querySelector("a");
  expect(a.getAttribute("href")).toBe("#is-a-band");
}
