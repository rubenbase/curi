import React from "react";
import { RouteLocation } from "@curi/router";
import { NavigatingChildren } from "../types";
export interface NavigationHookProps<T extends React.SyntheticEvent> extends RouteLocation {
    children: NavigatingChildren | React.ReactNode;
    onNav?: (e: T) => void;
    forward?: object;
}
export declare type CanNavigate<T> = (e: T, forward?: object) => boolean;
export default function useNavigationHandler<T extends React.SyntheticEvent>(props: NavigationHookProps<T>, setNavigating: (n: boolean) => void, canNavigate?: CanNavigate<T>): {
    handler: (event: T) => void;
    cancel: React.RefObject<any>;
};
