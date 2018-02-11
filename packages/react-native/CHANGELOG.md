## 1.0.0-beta.2

* Add `method` prop to `<Link>` to specify which `history` navigation method to use for navigation. Options are `navigate`, `push`, and `replace` (defaults to `navigate`).

## 1.0.0-beta.1

* (Internal) `<CuriProvider>` uses `router.respond(fn, { observe: true })`.
* Use `react-broadcast` to simulate new context API. This removes the `<ResponsiveBase>` and `<CuriBase>` components in favor of a single `<CuriProvider>`. The `<Curious>` prop also now just expects a `children` render function prop.
* (Internal) Router's response handler receives `Emitted` object.

## 1.0.0-alpha.4

* Add a `<ResponsiveBase>` component. This is just a `<CuriBase>` wrapped in a `<Curious>`.
* `<Curious>` does not initially call response handler (prevents extra render).
* `<CuriBase render>` passes a single `CuriProps` object to the `render` function instead of three arguments.

## 1.0.0-alpha.3

* Switch from `action` to `navigation` (which contains an `action` as well as the previous `response`).
  * Make `navigation` a required prop of the `<CuriBase>` (`action` was optional).
  * `<Curious>` injects `navigation`, not `action`.
* `<Curious>` sets initial `response`/`action` when responsive.

## 1.0.0-alpha.2

* Use `@curi/react` `v1.0.0-beta.17`.

## 1.0.0-alpha.1

* Re-export `<Curious>`, not `curious()`.