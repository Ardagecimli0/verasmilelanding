import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../sections/Header';
import HeroSection from '../sections/HeroSection';
import ServicesBar from '../sections/ServicesBar';
import FeaturesSection from '../sections/FeaturesSection';
import ContactForm from '../sections/ContactForm';
import WhyChooseSection from '../sections/WhyChooseSection';
import BeforeAfterGallery from '../sections/BeforeAfterGallery';
import DoctorsSection from '../sections/DoctorsSection';
import ClinicShowcase from '../sections/ClinicShowcase';
import TestimonialsSection from '../sections/TestimonialsSection';
import HotelSection from '../sections/HotelSection';
import CTASection from '../sections/CTASection';
import FAQSection from '../sections/FAQSection';
import Footer from '../sections/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useLocale, getLocaleFromSlug, localeToSlug, defaultLocale } from '../i18n';

export default function LandingPage() {
    const { slug } = useParams < { slug: string } > ();
    const navigate = useNavigate();
    const { setLocale } = useLocale();

    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    useEffect(() => {
        if (slug) {
            const detectedLocale = getLocaleFromSlug(slug);
            if (detectedLocale) {
                setLocale(detectedLocale);
            } else {
                // Redirect invalid slugs to default locale
                navigate(`/${localeToSlug[defaultLocale]}`, { replace: true });
            }
        }
    }, [slug, setLocale, navigate]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="min-h-screen bg-white"
        >
            <div>
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
            </div>
        </motion.div>
    );
}
