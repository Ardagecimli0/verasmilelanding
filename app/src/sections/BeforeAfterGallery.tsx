import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useTranslations } from '@/i18n';

const galleryItems = [
  { image: '/images/1-copy-1.webp', titleKey: 'dentalImplants', country: 'GB' },
  { image: '/images/2-copy-1 (1).webp', titleKey: 'dentalVeneers', country: 'AU' },
  { image: '/images/3-copy-1 (1).webp', titleKey: 'smileDesigns', country: 'GB' },
  { image: '/images/4-copy-1.webp', titleKey: 'dentalZirconium', country: 'TR' },
  { image: '/images/5-1.webp', titleKey: 'smileMakeover', country: 'US' },
  { image: '/images/6-1.webp', titleKey: 'hollywoodSmile', country: 'AU' },
];

const countryFlags: Record<string, { code: string; name: string }> = {
  GB: { code: 'gb', name: 'United Kingdom' },
  AU: { code: 'au', name: 'Australia' },
  US: { code: 'us', name: 'United States' },
  TR: { code: 'tr', name: 'Turkey' },
};

function FlagIcon({ country }: { country: string }) {
  const flag = countryFlags[country];
  if (!flag) return null;

  return (
    <img
      src={`https://flagcdn.com/24x18/${flag.code}.png`}
      srcSet={`https://flagcdn.com/48x36/${flag.code}.png 2x`}
      width="24"
      height="18"
      alt={flag.name}
      className="inline-block rounded-sm"
    />
  );
}

export default function BeforeAfterGallery() {
  const { t } = useTranslations('beforeAfter');
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
                    alt={t(item.titleKey)}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-primary py-3 px-4 flex items-center justify-between">
                    <span className="text-white font-medium text-sm">
                      {t(item.titleKey)}
                    </span>
                    <FlagIcon country={item.country} />
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
            aria-label={t('previousSlide')}
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
                aria-label={`${t('goToSlide')} ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label={t('nextSlide')}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}

