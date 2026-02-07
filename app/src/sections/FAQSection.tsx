import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from '@/i18n';

const faqKeys = [
  'whyChooseVerasmile',
  'whyCheaperInTurkey',
  'whyDentalCrowns',
  'hollywoodSmileProcess',
  'lowerCostLowerQuality',
  'allOnFourCandidate',
];

export default function FAQSection() {
  const { t } = useTranslations('faq');

  return (
    <section id="faq" className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
            {t('title')}
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqKeys.map((key, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-primary-light rounded-xl border-none px-4 data-[state=open]:bg-[#D4EBF9]"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-gray-800 hover:no-underline py-4">
                  {t(`questions.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-4 leading-relaxed">
                  {t(`questions.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Clinic Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-card"
        >
          <img
            src="/images/clinic-exterior.png"
            alt={t('clinicImageAlt')}
            className="w-full aspect-[4/3] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

