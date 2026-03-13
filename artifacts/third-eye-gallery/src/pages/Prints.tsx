import { PageLayout } from "@/components/layout/PageLayout";
import { usePrints } from "@/hooks/use-gallery";
import { ShoppingBag } from "lucide-react";

// Fallbacks
const FALLBACK_PRINTS = [
  { id: "1", title: "Serpent & Skull", artistName: "Elle Latesha", imageUrl: "https://images.unsplash.com/photo-1542314831-c6a4d142719a?w=800&q=80", size: "11x14", price: 45, available: true },
  { id: "2", title: "Golden Koi", artistName: "Paloma Sanchez", imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80", size: "18x24", price: 85, available: true },
  { id: "3", title: "Abstract Form I", artistName: "Zach Mathews", imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80", size: "16x20", price: 65, available: false },
  { id: "4", title: "Tiger Flash Sheet", artistName: "Taylor", imageUrl: "https://images.unsplash.com/photo-1578301978693-85f268404d58?w=800&q=80", size: "11x14", price: 40, available: true },
];

export default function Prints() {
  const { data: apiPrints, isLoading } = usePrints();
  const prints = apiPrints?.length ? apiPrints : FALLBACK_PRINTS;

  return (
    <PageLayout>
      <div className="pt-32 pb-16 bg-background border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-primary text-glow mb-6">Art Prints</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Take the gallery home. Archival quality prints by our resident artists.
          </p>
        </div>
      </div>

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1,2,3,4].map(i => (
              <div key={i} className="animate-pulse">
                <div className="bg-card aspect-[3/4] mb-4 border border-white/5"></div>
                <div className="h-6 bg-card w-3/4 mb-2"></div>
                <div className="h-4 bg-card w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {prints.map(print => (
              <div key={print.id} className="group flex flex-col">
                <div className="relative aspect-[3/4] bg-card border border-white/10 mb-6 overflow-hidden">
                  <img 
                    src={print.imageUrl} 
                    alt={print.title} 
                    className="w-full h-full object-cover p-4 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {!print.available && (
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
                      <span className="bg-black/80 text-white font-medium uppercase tracking-widest text-xs px-4 py-2 border border-white/20">
                        Sold Out
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="font-display text-2xl mb-1">{print.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">By {print.artistName}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-primary font-medium">${print.price}</span>
                    <span className="text-muted-foreground text-xs">{print.size}</span>
                  </div>
                  
                  <button 
                    disabled={!print.available}
                    className="mt-4 w-full py-3 bg-card border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-foreground font-medium text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => alert("Store integration pending.")}
                  >
                    <ShoppingBag className="w-4 h-4" /> 
                    {print.available ? "Add to Cart" : "Unavailable"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageLayout>
  );
}
