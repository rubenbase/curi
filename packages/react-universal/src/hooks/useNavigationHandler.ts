import React from "react";
import useCuri from "./useCuri";

import { RouteLocation } from "@curi/router";
import { NavigatingChildren } from "../types";

export interface NavigationHookProps<T extends React.SyntheticEvent>
  extends RouteLocation {
  children: NavigatingChildren | React.ReactNode;
  onNav?: (e: T) => void;
  forward?: object;
}

function defaultCanNavigate() {
  return true;
}

export type CanNavigate<T> = (e: T, forward?: object) => boolean;

export default function useNavigationHandler<T extends React.SyntheticEvent>(
  props: NavigationHookProps<T>,
  setNavigating: (n: boolean) => void,
  canNavigate: CanNavigate<T> = defaultCanNavigate
) {
  const { router } = useCuri();
  const cancel = React.useRef(undefined);

  function handler(event: T) {
    if (props.onNav) {
      props.onNav(event);
    }

    if (canNavigate(event, props.forward)) {
      event.preventDefault();

      let cancelled, finished;
      // only trigger re-renders when children uses state
      if (typeof props.children === "function") {
        cancelled = finished = () => {
          // @ts-ignore
          cancel.current = undefined;
          setNavigating(false);
        };
        setNavigating(true);
      }
      // @ts-ignore
      cancel.current = router.navigate({
        name: props.name,
        params: props.params,
        query: props.query,
        state: props.state,
        hash: props.hash,
        cancelled,
        finished
      });
    }
  }
  return { handler, cancel };
}
