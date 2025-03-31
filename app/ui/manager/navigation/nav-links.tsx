'use client';

import {
  UserGroupIcon,
  HomeIcon,
  MapIcon,
  MapPinIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Start', href: '/manager', icon: HomeIcon },
    { name: 'Suche', href: '/search', icon: MagnifyingGlassIcon },
    { name: 'Adressen', href: '/manager/adresses', icon: MapPinIcon },
    { name: 'Kataster', href: '/manager/cataster', icon: MapIcon },
    { name: 'Benutzer', href: '/manager/user', icon: UserGroupIcon }
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md transition bg-gray-50 dark:bg-gray-900 p-3 text-sm font-medium hover:bg-sky-100 dark:hover:bg-sky-950 hover:text-blue-600 dark:hover:text-blue-400 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600 dark:text-blue-400' : pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }