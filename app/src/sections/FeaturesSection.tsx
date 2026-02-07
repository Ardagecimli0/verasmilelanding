import { motion } from 'framer-motion';
import { Shield, Heart, User, Car, Star } from 'lucide-react';
import { useTranslations } from '@/i18n';

const featureKeys = [
  { icon: Shield, titleKey: 'dentalTreatmentGuarantee' },
  { icon: Heart, titleKey: 'premiumQualityDentalCare' },
  { icon: User, titleKey: 'expertConsultations' },
  { icon: Car, titleKey: 'vipTransferServices' },
  { icon: Star, titleKey: 'luxuryHotelStay' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function FeaturesSection() {
  const { t } = useTranslations('features');

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6"
      >
        {t('title')}
        <br />
        {t('titleLine2')}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {featureKeys.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.titleKey}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)' }}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl bg-white transition-all duration-300 cursor-default"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-primary">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {t(feature.titleKey)}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

