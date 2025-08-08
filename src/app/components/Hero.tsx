export default function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.svg')" }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
          Mark Z80
        </h1>
        <p className="mt-5 text-lg text-neutral-200">
          Cinematic alt-pop rock, ambient, and new-age. Producer. Composer.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#albums"
            className="rounded-lg bg-white text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Listen to Albums
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-neutral-300 text-white px-5 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
          >
            Contact / Licensing
          </a>
        </div>
      </div>
    </section>
  );
}
