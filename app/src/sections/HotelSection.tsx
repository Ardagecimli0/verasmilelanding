import { motion } from 'framer-motion';

export default function HotelSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3
            className="text-blue-400 text-2xl md:text-3xl font-[inherit]"
            style={{
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            Getting Dental Treatment
            <br />
            Abroad is a Big Decision!
          </h3>

          <h2
            className="text-2xl md:text-3xl font-bold text-secondary"
            style={{
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            Stay at Turkey's
            <br />
            Most Luxurious Hotel!
          </h2>

          <p
            className="text-secondary leading-relaxed"
            style={{
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            It's normal to feel anxious when considering dental treatment abroad, but with
            VeraSmile Clinic's professional and caring medical team just know that you're in safe
            hands!
          </p>

          <p
            className="text-secondary leading-relaxed"
            style={{
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            Enjoy a seamless experience with world-class dental care, a luxury stay that feels
            like home and a dedicated team ensuring your comfort every step of the way.
          </p>

          <p
            className="text-blue-400 text-xl md:text-2xl font-semibold leading-relaxed"
            style={{
              fontFamily:
                '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            }}
          >
            Let us turn your dream smile into reality stress free and in the heart of the
            beautiful city Istanbul!
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src="/images/hotel.png"
              alt="Elite World Grand Hotel Istanbul"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Badge overlay */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
            <div className="text-xs text-gray-600">
              <span className="font-semibold">Istanbul MILORD</span>
              <span className="block text-[10px]">Hotel</span>
            </div>
          </div>

          <div className="absolute bottom-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-[10px] text-gray-500">SAFE</div>
                <div className="text-[10px] text-gray-500">TOURISM</div>
                <div className="text-xs font-bold text-accent">5★</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
