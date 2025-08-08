import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white hover:text-neutral-300 transition">
          Mark Z80
        </Link>
        
        <div className="flex items-center space-x-8">
          <a
            href="#albums"
            className="text-neutral-300 hover:text-white transition"
          >
            Albums
          </a>
          <a
            href="#contact"
            className="text-neutral-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
