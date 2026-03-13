import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { useArtists } from "@/hooks/use-gallery";
import { Instagram, ArrowRight } from "lucide-react";

// Hardcoded artist fallbacks just in case the API is empty to satisfy the prompt's specific names
const FALLBACK_ARTISTS = [
  { id: "1", name: "Zach Mathews", specialty: "Custom & Cover-ups", styles: ["Custom", "Colour", "Cover-Ups"], bio: "Specializing in large scale custom work and seamless cover-ups.", instagram: "zachmathewstattoo", imageUrl: "https://images.unsplash.com/photo-1562088287-ba8e132c32bf?w=800&q=80" },
  { id: "2", name: "Elle Latesha", specialty: "Neo-Traditional", styles: ["Neo-Traditional", "Gothic", "Flash"], bio: "Bold lines and vibrant colors with a gothic twist.", instagram: "elle.tattoos", imageUrl: "https://images.unsplash.com/photo-1590740534279-99c5651912f2?w=800&q=80" },
  { id: "3", name: "Paloma Sanchez", specialty: "Anime & Illustrative", styles: ["Anime", "Cover-Ups", "Custom"], bio: "Bringing anime panels to life with pinpoint accuracy.", instagram: "paloma.ink", imageUrl: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=800&q=80" },
  { id: "4", name: "Taylor (Rugido)", specialty: "Traditional", styles: ["Traditional", "Flash", "Colour"], bio: "American traditional that looks tough and lasts forever.", instagram: "rugido", imageUrl: "https://images.unsplash.com/photo-1621252178972-230bc7646da4?w=800&q=80" },
  { id: "5", name: "Freddie Trevino", specialty: "Tribute & Portrait", styles: ["Custom", "Portraits"], bio: "Hyper-realistic portraits and meaningful tribute pieces.", instagram: "freddietrevino", imageUrl: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80" },
];

const ALL_STYLES = ["All", "Custom", "Traditional", "Neo-Traditional", "Anime", "Gothic", "Colour", "Cover-Ups", "Flash", "Portraits", "Illustrative"];

export default function Artists() {
  const { data: apiArtists, isLoading } = useArtists();
  const [activeStyle, setActiveStyle] = useState("All");

  const artists = apiArtists?.length ? apiArtists : FALLBACK_ARTISTS;

  const filteredArtists = activeStyle === "All" 
    ? artists 
    : artists.filter(a => a.styles.includes(activeStyle));

  return (
    <PageLayout>
      <div className="pt-32 pb-16 bg-background border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-primary text-glow mb-6">The Collective</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Find the right specialist for your piece. Browse by style or explore individual portfolios.
          </p>
        </div>
      </div>

      <div className="bg-card sticky top-[72px] z-40 border-b border-white/5 py-4 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-3 min-w-max">
          {ALL_STYLES.map(style => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeStyle === style 
                  ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(200,216,255,0.3)]" 
                  : "bg-background border border-white/10 text-muted-foreground hover:text-foreground hover:border-white/30"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[1,2,3,4].map(i => (
              <div key={i} className="flex flex-col md:flex-row gap-8 bg-card border border-white/5 p-6 animate-pulse h-80"></div>
            ))}
          </div>
        ) : filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredArtists.map(artist => (
              <div key={artist.id} className="group bg-card border border-white/5 overflow-hidden flex flex-col md:flex-row hover:border-primary/30 transition-colors">
                <div className="w-full md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
                  <img 
                    src={artist.imageUrl || 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&q=80'} 
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
                <div className="w-full md:w-3/5 p-8 flex flex-col">
                  <div className="flex-1">
                    <h2 className="font-display text-4xl mb-1 group-hover:text-primary transition-colors">{artist.name}</h2>
                    <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">{artist.specialty}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {artist.styles.map((s, i) => (
                        <span key={i} className="text-xs bg-background px-2 py-1 rounded border border-white/10 text-muted-foreground">
                          {s}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                      {artist.bio || "Resident artist at Third Eye Gallery."}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                    <a href={`https://instagram.com/${artist.instagram}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Instagram className="w-4 h-4" /> @{artist.instagram}
                    </a>
                    
                    <button 
                      className="flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-wider group/btn"
                      onClick={() => window.location.href = artist.bookingUrl || '/booking'}
                    >
                      Book <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p>No artists found matching this style.</p>
            <button onClick={() => setActiveStyle("All")} className="mt-4 text-primary hover:underline">Clear filters</button>
          </div>
        )}
      </section>
    </PageLayout>
  );
}
