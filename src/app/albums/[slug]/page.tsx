import { notFound } from "next/navigation";
import Link from "next/link";
import { albums } from "@/app/data/albums";
import { getSpotifyAlbumId } from "@/app/lib/spotify";
import SpotifyEmbed from "@/app/components/SpotifyEmbed";

interface AlbumPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: AlbumPageProps) {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  
  if (!album) {
    return {
      title: "Album Not Found",
      description: "The requested album could not be found.",
    };
  }

  return {
    title: `${album.title} • Mark Z80`,
    description: `Listen to ${album.title} by Mark Z80`,
    openGraph: {
      title: `${album.title} • Mark Z80`,
      description: `Listen to ${album.title} by Mark Z80`,
      images: [
        {
          url: album.coverUrl,
          width: 400,
          height: 400,
          alt: `${album.title} album cover`,
        },
      ],
    },
  };
}

export default async function AlbumPage({ params }: AlbumPageProps) {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);
  
  if (!album) {
    notFound();
  }

  const albumId = getSpotifyAlbumId(album.spotifyUrl);

  return (
    <main className="min-h-screen bg-black text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Link */}
        <Link 
          href="/#albums" 
          className="inline-flex items-center text-neutral-400 hover:text-white transition mb-8"
        >
          ← Back to Albums
        </Link>

        {/* Album Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Cover Image */}
          <div className="aspect-square rounded-xl overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${album.coverUrl}')` }}
              role="img"
              aria-label={`Album cover for ${album.title}`}
            />
          </div>

          {/* Album Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{album.title}</h1>
            <p className="text-xl text-neutral-400 mb-6">{album.year}</p>
            
            {/* External Links */}
            <div className="flex flex-wrap gap-4">
              {album.spotifyUrl && (
                <a
                  href={album.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Spotify
                </a>
              )}
              {album.appleUrl && (
                <a
                  href={album.appleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition"
                >
                  Apple Music
                </a>
              )}
              {album.youtubeUrl && (
                <a
                  href={album.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  YouTube
                </a>
              )}
              {album.bandcampUrl && (
                <a
                  href={album.bandcampUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Bandcamp
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Spotify Player */}
        {albumId ? (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Listen</h2>
            <SpotifyEmbed albumId={albumId} />
          </div>
        ) : (
          <div className="mb-8 p-8 bg-neutral-900 rounded-xl border border-neutral-800">
            <h2 className="text-2xl font-semibold mb-4">Listen</h2>
            <p className="text-neutral-400">
              Spotify player not available for this album. Please use the streaming links above to listen.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
