export interface NavbarItemI {
    label: string;
    link: string | undefined;
    external: boolean;
}
export const navbarData = [
    {
        label: "home",
        link: "#home",
        external: false,
    },
    {
        label: "collection",
        link: "#collection",
        external: false,
    },
    {
        label: "about",
        link: "#about",
        external: false,
    },
    {
        label: "contact",
        link: "#contact",
        external: false,
   },
] satisfies Array<NavbarItemI>;
