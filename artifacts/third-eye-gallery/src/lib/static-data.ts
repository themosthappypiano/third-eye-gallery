export type StaticArtist = {
  id: string;
  name: string;
  slug: string;
  specialty: string;
  styles: string[];
  bio: string;
  instagram: string;
  bookingUrl?: string | null;
  imageUrl?: string | null;
};

export type StaticGalleryImage = {
  id: string;
  imageUrl: string;
  artistName: string;
  artistSlug: string;
  style: string;
  title?: string | null;
};

export type StaticArtPrint = {
  id: string;
  title: string;
  artistName: string;
  imageUrl: string;
  size?: string | null;
  price?: number | null;
  available: boolean;
};

export const STATIC_ARTISTS: StaticArtist[] = [
  {
    id: "1",
    name: "Zach Mathews",
    slug: "zach-mathews",
    specialty: "Custom & Cover-ups",
    styles: ["Custom", "Colour", "Cover-Ups"],
    bio: "Specializing in large scale custom work and seamless cover-ups.",
    instagram: "zachmathewstattoo",
    bookingUrl: "/booking",
    imageUrl: "/images/recent-hits/hit-4.jpg",
  },
  {
    id: "2",
    name: "Elle Latesha",
    slug: "elle-latesha",
    specialty: "Neo-Traditional",
    styles: ["Neo-Traditional", "Gothic", "Flash"],
    bio: "Bold lines and vibrant colors with a gothic twist.",
    instagram: "elle.tattoos",
    bookingUrl: "/booking",
    imageUrl: "/images/artists/latesha.jpg",
  },
  {
    id: "3",
    name: "Paloma Sanchez",
    slug: "paloma-sanchez",
    specialty: "Anime & Illustrative",
    styles: ["Anime", "Cover-Ups", "Custom", "Illustrative"],
    bio: "Bringing anime panels to life with pinpoint accuracy.",
    instagram: "paloma.ink",
    bookingUrl: "/booking",
    imageUrl: "/images/artists/paloma.jpg",
  },
  {
    id: "4",
    name: "Taylor (Rugido)",
    slug: "taylor-rugido",
    specialty: "Traditional",
    styles: ["Traditional", "Flash", "Colour"],
    bio: "American traditional that looks tough and lasts forever.",
    instagram: "rugido",
    bookingUrl: "/booking",
    imageUrl: "/images/artists/taylor.jpg",
  },
  {
    id: "5",
    name: "Freddie Trevino",
    slug: "freddie-trevino",
    specialty: "Tribute & Portrait",
    styles: ["Custom", "Portraits"],
    bio: "Hyper-realistic portraits and meaningful tribute pieces.",
    instagram: "freddietrevino",
    bookingUrl: "/booking",
    imageUrl: "/images/artists/freddie.jpg",
  },
  {
    id: "6",
    name: "Moses Veliz",
    slug: "moses-veliz",
    specialty: "Black & Grey Realism",
    styles: ["Custom", "Black & Grey", "Realism"],
    bio: "Specializing in dark realism and custom compositions with high contrast detail.",
    instagram: "mosesveliz",
    bookingUrl: "/booking",
    imageUrl: "/images/artists/moses.jpg",
  },
  {
    id: "7",
    name: "Roque Mendez",
    slug: "roque-mendez",
    specialty: "Fine Line & Script",
    styles: ["Fine Line", "Script", "Blackwork"],
    bio: "Clean line precision and elegant flow, tailored to every placement.",
    instagram: "roquemendez",
    bookingUrl: "/booking",
    imageUrl: "/images/artists/roque.jpg",
  },
];

export const STATIC_GALLERY_IMAGES: StaticGalleryImage[] = [
  {
    id: "1",
    imageUrl: "/images/gallery-user/g-1.jpg",
    artistName: "Zach Mathews",
    artistSlug: "zach-mathews",
    style: "Custom",
    title: "Recent Work 1",
  },
  {
    id: "2",
    imageUrl: "/images/gallery-user/g-2.jpg",
    artistName: "Elle Latesha",
    artistSlug: "elle-latesha",
    style: "Custom",
    title: "Recent Work 2",
  },
  {
    id: "3",
    imageUrl: "/images/gallery-user/g-3.jpg",
    artistName: "Paloma Sanchez",
    artistSlug: "paloma-sanchez",
    style: "Custom",
    title: "Recent Work 3",
  },
  {
    id: "4",
    imageUrl: "/images/gallery-user/g-4.jpg",
    artistName: "Taylor (Rugido)",
    artistSlug: "taylor-rugido",
    style: "Custom",
    title: "Recent Work 4",
  },
  {
    id: "5",
    imageUrl: "/images/gallery-user/g-5.jpg",
    artistName: "Freddie Trevino",
    artistSlug: "freddie-trevino",
    style: "Custom",
    title: "Recent Work 5",
  },
  {
    id: "6",
    imageUrl: "/images/gallery-user/g-6.jpg",
    artistName: "Moses Veliz",
    artistSlug: "moses-veliz",
    style: "Custom",
    title: "Recent Work 6",
  },
  {
    id: "7",
    imageUrl: "/images/gallery-user/g-7.jpg",
    artistName: "Roque Mendez",
    artistSlug: "roque-mendez",
    style: "Custom",
    title: "Recent Work 7",
  },
  {
    id: "8",
    imageUrl: "/images/gallery-user/g-8.jpg",
    artistName: "Zach Mathews",
    artistSlug: "zach-mathews",
    style: "Custom",
    title: "Recent Work 8",
  },
  {
    id: "9",
    imageUrl: "/images/gallery-user/g-9.jpg",
    artistName: "Elle Latesha",
    artistSlug: "elle-latesha",
    style: "Custom",
    title: "Recent Work 9",
  },
  {
    id: "10",
    imageUrl: "/images/gallery-user/g-10.jpg",
    artistName: "Paloma Sanchez",
    artistSlug: "paloma-sanchez",
    style: "Custom",
    title: "Recent Work 10",
  },
  {
    id: "11",
    imageUrl: "/images/gallery-user/g-11.jpg",
    artistName: "Taylor (Rugido)",
    artistSlug: "taylor-rugido",
    style: "Custom",
    title: "Recent Work 11",
  },
  {
    id: "12",
    imageUrl: "/images/gallery-user/g-12.jpg",
    artistName: "Freddie Trevino",
    artistSlug: "freddie-trevino",
    style: "Custom",
    title: "Recent Work 12",
  },
  {
    id: "13",
    imageUrl: "/images/gallery-user/g-13.jpg",
    artistName: "Moses Veliz",
    artistSlug: "moses-veliz",
    style: "Custom",
    title: "Recent Work 13",
  },
  {
    id: "14",
    imageUrl: "/images/gallery-user/g-14.jpg",
    artistName: "Roque Mendez",
    artistSlug: "roque-mendez",
    style: "Custom",
    title: "Recent Work 14",
  },
  {
    id: "15",
    imageUrl: "/images/gallery-user/g-15.jpg",
    artistName: "Zach Mathews",
    artistSlug: "zach-mathews",
    style: "Custom",
    title: "Recent Work 15",
  },
  {
    id: "16",
    imageUrl: "/images/gallery-user/g-16.jpg",
    artistName: "Elle Latesha",
    artistSlug: "elle-latesha",
    style: "Custom",
    title: "Recent Work 16",
  },
  {
    id: "17",
    imageUrl: "/images/gallery-user/g-17.jpg",
    artistName: "Paloma Sanchez",
    artistSlug: "paloma-sanchez",
    style: "Custom",
    title: "Recent Work 17",
  },
  {
    id: "18",
    imageUrl: "/images/gallery-user/g-18.jpg",
    artistName: "Taylor (Rugido)",
    artistSlug: "taylor-rugido",
    style: "Custom",
    title: "Recent Work 18",
  },
  {
    id: "19",
    imageUrl: "/images/gallery-user/g-19.jpg",
    artistName: "Freddie Trevino",
    artistSlug: "freddie-trevino",
    style: "Custom",
    title: "Recent Work 19",
  },
];

export const STATIC_PRINTS: StaticArtPrint[] = [
  {
    id: "1",
    title: "Serpent & Skull",
    artistName: "Elle Latesha",
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-c6a4d142719a?w=800&q=80",
    size: "11x14",
    price: 45,
    available: true,
  },
  {
    id: "2",
    title: "Golden Koi",
    artistName: "Paloma Sanchez",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    size: "18x24",
    price: 85,
    available: true,
  },
  {
    id: "3",
    title: "Abstract Form I",
    artistName: "Zach Mathews",
    imageUrl:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80",
    size: "16x20",
    price: 65,
    available: false,
  },
  {
    id: "4",
    title: "Tiger Flash Sheet",
    artistName: "Taylor (Rugido)",
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85f268404d58?w=800&q=80",
    size: "11x14",
    price: 40,
    available: true,
  },
];
