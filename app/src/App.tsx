import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import ServicesBar from './sections/ServicesBar';
import FeaturesSection from './sections/FeaturesSection';
import ContactForm from './sections/ContactForm';
import WhyChooseSection from './sections/WhyChooseSection';
import BeforeAfterGallery from './sections/BeforeAfterGallery';
import DoctorsSection from './sections/DoctorsSection';
import ClinicShowcase from './sections/ClinicShowcase';
import TestimonialsSection from './sections/TestimonialsSection';
import HotelSection from './sections/HotelSection';
import CTASection from './sections/CTASection';
import FAQSection from './sections/FAQSection';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="min-h-screen bg-white"
    >
      <Header />
      <main>
        <HeroSection />
        <ServicesBar />
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FeaturesSection />
            <ContactForm />
          </div>
        </div>
        <WhyChooseSection />
        <BeforeAfterGallery />
        <DoctorsSection />
        <ClinicShowcase />
        <TestimonialsSection />
        <HotelSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+908506000090" />
    </motion.div>
  );
}

export default App;
