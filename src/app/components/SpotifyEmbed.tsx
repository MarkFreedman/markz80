interface SpotifyEmbedProps {
  albumId: string;
}

export default function SpotifyEmbed({ albumId }: SpotifyEmbedProps) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden">
      <iframe
        src={`https://open.spotify.com/embed/album/${albumId}`}
        width="100%"
        height="100%"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        title="Spotify Album Player"
      />
    </div>
  );
}
