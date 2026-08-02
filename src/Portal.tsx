"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
	children: ReactNode;
	element?: HTMLElement;
};

export const Portal = ({ children, element }: PortalProps) => {
	if (typeof document === "undefined") return null;

	return createPortal(children, element || document.body);
};
