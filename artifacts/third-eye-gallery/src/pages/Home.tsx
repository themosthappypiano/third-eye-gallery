import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Sparkles, Shield, Eye, Palette } from "lucide-react";
import { useArtists } from "@/hooks/use-gallery";

const FEATURES = [
  { icon: Palette, title: "Artist-First", desc: "Book directly with specialists, not general availability." },
  { icon: Eye, title: "Gallery Atmosphere", desc: "A contemporary space focused entirely on the art." },
  { icon: Sparkles, title: "Wide Style Range", desc: "From hyper-realism to traditional, we have a master for it." },
  { icon: Shield, title: "Comfort Culture", desc: "A welcoming, inclusive environment for every client." },
];

const TESTIMONIALS = [
  { name: "Victoria", text: "Absolutely incredible experience. The atmosphere is like an upscale art exhibit, but the artists are so down to earth.", rating: 5 },
  { name: "Ernest", text: "Best line work I've ever seen. They took my vague idea and turned it into a masterpiece I'm proud to wear.", rating: 5 },
  { name: "Paola", text: "The studio is pristine, the vibe is chill, and the talent is unmatched in Dallas. Highly recommend.", rating: 5 },
];

export default function Home() {
  const { data: artists, isLoading } = useArtists();

  // Get top 3 artists if available, otherwise just rely on empty state
  const featuredArtists = artists?.slice(0, 3) || [];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Hero abstract background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-7xl md:text-9xl text-foreground leading-[0.85] tracking-tight mb-6 text-glow">
              Art you wear.<br />
              <span className="text-primary">One-of-one.</span><br />
              Every time.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              A contemporary tattoo collective in Dallas pushing the boundaries of skin art. 
              We operate like a fine art gallery—because that's what your skin deserves.
            </p>
            
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

      {/* Intro / Philosophy */}
      <section className="py-24 md:py-32 relative bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Redefining The Studio</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Third Eye Gallery isn't just a tattoo shop. It's a curated space where world-class artists create bespoke, permanent artwork. We've stripped away the chaotic flash-shop mentality to provide a focused, high-end experience.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              When you book here, you're not booking time in a chair—you're commissioning a piece from a specialist.
            </p>
            <div className="flex items-center gap-2 text-primary font-medium uppercase tracking-wider text-sm">
              <MapPin className="w-4 h-4" /> 2025 E Levee St #6703, Dallas
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* dark tattoo parlor studio interior */}
            <img src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80" alt="Studio interior" className="rounded-sm object-cover aspect-[4/5] opacity-80 hover:opacity-100 transition-opacity" />
            {/* close up tattoo machine art */}
            <img src="https://pixabay.com/get/gbfe2ce8c8ffa56e20b23e904613aa8227ac688d0e66ead82deea35a464da4a58e61577271de771e43283b538d3bba80085d6443cc319c7c9f128e9082196ba27_1280.jpg" alt="Tattoo process" className="rounded-sm object-cover aspect-[4/5] mt-8 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Why Third Eye</h2>
            <p className="text-muted-foreground">The foundation of our collective.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feat, i) => (
              <div key={i} className="bg-background p-8 border border-white/5 hover:border-primary/30 transition-colors group">
                <feat.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <h3 className="font-display text-2xl tracking-wide mb-3">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-6xl text-primary mb-2">The Artists</h2>
              <p className="text-muted-foreground text-lg">Masters of their respective crafts.</p>
            </div>
            <Link href="/artists" className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
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
                <Link key={artist.id} href={`/artists`} className="group block relative overflow-hidden aspect-[3/4] border border-white/10 hover:border-primary/50 transition-colors">
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
                 <Link key={i} href={`/artists`} className="group block relative overflow-hidden aspect-[3/4] border border-white/10 hover:border-primary/50 transition-colors">
                  <img 
                    src={fallback.img} 
                    alt={fallback.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
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

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
          </div>
          <h2 className="font-display text-5xl md:text-6xl mb-16">4.7 Stars from 123 Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-primary-foreground/5 p-8 border border-primary-foreground/10 rounded-sm">
                <p className="text-lg font-medium leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center font-display text-xl">
                    {t.name[0]}
                  </div>
                  <span className="uppercase tracking-widest text-sm font-semibold">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
