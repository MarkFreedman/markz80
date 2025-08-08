import Link from "next/link";
import type { Album } from "../data/albums";

interface AlbumCardProps {
  album: Album;
}

export default function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition group">
      {/* Album Cover and Title - Internal Link */}
      <Link href={`/albums/${album.slug}`} className="block">
        <div className="aspect-square rounded-t-xl overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${album.coverUrl}')` }}
            role="img"
            aria-label={`Album cover for ${album.title}`}
          />
        </div>
        
        {/* Album Info */}
        <div className="p-4">
          <h3 className="font-semibold text-white group-hover:text-neutral-200 transition">
            {album.title}
          </h3>
          <p className="text-sm text-neutral-400 mt-1">{album.year}</p>
        </div>
      </Link>
      
      {/* External Streaming Links */}
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-2">
          {album.spotifyUrl && (
            <a
              href={album.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-white transition"
            >
              Spotify
            </a>
          )}
          {album.appleUrl && (
            <a
              href={album.appleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-white transition"
            >
              Apple
            </a>
          )}
          {album.youtubeUrl && (
            <a
              href={album.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-white transition"
            >
              YouTube
            </a>
          )}
          {album.bandcampUrl && (
            <a
              href={album.bandcampUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-white transition"
            >
              Bandcamp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
