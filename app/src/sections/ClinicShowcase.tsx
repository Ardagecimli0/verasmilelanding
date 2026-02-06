import { motion } from 'framer-motion';

const clinicImages = [
  {
    image: '/images/clinic-exterior.webp',
  },
  {
    image: '/images/clinic-interior.webp',
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
            className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            {/* Top text overlay */}
            <div className="absolute top-0 left-0 right-0 z-10 p-4 text-center bg-gradient-to-b from-black/50 to-transparent">
              <p className="text-white text-sm md:text-base font-medium leading-relaxed drop-shadow-lg">
                {item.text}
              </p>
            </div>

            <img
              src={item.image}
              alt="VeraSmile Clinic"
              className="w-full aspect-[4/5] md:aspect-[16/9] object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
