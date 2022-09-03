import DesktopNavbar from "@components/navbar/DesktopNavbar";
import CommandPalette from "@components/navbar/CommandPalette";
import ThemeSwitch from "@components/navbar/ThemeSwitch";
import MobileNav from "@components/navbar/MobileNav";
import { useQuery } from "@apollo/client";
import {QUERY_MENUS} from "@graphql/queries/menus";

const Navbar = () => {
        const { data, loading, error } = useQuery(QUERY_MENUS, { ssr: true });

        const topMenu = data?.menusMenus?.data.map((menus) => (
                menus?.attributes?.items?.data.filter((menu) => (menu?.attributes?.parent?.data?.attributes?.title === 'TopMenu'))
            ));

        const searchMenu = data?.menusMenus?.data.map((menus) => (
            menus?.attributes?.items?.data.filter((menu) => (menu?.attributes?.parent?.data?.attributes?.title === 'SearchMenu'))
        ));

    return (
        <>
            <DesktopNavbar menu={topMenu} />
            <CommandPalette menu={searchMenu}/>
            <ThemeSwitch />
            <MobileNav menu={topMenu} />
        </>
    )
}


export default Navbar