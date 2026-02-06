import { motion } from 'framer-motion';

const clinicImages = [
  {
    image: '/images/clinic-exterior.png',
    text: 'Our high-tech hospital is centrally located in Istanbul with a stunning seafront view!',
    subtext: 'VeraSmile is part of Cevre Clinic Medical Center!',
  },
  {
    image: '/images/clinic-interior.png',
    text: 'Experience the difference at VeraSmile Dental Clinic where your smile matters!',
    subtext: '',
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
            className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-sm md:text-base font-medium text-center leading-relaxed">
                {item.text}
              </p>
              {item.subtext && (
                <p className="text-white/80 text-xs text-center mt-2">
                  {item.subtext}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
