import { PageLayout } from "@/components/layout/PageLayout";
import { Link } from "wouter";
import { AlertCircle, Calendar, CreditCard, Mail } from "lucide-react";

const FAQS = [
  {
    q: "How do I book an appointment?",
    a: "We book by artist, not by general availability. Review our Artists page, find the specialist whose style matches your concept, and use their specific booking link or email provided on their profile."
  },
  {
    q: "Do you take walk-ins?",
    a: "Third Eye Gallery operates primarily by appointment to ensure each piece gets the dedicated time it deserves. We occasionally host flash events which are announced on our Instagram."
  },
  {
    q: "What is the deposit policy?",
    a: "A non-refundable deposit is required to secure any appointment. This goes toward the final cost of your tattoo. If you need to reschedule, we require 48 hours notice to transfer your deposit to a new date."
  },
  {
    q: "How much will my tattoo cost?",
    a: "Pricing varies by artist, size, placement, and detail. Our artists generally charge between $100-$500+ per hour or offer flat day rates for large scale work. Your artist will provide an estimate during consultation."
  },
  {
    q: "Can I bring guests?",
    a: "To maintain a calm, focused gallery environment, we ask that you bring no more than one guest with you to your appointment."
  }
];

export default function Booking() {
  return (
    <PageLayout>
      <div className="pt-32 pb-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h1 className="font-display text-6xl md:text-8xl text-primary text-glow mb-6">Booking Info</h1>
          <p className="text-xl text-muted-foreground font-light">
            Read our policies before reaching out. We prioritize clear communication and mutual respect.
          </p>
        </div>
      </div>

      <section className="py-12 max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card p-8 border border-white/5 text-center flex flex-col items-center">
            <Calendar className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-2xl mb-2">1. Choose Artist</h3>
            <p className="text-sm text-muted-foreground">Select an artist based on your desired style. We do not assign artists randomly.</p>
          </div>
          <div className="bg-card p-8 border border-white/5 text-center flex flex-col items-center">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-2xl mb-2">2. Submit Concept</h3>
            <p className="text-sm text-muted-foreground">Provide clear details: placement, size, references, and your budget.</p>
          </div>
          <div className="bg-card p-8 border border-primary/20 text-center flex flex-col items-center shadow-[0_0_20px_rgba(200,216,255,0.05)]">
            <CreditCard className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-display text-2xl mb-2">3. Deposit</h3>
            <p className="text-sm text-muted-foreground">Secure your date with a non-refundable deposit applied to your final price.</p>
          </div>
        </div>

        <div className="bg-destructive/10 border border-destructive/30 p-6 flex gap-4 mb-20 rounded-sm">
          <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-display text-xl text-destructive mb-2">Strict Deposit Policy</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">
              All deposits are non-refundable. Cancellations or reschedules with less than 48 hours notice will result in a forfeit of the deposit. Drawing fees for custom designs are separate and non-refundable.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-4xl mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-card border border-white/5 p-6 md:p-8 hover:border-primary/30 transition-colors">
                <h4 className="text-lg font-medium mb-3 text-foreground">{faq.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <Link href="/artists" className="inline-block px-10 py-5 bg-primary text-primary-foreground font-medium uppercase tracking-widest hover:bg-primary/90 transition-colors box-glow">
            Find Your Artist
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
