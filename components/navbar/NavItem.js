import Link from "next/link";
import classNames from 'classnames'
import { useRouter } from "next/router";

import { string } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

export default function NavItem({ menu }) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        setIsActive(router.asPath === menu.href);
    }, []);

    return (

        <a
            className={`${classNames('horizontal-underline text-base', {
            'horizontal-underline-active': setIsActive,
            })}p-1 font-medium sm:p-2`}
            aria-label={menu.name}
            href={menu.href}
            target={`_${menu.target}`}
        >
            <span className="capsize font-bold tracking-wide text-gray-900 dark:text-gray-100">
            {menu.name}
            </span>
        </a>

    );
}
