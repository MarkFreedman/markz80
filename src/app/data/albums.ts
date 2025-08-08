export interface Album {
  slug: string;
  title: string;
  year: number;
  coverUrl: string;
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
  bandcampUrl?: string;
}

export const albums: Album[] = [
  {
    slug: "neon-dreams",
    title: "Neon Dreams",
    year: 2024,
    coverUrl: "/albums/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/example",
    appleUrl: "https://music.apple.com/album/example",
    youtubeUrl: "https://youtube.com/playlist?list=example",
    bandcampUrl: "https://markz80.bandcamp.com/album/neon-dreams",
  },
  {
    slug: "midnight-synthesis",
    title: "Midnight Synthesis",
    year: 2023,
    coverUrl: "/albums/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/example",
    appleUrl: "https://music.apple.com/album/example",
    bandcampUrl: "https://markz80.bandcamp.com/album/midnight-synthesis",
  },
  {
    slug: "echo-chamber",
    title: "Echo Chamber",
    year: 2022,
    coverUrl: "/albums/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/example",
    youtubeUrl: "https://youtube.com/playlist?list=example",
    bandcampUrl: "https://markz80.bandcamp.com/album/echo-chamber",
  },
  {
    slug: "digital-rain",
    title: "Digital Rain",
    year: 2021,
    coverUrl: "/albums/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/example",
    appleUrl: "https://music.apple.com/album/example",
    bandcampUrl: "https://markz80.bandcamp.com/album/digital-rain",
  },
  {
    slug: "static-waves",
    title: "Static Waves",
    year: 2020,
    coverUrl: "/albums/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/example",
    youtubeUrl: "https://youtube.com/playlist?list=example",
    bandcampUrl: "https://markz80.bandcamp.com/album/static-waves",
  },
  {
    slug: "ambient-pulse",
    title: "Ambient Pulse",
    year: 2019,
    coverUrl: "/albums/placeholder.svg",
    spotifyUrl: "https://open.spotify.com/album/example",
    appleUrl: "https://music.apple.com/album/example",
    bandcampUrl: "https://markz80.bandcamp.com/album/ambient-pulse",
  },
];
