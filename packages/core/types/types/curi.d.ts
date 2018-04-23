import { History, HickoryLocation, Action } from "@hickory/root";
import { PathFunctionOptions } from "path-to-regexp";
import { Interaction, Interactions } from "./interaction";
import { RouteDescriptor } from "./route";
import { Response } from "./response";
export interface Navigation {
    action: Action;
    previous: Response | null;
}
export interface Emitted {
    response: Response;
    navigation: Navigation;
    router: CuriRouter;
}
export declare type ResponseHandler = (props?: Emitted) => void;
export interface RespondOptions {
    observe?: boolean;
    initial?: boolean;
}
export declare type RemoveResponseHandler = () => void;
export interface SideEffect {
    fn: ResponseHandler;
    after?: boolean;
}
export interface Cache {
    set: (response: Response) => void;
    get: (location: HickoryLocation) => Response;
}
export interface RouterOptions {
    route?: Array<Interaction>;
    sideEffects?: Array<SideEffect>;
    cache?: Cache;
    pathnameOptions?: PathFunctionOptions;
    emitRedirects?: boolean;
}
export interface CurrentResponse {
    response: Response | null;
    navigation: Navigation | null;
}
export interface CuriRouter {
    replaceRoutes: (routeArray: Array<RouteDescriptor>) => void;
    respond: (fn: ResponseHandler, options?: RespondOptions) => RemoveResponseHandler | void;
    route: Interactions;
    history: History;
    current(): CurrentResponse;
}
