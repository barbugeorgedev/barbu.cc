import Link from "next/link";
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
            className={`${
                isActive
                    ? "text-gray-900 dark:text-gray-100"
                    : "text-gray-600 dark:text-gray-300"
            } p-1 font-medium sm:p-4`}
            href={menu.href}
            target={`_${menu.target}`}
        >
            <span className="capsize">{menu.name}</span>
        </a>
    );
}
