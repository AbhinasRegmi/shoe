import { navbarData, NavbarItemI } from "@/data/navbar";
import { Logo } from "@/components/logo";

export function Navbar() {
    return (
        <nav>
            <div>
                <Logo className="h-40" />
            </div>

            {
                navbarData.map(
                    (item) => <NavbarItem key={item.label} {...item} />
                )
            }
        </nav>
    );
}

function NavbarItem(props: NavbarItemI) {
    return (
        <div>
            <a href={props.link}>
                {props.label}
            </a>
        </div>
    )
}
