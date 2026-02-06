import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    image: '/images/testimonial-1.png',
    quote: 'From hiding to smiling brightly.',
    name: 'Sarah J.',
    location: 'from UK',
  },
  {
    image: '/images/testimonial-2.png',
    quote: 'The best dental experience I\'ve ever had. Highly recommended!',
    name: 'Michael K.',
    location: 'from Germany',
  },
  {
    image: '/images/testimonial-3.png',
    quote: 'Goodbye expensive dental care!',
    name: 'Alberto',
    location: 'from USA',
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);



  return (
    <section id="testimonials" className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-10"
        >
          What Our Patients Say About Us
        </motion.h2>

        {/* Mobile: Carousel - One large card at a time */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden max-w-md mx-auto"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-[3/4]"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name || 'Patient testimonial'}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <Play className="w-7 h-7 text-secondary ml-1" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Quote text */}
                    {(testimonial.quote || testimonial.name) && (
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        {testimonial.quote && (
                          <p className="text-white text-sm font-medium text-center mb-1">
                            {testimonial.quote}
                          </p>
                        )}
                        {testimonial.name && (
                          <p className="text-white/90 text-xs text-center">
                            <span className="text-primary-light font-medium">
                              {testimonial.name}
                            </span>{' '}
                            {testimonial.location && (
                              <span className="text-white/70">{testimonial.location}</span>
                            )}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Logo watermark */}
                    <div className="absolute top-4 left-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <span className="text-white/80 text-xs font-light">V</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows and Dots */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === selectedIndex
                    ? 'bg-white'
                    : 'bg-white/40 hover:bg-white/60'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Desktop: All 3 videos side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-[3/4]"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name || 'Patient testimonial'}
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Play className="w-7 h-7 text-secondary ml-1" fill="currentColor" />
                </motion.div>
              </div>

              {/* Quote text */}
              {(testimonial.quote || testimonial.name) && (
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {testimonial.quote && (
                    <p className="text-white text-sm font-medium text-center mb-1">
                      {testimonial.quote}
                    </p>
                  )}
                  {testimonial.name && (
                    <p className="text-white/90 text-xs text-center">
                      <span className="text-primary-light font-medium">
                        {testimonial.name}
                      </span>{' '}
                      {testimonial.location && (
                        <span className="text-white/70">{testimonial.location}</span>
                      )}
                    </p>
                  )}
                </div>
              )}

              {/* Logo watermark */}
              <div className="absolute top-4 left-4">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <span className="text-white/80 text-xs font-light">V</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center mt-8 space-y-4"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
            Ready To Get Started?
          </h3>
          <Button
            onClick={() => window.open('https://api.whatsapp.com/send?phone=905494755287&text=What are the options and pricing for dental treatment', '_blank')}
            className="bg-secondary hover:bg-secondary-dark text-white px-6 py-3 rounded-lg font-medium group transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Get A Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
