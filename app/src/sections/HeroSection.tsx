import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {


  return (
    <section id="home" className="container mx-auto px-4 pt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #E8F4FC 0%, #D4EBF9 100%)',
          borderTop: '8px solid #7CB3E8',
        }}
      >
        <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left"
            >
              <span className="text-primary block md:inline">Save Up to 70%</span>{' '}
              <span className="text-secondary block md:inline">on Your Perfect Smile in Turkey!</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                onClick={() => window.open('https://api.whatsapp.com/send?phone=905494755287&text=What are the options and pricing for dental treatment', '_blank')}
                className="bg-secondary hover:bg-secondary-dark text-white px-6 py-6 rounded-lg text-base font-medium group transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Get A Free Consultation
              </Button>
            </motion.div>

            {/* Partner Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <div className="text-xl font-bold text-gray-800 flex items-center">
                  <span className="text-2xl mr-1">N</span>
                  <div className="flex flex-col text-xs leading-tight">
                    <span>Nobel</span>
                    <span>Biocare</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
                <div className="text-lg font-bold text-gray-800 italic">
                  straumann
                </div>
              </div>
              <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex flex-col items-center">
                  <div className="flex gap-0.5">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-gray-600" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-gray-700">
                    ivoclar<span className="text-primary"> vivadent</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src="/images/hero-couple.png"
              alt="Happy couple with perfect smiles"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
