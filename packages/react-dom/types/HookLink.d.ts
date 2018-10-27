import React from "react";
export declare type NavigatingChildren = (navigating: boolean) => React.ReactNode;
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
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<any>>>;
export default _default;
