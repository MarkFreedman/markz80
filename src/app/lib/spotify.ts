export function getSpotifyAlbumId(spotifyUrl: string | null | undefined): string | null {
  if (!spotifyUrl) return null;
  
  const match = spotifyUrl.match(/open\.spotify\.com\/album\/([a-zA-Z0-9]+)/);
  return match ? match[1] : null;
}
