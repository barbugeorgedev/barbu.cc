import NavItem from "@components/navbar/NavItem";

const DesktopNavbar = ({menu}) => {
    return (
        <div className="hidden sm:block">
          { menu?.map((menuItem) => (
                menuItem?.map((link) => (
                    <NavItem menu={link} key={link?.attributes?.title}/>
                ))
          ))}
        </div>
    )
}


export default DesktopNavbar