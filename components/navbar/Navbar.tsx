import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "..";

const navItems = [
	{ path: "/about", text: "About" },
	{ path: "/pricing", text: "Pricing" },
	{ path: "/contact", text: "Contact" },
];

export const Navbar = async () => {
	return (
		<nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
			<Link className="flex items-center" href={"/"}>
				<HomeIcon className="mr-2" />
				Home
			</Link>
			<div className="flex flex-1"></div>

			{navItems.map((navItem) => (
				<ActiveLink key={navItem.text} {...navItem} />
			))}
		</nav>
	);
};
