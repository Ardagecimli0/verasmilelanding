import { motion } from 'framer-motion';
import { useTranslations } from '@/i18n';

const serviceKeys = ['implants', 'veneers', 'smileDesign', 'crowns'];

export default function ServicesBar() {
  const { t } = useTranslations('servicesBar');

  // Get translated services
  const services = serviceKeys.map(key => t(key));

  // Duplicate services for seamless marquee loop
  const marqueeServices = [...services, ...services];

  return (
    <section className="container mx-auto px-4 py-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-primary rounded-xl py-4 px-6 overflow-hidden"
      >
        {/* Desktop: Static display */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-2 md:gap-4 text-white text-lg md:text-xl font-medium">
          {services.map((service, index) => (
            <span key={service} className="flex items-center">
              {service}
              {index < services.length - 1 && (
                <span className="ml-2 md:ml-4 text-white/60">|</span>
              )}
            </span>
          ))}
        </div>

        {/* Mobile: Marquee sliding animation */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            className="flex items-center gap-4 whitespace-nowrap"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 10,
                ease: 'linear',
              },
            }}
          >
            {marqueeServices.map((service, index) => (
              <span key={`${service}-${index}`} className="flex items-center text-white text-lg font-medium">
                {service}
                <span className="ml-4 text-white/60">|</span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

