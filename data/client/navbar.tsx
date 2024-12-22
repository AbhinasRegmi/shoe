import {
	Search,
	User
} from "lucide-react";
import { JSX } from "react/jsx-dev-runtime";

import { Cart } from "@/components/client/cart";


export interface NavbarLinkDataI {
	label: string;
	link: string;
}
export type NavbarIconDataI = {
	label: string;
	link?: string | undefined;
	item: JSX.Element;
};
export const navbarData = {
	links: [
		{
			label: "home",
			link: "/home"
		},
		{
			label: "shop",
			link: "/shop",
		},
	] satisfies NavbarLinkDataI[],
	icons: [
		{
			label: "search",
			item: <Search />,
		},
		{
			label: "cart",
			item: <Cart />
		},
		{
			label: "profile",
			link: "/profile",
			item: <User />,
		}
	] satisfies NavbarIconDataI[],
};

