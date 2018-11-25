import React from "react";
import { RouteLocation } from "@curi/router";
export declare type NavigatingChildren = (navigating: boolean) => React.ReactNode;
export interface LinkProps extends RouteLocation {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    anchor?: React.ReactType;
    children: NavigatingChildren | React.ReactNode;
    forward: React.AnchorHTMLAttributes<HTMLAnchorElement>;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<any>>>;
export default _default;
