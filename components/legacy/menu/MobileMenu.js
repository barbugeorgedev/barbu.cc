import { bool, object } from "prop-types";

import cn from "classnames";
import styles from "@styles/mobile-menu.module.css";

import MenuItem from './MenuItem';

export default function MobileMenu({ style }) {
  const menuLinks = [
    { id: "0", href: "/", text: "Home", transitionDelay: "150" },
    { id: "1", href: "/about", text: "About", transitionDelay: "200" },
    { id: "2", href: "/blog", text: "Blog", transitionDelay: "250" },
    { id: "3", href: "/projects", text: "Projects", transitionDelay: "300" },
  ];


  return (
    <nav>
        <ul
          style={style}
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-slate-100 dark:bg-slate-900",
            styles.menuRendered
          )}>
          {menuLinks.map((l) => (
            <MenuItem
              href={l.href}
              text={l.text}
              delay={l.transitionDelay}
              key={l.id}
            />
          ))}
        </ul>
    </nav>
  );
}

MobileMenu.defaultProps = {
  style: {},
};

MobileMenu.propTypes = {
  style: object,
};
