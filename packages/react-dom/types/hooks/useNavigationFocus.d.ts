import React from "react";
export interface FocusHookProps {
    preventScroll?: boolean;
    preserve?: boolean;
}
export default function useNavigationFocus(ref: React.RefObject<HTMLElement | null>, props?: FocusHookProps): void;
