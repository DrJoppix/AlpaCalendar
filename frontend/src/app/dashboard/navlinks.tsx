'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from "@iconify/react";
// Icons.
import NotebookRegular from "@iconify-icons/fluent/notebook-32-regular";
import NotebookFilled from "@iconify-icons/fluent/notebook-32-filled";
import HomeRegular from "@iconify-icons/fluent/home-32-regular";
import HomeFilled from "@iconify-icons/fluent/home-32-filled";
import PersonRegular from "@iconify-icons/fluent/person-32-regular";
import PersonFilled from "@iconify-icons/fluent/person-32-filled";

const links = [
    {
        name: 'Notebook',
        href: '/dashboard/notebook',
        icon: NotebookRegular,
        iconfilled: NotebookFilled
    },
    {
        name: 'Home',
        href: '/dashboard',
        icon: HomeRegular,
        iconfilled: HomeFilled
    },
    {
        name: 'Profile',
        href: '/dashboard/profile',
        icon: PersonRegular, iconfilled: PersonFilled
    },
];

/**
 * A set of links to various parts of the dashboard.
 *
 * It renders all the links in the `links` array as a grid of 3 columns.
 * The links are colored white, and the active link is highlighted in pink.
 *
 * @returns A React component that renders a set of links to various parts of the dashboard.
 */
export default function NavLinks() {
    const pathname = usePathname();
    return (
        <div className="grid grid-cols-3 gap-4 content-evenly justify-center justify-items-center">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={clsx("text-white hover:text-pink-600", pathname === link.href && "text-pink-900")}
                >
                    <Icon icon={pathname === link.href ? link.iconfilled : link.icon} className="w-12 sm:w-16 h-12 sm:h-16" />
                </Link>
            ))}
        </div>
    );
}