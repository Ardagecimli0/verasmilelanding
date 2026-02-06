import { motion } from 'framer-motion';
import { Building2, FlaskConical, Clock, Award, Users, Stethoscope, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Building2, title: 'Modern Clinic' },
  { icon: FlaskConical, title: 'European &\nAmerican\nMaterial Brands' },
  { icon: Clock, title: 'No Waiting\nLine' },
  { icon: Award, title: 'Awards\nISO / Certificates' },
  { icon: Users, title: 'Global Patients\nwith 99%\nSatisfaction Rate' },
  { icon: Stethoscope, title: 'Experienced\nDoctors' },
  { icon: ShieldCheck, title: 'Guarantee\nProgram\n(5Y Veneers/Crowns\n20Y Implants)' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function WhyChooseSection() {


  return (
    <section id="why-us" className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="bg-secondary rounded-3xl p-6 md:p-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          Here's Why You Should Choose VeraSmile!
        </h2>

        {/* Mobile: 2 columns, Desktop: 7 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-6 mb-10"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isGuarantee = index === features.length - 1;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`flex flex-col items-center text-center cursor-default ${isGuarantee ? 'col-span-2 md:col-span-1' : ''
                  }`}
              >
                <div className="w-16 h-16 md:w-14 md:h-14 flex items-center justify-center text-primary mb-3">
                  <Icon className="w-12 h-12 md:w-10 md:h-10" strokeWidth={1.5} />
                </div>
                <p className={`text-white whitespace-pre-line leading-tight ${isGuarantee ? 'text-xs md:text-xs max-w-[140px] md:max-w-none' : 'text-sm md:text-xs'
                  }`}>
                  {feature.title}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-center">
          <Button
            onClick={() => window.open('https://api.whatsapp.com/send?phone=905494755287&text=What are the options and pricing for dental treatment', '_blank')}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium group transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Get A Free Consultation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
