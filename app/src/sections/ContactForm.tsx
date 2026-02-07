import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslations } from '@/i18n';

const countries = [
  { code: 'TR', nameKey: 'TR', dial: '+90' },
  { code: 'US', nameKey: 'US', dial: '+1' },
  { code: 'GB', nameKey: 'GB', dial: '+44' },
  { code: 'DE', nameKey: 'DE', dial: '+49' },
  { code: 'FR', nameKey: 'FR', dial: '+33' },
  { code: 'IT', nameKey: 'IT', dial: '+39' },
  { code: 'ES', nameKey: 'ES', dial: '+34' },
  { code: 'NL', nameKey: 'NL', dial: '+31' },
  { code: 'BE', nameKey: 'BE', dial: '+32' },
  { code: 'CH', nameKey: 'CH', dial: '+41' },
  { code: 'AT', nameKey: 'AT', dial: '+43' },
  { code: 'SE', nameKey: 'SE', dial: '+46' },
  { code: 'NO', nameKey: 'NO', dial: '+47' },
  { code: 'DK', nameKey: 'DK', dial: '+45' },
  { code: 'FI', nameKey: 'FI', dial: '+358' },
  { code: 'AU', nameKey: 'AU', dial: '+61' },
  { code: 'CA', nameKey: 'CA', dial: '+1' },
  { code: 'RU', nameKey: 'RU', dial: '+7' },
  { code: 'UA', nameKey: 'UA', dial: '+380' },
  { code: 'PL', nameKey: 'PL', dial: '+48' },
];

export default function ContactForm() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslations('contactForm');
  const { t: tCountries } = useTranslations('countries');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <motion.div
      id="contact-form"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-primary rounded-2xl p-6 md:p-8"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
        {t('title')}
        <br />
        {t('titleLine2')}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-white/90 mb-1">
            {t('fullNameLabel')}<span className="text-red-300">*</span>
          </label>
          <Input
            type="text"
            required
            placeholder=""
            className="w-full bg-white border-none rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
          />
        </div>

        <div>
          <label className="block text-sm text-white/90 mb-1">
            {t('emailLabel')}<span className="text-red-300">*</span>
          </label>
          <Input
            type="email"
            required
            placeholder=""
            className="w-full bg-white border-none rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
          />
        </div>

        <div>
          <label className="block text-sm text-white/90 mb-1">
            {t('phoneLabel')}<span className="text-red-300">*</span>
          </label>
          <div className="flex gap-2">
            <Select
              value={selectedCountry.code}
              onValueChange={(value) => {
                const country = countries.find((c) => c.code === value);
                if (country) setSelectedCountry(country);
              }}
            >
              <SelectTrigger className="w-[140px] bg-white border-none rounded-lg text-gray-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="max-h-[200px]">
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {tCountries(country.nameKey)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="tel"
              required
              placeholder={selectedCountry.dial}
              className="flex-1 bg-white border-none rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-white/90 mb-1">{t('messageLabel')}</label>
          <Textarea
            rows={4}
            placeholder=""
            className="w-full bg-white border-none rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-white/50 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-accent-hover text-white font-medium py-3 rounded-full transition-all duration-200 disabled:opacity-70"
        >
          {isSubmitting ? t('submitting') : isSubmitted ? t('submitted') : t('submitButton')}
        </Button>
      </form>
    </motion.div>
  );
}

