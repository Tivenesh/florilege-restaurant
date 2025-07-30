import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/Aboutus";
// Removed ChefSection from the main page
import ServicesSection from "@/components/ServicesSection"; // Added ServicesSection
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection /> {/* Replaced ChefSection with ServicesSection */}
      <AboutSection />
      {/* Get a Quote Section */}
      <section id="get-a-quote" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>

      {/* Footer Section */}
      <section id="contact-info">
        <Footer />
      </section>
    </main>
  );
}