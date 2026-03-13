import { useEffect, useState } from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const VISIT_BG_IMAGES = [
  "images/visit/visit-1.jpg",
  "images/visit/visit-2.jpg",
  "images/visit/visit-3.jpg",
  "images/visit/visit-4.jpg",
  "images/visit/visit-5.jpg",
  "images/visit/visit-6.jpg",
];

export default function Visit() {
  const [activeBg, setActiveBg] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveBg((prev) => (prev + 1) % VISIT_BG_IMAGES.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <PageLayout>
      <div className="pt-32 pb-16 min-h-[360px] bg-background relative overflow-hidden flex items-end">
        <div className="absolute inset-0">
          {VISIT_BG_IMAGES.map((img, i) => (
            <img
              key={img}
              src={`${import.meta.env.BASE_URL}${img}`}
              alt={`Visit background ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                activeBg === i ? "opacity-75" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-background/45 via-background/25 to-background/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-background/35 to-background/25" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
                  <a
                    href="https://www.instagram.com/thirdeyegallery/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" /> @thirdeyegallery
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] lg:h-auto bg-card border border-white/10 rounded-sm relative overflow-hidden group">
            <iframe
              title="Third Eye Gallery Map"
              src="https://www.google.com/maps?q=2025+E+Levee+St+%236703,+Dallas,+TX+75207&z=15&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 pointer-events-none border border-primary/20" />

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=2025+E+Levee+St+%236703,+Dallas,+TX+75207"
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
