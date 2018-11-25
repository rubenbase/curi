import React from "react";
import { useCuri } from "@curi/react-universal";
import { canNavigate } from "../utils";

import { LinkProps } from "../HookLink";

export default function useClickHandler(
  props: LinkProps,
  setNavigating: (n: boolean) => void
) {
  const { router } = useCuri();
  const cancel = React.useRef(undefined);
  function click(event: React.MouseEvent<HTMLElement>) {
    if (props.onClick) {
      props.onClick(event);
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
  return { click, cancel };
}
