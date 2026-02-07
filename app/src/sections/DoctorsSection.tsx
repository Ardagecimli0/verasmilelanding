import { motion } from 'framer-motion';
import { useTranslations } from '@/i18n';

const doctorKeys = [
  {
    image: '/images/dr-mumin-1.webp',
    nameKey: 'drMumin.name',
    descriptionKey: 'drMumin.description',
  },
  {
    image: '/images/dr-nurlan-copy-1.webp',
    nameKey: 'drNurlan.name',
    descriptionKey: 'drNurlan.description',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function DoctorsSection() {
  const { t } = useTranslations('doctors');

  return (
    <section id="doctors" className="bg-primary-light py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-secondary text-center mb-10"
        >
          {t('title')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {doctorKeys.map((doctor) => (
            <motion.div
              key={doctor.nameKey}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white border border-primary rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={t(doctor.nameKey)}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="bg-primary py-3 px-4">
                <h3 className="text-white font-semibold text-center text-lg">
                  {t(doctor.nameKey)}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line text-center">
                  {t(doctor.descriptionKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

