import { motion } from 'framer-motion';

const doctors = [
  {
    image: '/images/dentist-mumin.png',
    name: 'Dt. Mümin Manassra',
    description:
      'Dr. Manassra, a 2017 graduate of Atatürk University, is a highly skilled dentist with seven years of expertise.\n\nRecognized among Turkey\'s top dentists, Dt. Manassra ensures that his patients receive exceptional dental care and high levels of satisfaction.',
  },
  {
    image: '/images/dentist-nurlan.png',
    name: 'Dt. Nurlan Gasimov',
    description:
      'Dt. Nurlan Gasimov who graduated from Azerbaijan Medical University, Faculty of Dentistry in 2011, has 12 years of professional experience.\n\nAfter working as a specialist in Baku, he travelled to Turkey in 2017 and has been practicing here ever since.',
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
          Our Expert Dentist
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white border border-primary rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="bg-primary py-3 px-4">
                <h3 className="text-white font-semibold text-center text-lg">
                  {doctor.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line text-center">
                  {doctor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
