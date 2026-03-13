import { PageLayout } from "@/components/layout/PageLayout";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

export default function Visit() {
  return (
    <PageLayout>
      <div className="pt-32 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h1 className="font-display text-6xl md:text-8xl text-primary text-glow mb-6">Studio Location</h1>
        </div>
      </div>

      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12">
              Located in the heart of Dallas's Design District, our studio is designed to be a private, comfortable space where art takes precedence. Free parking is available in the front lot.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2">Address</h3>
                  <p className="text-muted-foreground text-lg">
                    2025 E Levee St #6703<br />
                    Dallas, Texas 75207
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2">Hours</h3>
                  <p className="text-muted-foreground text-lg">
                    Monday - Sunday<br />
                    1:00 PM - 9:00 PM
                  </p>
                  <p className="text-sm text-primary mt-2">By appointment mostly.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl mb-2">Contact</h3>
                  <p className="text-muted-foreground text-lg mb-2">
                    +1 214-484-3618
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
                    <Instagram className="w-4 h-4" /> @thirdeyegallery
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] lg:h-auto bg-card border border-white/10 rounded-sm relative overflow-hidden group">
            {/* Map Placeholder - Styled map image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80" 
              alt="Map view" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            
            {/* Pin graphic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
              <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-[0_0_15px_rgba(200,216,255,0.8)]"></div>
              <div className="mt-4 bg-background/90 backdrop-blur border border-primary/30 px-4 py-2 text-sm font-medium tracking-widest uppercase">
                Third Eye Gallery
              </div>
            </div>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="absolute bottom-6 right-6 bg-background text-foreground px-6 py-3 text-sm font-medium uppercase tracking-widest border border-white/20 hover:border-primary hover:text-primary transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
