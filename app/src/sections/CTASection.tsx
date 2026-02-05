import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const scrollToForm = () => {
    const element = document.querySelector('#contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="border border-gray-200 rounded-2xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
          Ready To Get Started?
        </h2>
        
        <p className="text-gray-600 mb-6">
          Discover the Power of a Confident Smile!
        </p>
        
        <Button
          onClick={scrollToForm}
          className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium group transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
          Plan My Journey!
        </Button>
      </motion.div>
    </section>
  );
}
