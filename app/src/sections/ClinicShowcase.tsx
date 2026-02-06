import { motion } from 'framer-motion';

const clinicImages = [
  {
    image: '/images/clinic-exterior.webp',
    text: 'Our high-tech hospital is',
    boldText: 'centrally located in Istanbul',
    subText: 'with a stunning seafront view!',
    hasCard: true,
  },
  {
    image: '/images/clinic-interior.webp',
    text: 'Experience the difference',
    boldText: 'at Vera Smile Dental Clinic where',
    subText: 'your smile matters!',
    hasCard: false,
  },
];

export default function ClinicShowcase() {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {clinicImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 bg-gradient-to-b from-primary to-primary-dark"
          >
            {/* Top text overlay */}
            <div className="p-4 text-center text-white">
              <p className="text-sm md:text-base">{item.text}</p>
              <p className="text-sm md:text-base font-bold">{item.boldText}</p>
              <p className="text-sm md:text-base">{item.subText}</p>
            </div>

            <div className="relative">
              <img
                src={item.image}
                alt="VeraSmile Clinic"
                className="w-full aspect-[4/3] object-cover"
              />

              {/* Bottom card overlay */}
              {item.hasCard && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-white rounded-full px-6 py-3 shadow-lg text-center">
                  <img src="/images/logo.svg" alt="VeraClinic" className="h-5 mx-auto mb-1" />
                  <p className="text-gray-700 text-xs">Vera Smile is part of</p>
                  <p className="text-primary font-bold text-xs">Vera Clinic Medical Center!</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
