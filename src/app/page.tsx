import Hero from "./components/Hero";
import AlbumCard from "./components/AlbumCard";
import { albums } from "./data/albums";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />

      {/* Albums */}
      <section id="albums" className="scroll-mt-24 px-6 py-20 border-t border-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold">Albums</h2>
          <p className="mt-2 text-neutral-400">
            We&apos;ll drop real covers and embeds here next.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <AlbumCard key={album.slug} album={album} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact placeholder */}
      <section id="contact" className="scroll-mt-24 px-6 py-20 border-t border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-2 text-neutral-400">
            For licensing, collaborations, and press.
          </p>
          <a
            href="mailto:booking@markz80.com"
            className="inline-block mt-6 rounded-lg bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Email booking@markz80.com
          </a>
        </div>
      </section>

      <footer className="px-6 py-10 border-t border-neutral-900 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Mark Z80. All rights reserved.
      </footer>
    </main>
  );
}
