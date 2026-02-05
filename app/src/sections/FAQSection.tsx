import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Why Choose CevreDent?',
    answer:
      "At CevreDent, patient comfort and satisfaction come first. Our modern clinic offers cutting-edge technology and personalized treatments. With expert international consultants fluent in 8+ languages, we ensure seamless communication. We also assist with travel, accommodations, and airport transfers for a stress-free experience, allowing patients to explore Istanbul between appointments with full support.",
  },
  {
    question: 'Why Are Dental Treatments Cheaper in Turkey?',
    answer:
      "Lower costs stem from favorable exchange rates and Turkey's lower cost of living. Foreign patients benefit from significant savings, as medical services for international visitors are exempt from VAT. This ensures high-quality care at a fraction of the price found in Europe and the U.S.",
  },
  {
    question: 'Why Get Dental Crowns in Turkey?',
    answer:
      'Turkey offers world-class dental crowns at affordable prices. Our clinics use premium materials from European and American brands, ensuring durability and aesthetics. With experienced dentists and modern facilities, you receive the same quality as in Western countries at a much lower cost.',
  },
  {
    question: 'What Is the Process for a Hollywood Smile?',
    answer:
      'Your journey starts with a consultation to design your ideal smile and address any dental issues. We resolve underlying problems before beginning cosmetic work. Our expert team customizes each plan, ensuring a flawless, natural-looking result.',
  },
  {
    question: 'Does Lower Cost Mean Lower Quality for Veneers?',
    answer:
      'No. Lower prices in Turkey don\'t compromise quality. Materials, technology, and expertise match those in the U.S., UK, and Europe, ensuring premium veneers at affordable rates.',
  },
  {
    question: 'Am I a Candidate for All-on-4 Implants?',
    answer:
      'Most patients qualify, even those unsuitable for traditional implants. Since the entire set of teeth is replaced at once, implants are placed where bone is strongest. If you have four strong bone areas in your jaw, you\'re a candidate!',
  },
];

export default function FAQSection() {
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
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-primary-light rounded-xl border-none px-4 data-[state=open]:bg-[#D4EBF9]"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-gray-800 hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-600 pb-4 leading-relaxed">
                  {item.answer}
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
            alt="Vera Clinic Exterior"
            className="w-full aspect-[4/3] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
