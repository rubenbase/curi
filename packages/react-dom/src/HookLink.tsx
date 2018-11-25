import React from "react";
import { useHref } from "@curi/react-universal";
import useClickHandler from "./hooks/useClickHandler";
import shallowEqual from "shallowequal";

import { RouteLocation } from "@curi/router";

export type NavigatingChildren = (navigating: boolean) => React.ReactNode;

export interface LinkProps extends RouteLocation {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  anchor?: React.ReactType;
  children: NavigatingChildren | React.ReactNode;
  forward: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const HookLink = React.forwardRef((props: LinkProps, ref: React.Ref<any>) => {
  const [navigating, setNavigating] = React.useState(false);
  const href = useHref(props);
  const { click, cancel } = useClickHandler(props, setNavigating);
  React.useEffect(() => {
    return () => {
      if (cancel.current) {
        cancel.current();
      }
    };
  }, []);

  const { anchor: Anchor = "a", children, forward } = props;

  return (
    <Anchor onClick={click} href={href} ref={ref} {...forward}>
      {typeof children === "function"
        ? (children as NavigatingChildren)(navigating)
        : children}
    </Anchor>
  );
});

function propCompare(prevProps: LinkProps, nextProps: LinkProps) {
  return (
    prevProps.children === nextProps.children &&
    prevProps.name === nextProps.name &&
    prevProps.hash === nextProps.hash &&
    prevProps.query === nextProps.query &&
    prevProps.onClick === nextProps.onClick &&
    prevProps.anchor === nextProps.anchor &&
    shallowEqual(prevProps.params, nextProps.params) &&
    shallowEqual(prevProps.state, nextProps.state) &&
    shallowEqual(prevProps.forward, nextProps.forward)
  );
}

export default React.memo(HookLink, propCompare);
