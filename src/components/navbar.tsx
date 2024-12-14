import { navbarData, NavbarItemI } from "../data/navbar";

export function Navbar(){
    return (
        <nav>
            {
                navbarData.map(
                    (item) => <NavbarItem key={item.label} {...item} />                    
                )
            }
        </nav>
    );
}

function NavbarItem(props: NavbarItemI){
    return (
        <div>
            <a href={props.link}>
                {props.label}
            </a>
        </div>
    )
}