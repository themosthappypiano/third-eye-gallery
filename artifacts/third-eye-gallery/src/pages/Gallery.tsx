import { useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { useGallery } from "@/hooks/use-gallery";
import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Fallbacks for stunning presentation
const FALLBACK_GALLERY = [
  { id: "1", imageUrl: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&q=80", artistName: "Zach Mathews", artistSlug: "zach", style: "Black & Grey", title: "Midnight Owl" },
  { id: "2", imageUrl: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=800&q=80", artistName: "Elle Latesha", artistSlug: "elle", style: "Neo-Traditional", title: "Panther Head" },
  { id: "3", imageUrl: "https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=800&q=80", artistName: "Taylor", artistSlug: "taylor", style: "Traditional", title: "Dagger & Rose" },
  { id: "4", imageUrl: "https://images.unsplash.com/photo-1550100431-7e79391ab1a1?w=800&q=80", artistName: "Paloma Sanchez", artistSlug: "paloma", style: "Anime", title: "Spirited Away" },
  { id: "5", imageUrl: "https://images.unsplash.com/photo-1621252178972-230bc7646da4?w=800&q=80", artistName: "Freddie Trevino", artistSlug: "freddie", style: "Portrait", title: "Family Tribute" },
  { id: "6", imageUrl: "https://images.unsplash.com/photo-1562088287-ba8e132c32bf?w=800&q=80", artistName: "Zach Mathews", artistSlug: "zach", style: "Custom", title: "Abstract Sleeve" },
  { id: "7", imageUrl: "https://images.unsplash.com/photo-1590740534279-99c5651912f2?w=800&q=80", artistName: "Elle Latesha", artistSlug: "elle", style: "Gothic", title: "Cursed Chalice" },
];

export default function Gallery() {
  const { data: apiImages, isLoading } = useGallery();
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  const images = apiImages?.length ? apiImages : FALLBACK_GALLERY;

  return (
    <PageLayout>
      <div className="pt-32 pb-16 bg-background border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-primary text-glow mb-6">Archive</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            A selection of recent work from our collective.
          </p>
        </div>
      </div>

      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        {isLoading ? (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-card w-full h-64 animate-pulse rounded-sm break-inside-avoid"></div>
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {images.map((img, i) => (
              <div 
                key={img.id} 
                className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-sm bg-card"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.imageUrl} 
                  alt={img.title || "Gallery image"} 
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-primary font-medium tracking-widest uppercase text-xs mb-1">{img.artistName}</p>
                  <p className="text-white font-display text-2xl">{img.title || img.style}</p>
                  <ZoomIn className="absolute top-4 right-4 text-white/50 w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 text-muted-foreground hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-5xl w-full max-h-[85vh] flex flex-col md:flex-row bg-card border border-white/10 shadow-2xl rounded-sm overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="w-full md:w-2/3 bg-black flex items-center justify-center p-4">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title || "Artwork"} 
                  className="max-w-full max-h-[60vh] md:max-h-[80vh] object-contain"
                />
              </div>
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
                <h3 className="font-display text-5xl mb-2">{selectedImage.title || "Untitled"}</h3>
                <p className="text-primary uppercase tracking-widest text-sm font-medium mb-6">By {selectedImage.artistName}</p>
                <div className="space-y-4 text-muted-foreground text-sm">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Style</span>
                    <span className="text-foreground">{selectedImage.style}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Studio</span>
                    <span className="text-foreground">Third Eye Gallery</span>
                  </div>
                </div>
                
                <button 
                  className="mt-12 w-full py-4 bg-primary text-primary-foreground font-medium uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors"
                  onClick={() => {
                    setSelectedImage(null);
                    window.location.href = "/booking";
                  }}
                >
                  Book this Artist
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
