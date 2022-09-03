import classNames from 'classnames'
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

export default function NavItem({ menu }) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);


    useEffect(() => {
        setIsActive(router.asPath === menu?.attributes?.url);
    }, []);

    return (

        <a
            className={`${classNames('horizontal-underline text-base', {
            'horizontal-underline-active': setIsActive,
            })}p-1 font-medium sm:p-2`}
            aria-label={menu?.attributes?.title}
            href={menu?.attributes?.url}
            target={`_${menu?.attributes?.target}`}
        >
            <span className="capsize font-bold tracking-wide text-gray-900 dark:text-gray-100">
            {menu?.attributes?.title}
            </span>
        </a>

    );
}
