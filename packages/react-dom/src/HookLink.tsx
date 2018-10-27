import React from "react";
import { useCuri } from "@curi/react-universal";
import useHref from "./hooks/useHref";
import useClickHandler from "./hooks/useClickHandler";
import shallowEqual from "shallowequal";

export type NavigatingChildren = (navigating: boolean) => React.ReactNode;

export interface LinkProps {
  name?: string;
  params?: object;
  hash?: string;
  query?: any;
  state?: any;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  anchor?: React.ReactType;
  children: NavigatingChildren | React.ReactNode;
  forward: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}

const HookLink = React.forwardRef((props: LinkProps, ref: React.Ref<any>) => {
  const { router } = useCuri();
  const [navigating, setNavigating] = React.useState(false);
  const href = useHref(router, props);
  const mounted = React.useRef(true);
  const click = useClickHandler(router, props, setNavigating, mounted);
  React.useEffect(() => {
    return () => {
      // @ts-ignore
      mounted.current = false;
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

// @ts-ignore
export default React.memo(HookLink, propCompare);
