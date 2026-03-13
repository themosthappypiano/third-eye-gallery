import { useEffect, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useArtists } from "@/hooks/use-gallery";

const TESTIMONIALS = [
  {
    name: "Bailey Turfitt",
    text: "I am a long time fan and customer of Paloma Sanchez. She is both professional and personable, makes every session comfortable, and her original artwork is incredible every time.",
    meta: "5 REVIEWS · 3 PHOTOS",
    ago: "11 MONTHS AGO",
    image: "images/reviews/review-1.jpg",
  },
  {
    name: "Khylii Shafer",
    text: "Elle is one of the most professional, most caring artists I have had the pleasure of getting tattooed by. From planning to communication to the tattoo, she does not miss.",
    meta: "19 REVIEWS · 1 PHOTO",
    ago: "4 MONTHS AGO",
    image: "images/reviews/review-2.jpg",
  },
  {
    name: "Paola Cortes",
    text: "I highly recommend getting tattooed by Paloma. She did my first tattoo and an amazing lucky cat cover-up. Super talented, kind, and every session is a great experience.",
    meta: "LOCAL GUIDE · 74 REVIEWS · 22 PHOTOS · $200-250",
    ago: "10 MONTHS AGO",
    image: "images/reviews/review-3.jpg",
  },
];

const HERO_VIDEO_PAIRS = [
  [
    "videos/custom/jayjoree-2025-06-24.mp4",
    "videos/custom/alexandria-2025-06-23.mp4",
  ],
  [
    "videos/custom/alexandria-2025-07-02.mp4",
    "videos/custom/gutter-goblin-2025-07-10.mp4",
  ],
  [
    "videos/custom/alexandria-2025-07-10.mp4",
    "videos/custom/alexandria-2024-11-12.mp4",
  ],
];

export default function Home() {
  const { data: artists, isLoading } = useArtists();
  const [showSplitVideos, setShowSplitVideos] = useState(true);
  const [showFinalVideo, setShowFinalVideo] = useState(false);
  const [activePair, setActivePair] = useState(0);

  // Get top 3 artists if available, otherwise just rely on empty state
  const featuredArtists = artists?.slice(0, 3) || [];

  useEffect(() => {
    if (!showSplitVideos) return;
    const pairDurationMs = activePair === 0 ? 11000 : 6500;
    const id = window.setTimeout(() => {
      setActivePair((current) => {
        if (current >= HERO_VIDEO_PAIRS.length - 1) {
          setShowSplitVideos(false);
          setShowFinalVideo(true);
          return current;
        }
        return current + 1;
      });
    }, pairDurationMs);
    return () => window.clearTimeout(id);
  }, [showSplitVideos, activePair]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {showFinalVideo && (
            <video
              src={`${import.meta.env.BASE_URL}videos/hero-bg.mp4`}
              className="w-full h-full object-cover opacity-45"
              autoPlay
              muted
              loop
              playsInline
            />
          )}
          {showSplitVideos && (
            <div key={activePair} className="absolute inset-0 grid grid-cols-2 gap-2 bg-black/70 p-2">
              <video
                src={`${import.meta.env.BASE_URL}${HERO_VIDEO_PAIRS[activePair][0]}`}
                className="w-full h-full object-contain bg-black opacity-70"
                autoPlay
                muted
                loop
                playsInline
                onLoadedMetadata={(e) => {
                  if (activePair !== 0) return;
                  const el = e.currentTarget;
                  if (el.duration > 4.5) {
                    el.currentTime = 4.5;
                  }
                }}
              />
              <video
                src={`${import.meta.env.BASE_URL}${HERO_VIDEO_PAIRS[activePair][1]}`}
                className={`w-full h-full object-contain bg-black opacity-70 ${activePair === 0 ? "-translate-y-10" : ""}`}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/65 via-transparent to-background/60" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-7xl md:text-9xl text-foreground leading-[0.85] tracking-tight mb-6 text-glow">
              Ink Which<br />
              <span className="text-primary">the Third Eye</span><br />
              Sees
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Dallas Finest tattoo studio for all art styles, vision first, precision always
            </p>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-cyan-400/15 border border-cyan-300/40 text-cyan-100 text-sm tracking-wide backdrop-blur-sm shadow-[0_0_25px_rgba(56,189,248,0.25)]">
              <MapPin className="w-4 h-4 text-primary" />
              2025 E Levee St #6703, Dallas, TX
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/artists" className="group relative px-8 py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm overflow-hidden w-full sm:w-auto text-center">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book an Artist <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
              
              <Link href="/gallery" className="group px-8 py-4 border border-white/20 text-foreground hover:border-primary/50 hover:bg-primary/5 font-medium uppercase tracking-widest text-sm transition-all w-full sm:w-auto text-center box-glow">
                Explore Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[radial-gradient(circle_at_50%_20%,rgba(56,189,248,0.16),transparent_50%),linear-gradient(180deg,#070b13_0%,#05070d_100%)] text-white border-y border-cyan-400/25">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-display text-5xl md:text-7xl text-center mb-14 leading-[0.9]">
            OUR CLIENTS
            <span className="block text-primary text-glow">LOVE US.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-black/70 border-2 border-cyan-400/35 p-4 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                <div className="w-full aspect-[4/3] overflow-hidden border border-cyan-300/60 mb-4">
                  <img src={`${import.meta.env.BASE_URL}${t.image}`} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-cyan-300 text-xs tracking-wider uppercase mb-2">{t.meta}</p>
                <p className="text-2xl leading-none text-amber-300 mb-3">★★★★★</p>
                <p className="text-lg italic font-serif leading-relaxed mb-4">"{t.text}"</p>
                <p className="text-primary text-sm uppercase tracking-wider mb-3">Read More</p>
                <p className="font-display text-3xl mb-1">- {t.name}</p>
                <p className="text-cyan-300 text-sm uppercase">{t.ago}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <a
              href="https://www.google.com/search?q=third+eye+gallery+dallas+reviews"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[linear-gradient(90deg,#1d4ed8_0%,#3b82f6_50%,#2563eb_100%)] text-white text-lg tracking-wide border border-blue-300/30 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              <span className="text-2xl">G</span>
              <span className="text-amber-300">★★★★★</span>
              5 STARS! READ OUR REVIEWS ON GOOGLE
            </a>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-24 md:py-32 bg-[radial-gradient(circle_at_15%_20%,rgba(16,185,129,0.12),transparent_35%),linear-gradient(140deg,#040b10_0%,#08131c_45%,#071018_100%)] border-y border-emerald-300/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-6xl text-emerald-200 mb-2 text-glow">The Artists</h2>
              <p className="text-slate-200 text-lg">Masters of their respective crafts.</p>
            </div>
            <Link href="/artists" className="text-sm font-medium uppercase tracking-widest text-emerald-100 hover:text-primary transition-colors flex items-center gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1,2,3].map(i => (
                <div key={i} className="aspect-[3/4] bg-card animate-pulse rounded-sm border border-white/5"></div>
              ))}
            </div>
          ) : featuredArtists.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArtists.map((artist) => (
                <Link key={artist.id} href={`/artists/${artist.slug}`} className="group block relative overflow-hidden aspect-[3/4] border border-white/10 hover:border-primary/50 transition-colors">
                  <img 
                    src={artist.imageUrl || `https://images.unsplash.com/photo-[placeholder]`} 
                    alt={artist.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if API image is bad
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=600&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-4xl text-white mb-1">{artist.name}</h3>
                    <p className="text-primary text-sm uppercase tracking-widest font-medium">{artist.specialty}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            // Empty state fallback using Unsplash
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Zach Mathews", spec: "Custom, Colour", img: "https://images.unsplash.com/photo-1562088287-ba8e132c32bf?w=600&q=80" },
                { name: "Elle Latesha", spec: "Neo-Traditional", img: "https://images.unsplash.com/photo-1590740534279-99c5651912f2?w=600&q=80" },
                { name: "Paloma Sanchez", spec: "Anime, Cover-ups", img: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=600&q=80" }
              ].map((fallback, i) => (
                 <Link key={i} href={`/artists/${fallback.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="group block relative overflow-hidden aspect-[3/4] border border-white/10 hover:border-primary/50 transition-colors">
                  <img 
                    src={fallback.img} 
                    alt={fallback.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-4xl text-white mb-1">{fallback.name}</h3>
                    <p className="text-primary text-sm uppercase tracking-widest font-medium">{fallback.spec}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Intro / Philosophy */}
      <section className="py-24 md:py-32 relative bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_45%),linear-gradient(150deg,#060b14_0%,#091326_45%,#0a1220_100%)] border-y border-cyan-300/15">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-cyan-200 mb-6 text-glow">Redefining The Studio</h2>
            <p className="text-slate-200 text-lg leading-relaxed mb-6">
              Third Eye Gallery isn't just a tattoo shop. It's a curated space where world-class artists create bespoke, permanent artwork. We've stripped away the chaotic flash-shop mentality to provide a focused, high-end experience.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              When you book here, you're not booking time in a chair—you're commissioning a piece from a specialist.
            </p>
            <div className="flex items-center gap-2 text-cyan-100 font-semibold uppercase tracking-wider text-sm">
              <MapPin className="w-4 h-4" /> 2025 E Levee St #6703, Dallas
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={`${import.meta.env.BASE_URL}images/custom/studio-1.jpg`}
              alt="Third Eye Gallery studio photo 1"
              className="col-span-2 rounded-sm object-cover aspect-[16/9] opacity-85 hover:opacity-100 transition-opacity border border-cyan-200/20"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/custom/studio-2.jpg`}
              alt="Third Eye Gallery studio photo 2"
              className="rounded-sm object-cover aspect-[4/5] opacity-85 hover:opacity-100 transition-opacity border border-cyan-200/20"
            />
            <img
              src={`${import.meta.env.BASE_URL}images/custom/studio-3.jpg`}
              alt="Third Eye Gallery studio photo 3"
              className="rounded-sm object-cover aspect-[4/5] mt-8 opacity-85 hover:opacity-100 transition-opacity border border-cyan-200/20"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
