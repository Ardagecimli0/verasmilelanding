import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const galleryItems = [
  { image: '/images/1-copy-1.webp', title: 'Dental Implants', country: 'GB' },
  { image: '/images/2-copy-1 (1).webp', title: 'Dental Veneers', country: 'AU' },
  { image: '/images/3-copy-1 (1).webp', title: 'Smile Designs', country: 'GB' },
  { image: '/images/4-copy-1.webp', title: 'Dental Zirconium', country: 'TR' },
  { image: '/images/5-1.webp', title: 'Smile Makeover', country: 'US' },
  { image: '/images/6-1.webp', title: 'Hollywood Smile', country: 'AU' },
];

const countryFlags: Record<string, string> = {
  GB: '🇬🇧',
  AU: '🇦🇺',
  US: '🇺🇸',
  TR: '🇹🇷',
};

export default function BeforeAfterGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
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
    <section id="before-after" className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[380px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 px-4 flex items-center justify-between">
                    <span className="text-white font-medium text-sm">
                      {item.title}
                    </span>
                    <span className="text-xl">{countryFlags[item.country]}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === selectedIndex
                  ? 'bg-secondary'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
