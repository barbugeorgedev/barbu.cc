import NavItem from "@components/navbar/NavItem";

const Navbar = ({topMenu}) => {
    return (
        <div className="hidden sm:block">
          {topMenu.map((link) => (
                <NavItem menu={link} key={link.name}/>
          ))}
        </div>
    )
}


export default Navbar