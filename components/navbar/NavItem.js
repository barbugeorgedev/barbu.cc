import Link from "next/link";
import { useRouter } from "next/router";

import { string } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

export default function NavItem({ menu }) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        setIsActive(router.asPath === menu.link);
    }, []);

    return (
        <Link href={menu.link}
              target={menu.target}
              scroll={false}>
            <a
                className={`${
                    isActive
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-600 dark:text-gray-300"
                } p-1 font-medium dark:text-gray-100 sm:p-4`}>
                <span className="capsize">{menu.name}</span>
            </a>
        </Link>
    );
}
