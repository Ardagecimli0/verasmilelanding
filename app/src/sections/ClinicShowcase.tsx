import { motion } from 'framer-motion';
import { useTranslations } from '@/i18n';

const clinicImages = [
  {
    image: '/images/clinic-exterior.webp',
  },
  {
    image: '/images/clinic-interior.webp',
  },
];

export default function ClinicShowcase() {
  const { t } = useTranslations('clinicShowcase');

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        // max-w-5xl ve gap korundu, böylece boyut küçülmedi
        className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      >
        {clinicImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
            // bg-gradient ve padding'ler kaldırıldı, sadece görsel kaldı
            className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={t('clinicAlt')}
                // Boyutu korumak için aspect-square (kare) yapısı bırakıldı
                className="w-full aspect-square object-cover"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
