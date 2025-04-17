import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-4 px-6 bg-slate-700 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl font-playfair italic">
            Luna
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/progress" className="text-slate-300 hover:text-white">
                Progress
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-300 hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 