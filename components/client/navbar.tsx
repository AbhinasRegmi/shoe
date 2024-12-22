import { navbarData, NavbarIconDataI, NavbarLinkDataI } from "@/data/client/navbar";
import { Logo } from "./logo";
import Link from "next/link";

export function Navbar() {
	return (
		<nav className="container mx-auto">
			<div>
				<Logo />
			</div>
			<div>
				{
					navbarData.links.map(
						i => (<NavbarLinkItem key={i.label} {...i} />)
					)
				}
			</div>
			<div>
				{
					navbarData.icons.map(
						i => (<NavbarIconItem key={i.label} {...i} />)
					)
				}
			</div>
		</nav>
	)
}

function NavbarLinkItem(props: NavbarLinkDataI) {
	return (
		<Link href={props.link} className="capitalize">
			{props.label}
		</Link>
	)
}

function NavbarIconItem(props: NavbarIconDataI) {
	return (
		<Link href={props.link ?? ""}>
			{props.item}
		</Link>
	);
}
