import React from "react";
import ReactDOM from "react-dom";
import { curi } from "@curi/router";
import Browser from "@hickory/browser";
import { curiProvider } from "@curi/react-dom";

import routes from "./routes";

const history = Browser();
const router = curi(history, routes);
const Router = curiProvider(router);

ReactDOM.render(
  <Router>
    {({ response }) => {
      const { Main, Menu } = response.body;
      return (
        <div>
          {Menu ? <Menu /> : null}
          {Main ? <Main params={response.params} /> : null}
        </div>
      );
    }}
  </Router>,
  document.getElementById("root")
);
