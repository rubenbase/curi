import React from "react";
import { LinkProps } from "../HookLink";
export default function useClickHandler(props: LinkProps, setNavigating: (n: boolean) => void): {
    click: (event: React.MouseEvent<HTMLElement>) => void;
    cancel: React.RefObject<any>;
};
