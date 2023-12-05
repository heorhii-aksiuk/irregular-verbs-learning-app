'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Page {
  id: number;
  path: string;
  title: string;
  scroll?: boolean;
}

const pages: Page[] = [
  {
    id: 1,
    path: '/',
    title: 'Test',
    scroll: false,
    //Does it work?
  },
  {
    id: 2,
    path: '/words',
    title: 'Words',
  },
  {
    id: 3,
    path: '/stat',
    title: 'Stat',
  },
];

export default function AppBar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 bg-gray-600 h-12 flex justify-center items-center border-b">
      <div className="flex">
        <p className="mr-6">
          <Link className="" href={pages[0].path} scroll={pages[0].scroll}>
            Irregular verbs learning app
          </Link>
        </p>
        <nav>
          <ul className="flex">
            {pages.map((page) => (
              <li className="mr-6" key={page.id}>
                <Link
                  className={`text-gray-300 hover:text-white ${
                    pathname === page.path && 'underline'
                  }`}
                  href={page.path}
                  scroll={page.scroll}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
