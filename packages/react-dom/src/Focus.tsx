import React from "react";

import useFocus from "./hooks/useFocus";

import { ReactNode, Ref } from "react";
import { FocusHookProps } from "./hooks/useFocus";

export interface FocusProps extends FocusHookProps {
  children(ref: Ref<any>): ReactNode;
}

const Focus = (props: FocusProps) => {
  const ref = React.useRef(null);
  useFocus(ref, props);
  return props.children(ref);
};

export default Focus;
