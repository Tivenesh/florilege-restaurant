import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/Aboutus";
import ChefSection from "@/components/ChefSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ChefSection />

      {/* Reservations Section */}
      <section id="reservations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
