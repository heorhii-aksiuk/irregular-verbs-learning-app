import Link from 'next/link';

interface Page {
  id: number;
  path: string;
  title: string;
}

const pages: Page[] = [
  {
    id: 1,
    path: '/',
    title: 'Test',
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
  return (
    <header className="bg-gray-400 h-12 flex justify-center items-center">
      <div className="flex">
        <p className="mr-6">
          <Link href={pages[0].path}>Irregular verbs learning app</Link>
        </p>
        <nav>
          <ul className="flex">
            {pages.map((page) => (
              <li key={page.id} className="mr-6">
                <Link className="hover:text-blue-600" href={page.path}>
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
