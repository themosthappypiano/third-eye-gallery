import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { STATIC_ARTISTS, STATIC_GALLERY_IMAGES } from "@/lib/static-data";

type ArtistGalleryProps = {
  slug: string;
};

const ARTIST_GALLERIES: Record<string, string[]> = {
  "zach-mathews": [
    "/images/recent-hits/hit-4.jpg",
    "/images/reviews/review-1.jpg",
    "/images/custom/studio-1.jpg",
  ],
  "elle-latesha": [
    "/images/artists/latesha.jpg",
    "/images/reviews/review-2.jpg",
    "/images/recent-hits/hit-2.jpg",
  ],
  "paloma-sanchez": [
    "/images/artists/paloma.jpg",
    "/images/reviews/review-3.jpg",
    "/images/recent-hits/hit-3.jpg",
  ],
  "taylor-rugido": [
    "/images/artists/taylor.jpg",
    "/images/recent-hits/hit-1.jpg",
    "/images/custom/studio-2.jpg",
  ],
  "freddie-trevino": [
    "/images/artists/freddie.jpg",
    "/images/recent-hits/hit-1.jpg",
    "/images/custom/studio-3.jpg",
  ],
  "moses-veliz": [
    "/images/artists/moses.jpg",
    "/images/recent-hits/hit-4.jpg",
    "/images/recent-hits/hit-2.jpg",
  ],
  "roque-mendez": [
    "/images/artists/roque.jpg",
    "/images/recent-hits/hit-3.jpg",
    "/images/recent-hits/hit-4.jpg",
  ],
};

export default function ArtistGallery({ slug }: ArtistGalleryProps) {
  const artist = STATIC_ARTISTS.find((a) => a.slug === slug);

  if (!artist) {
    return (
      <PageLayout>
        <section className="pt-36 pb-24 text-center">
          <p className="text-lg text-muted-foreground mb-6">Artist not found.</p>
          <Link href="/artists" className="text-primary hover:underline">
            Back to Artists
          </Link>
        </section>
      </PageLayout>
    );
  }

  const apiImages = STATIC_GALLERY_IMAGES.filter((img) => img.artistSlug === slug).map(
    (img) => img.imageUrl,
  );
  const localImages = ARTIST_GALLERIES[slug] ?? [];
  const gallery = [...apiImages, ...localImages];

  return (
    <PageLayout>
      <section className="pt-32 pb-14 border-b border-white/10 bg-[linear-gradient(120deg,#050911_0%,#0b1528_55%,#081220_100%)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link href="/artists" className="inline-flex items-center gap-2 text-cyan-200 hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Artists
          </Link>
          <h1 className="font-display text-6xl md:text-8xl text-primary text-glow mb-4">{artist.name}</h1>
          <p className="text-xl text-slate-200">{artist.specialty} Gallery</p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((src, i) => (
            <div key={`${src}-${i}`} className="border border-cyan-300/30 bg-black/70 overflow-hidden">
              <img
                src={src.startsWith("/") ? `${import.meta.env.BASE_URL}${src.slice(1)}` : src}
                alt={`${artist.name} artwork ${i + 1}`}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
