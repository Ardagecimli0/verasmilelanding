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

const countries = [
  { code: 'TR', name: 'Turkey (Türkiye)', dial: '+90' },
  { code: 'US', name: 'United States', dial: '+1' },
  { code: 'GB', name: 'United Kingdom', dial: '+44' },
  { code: 'DE', name: 'Germany', dial: '+49' },
  { code: 'FR', name: 'France', dial: '+33' },
  { code: 'IT', name: 'Italy', dial: '+39' },
  { code: 'ES', name: 'Spain', dial: '+34' },
  { code: 'NL', name: 'Netherlands', dial: '+31' },
  { code: 'BE', name: 'Belgium', dial: '+32' },
  { code: 'CH', name: 'Switzerland', dial: '+41' },
  { code: 'AT', name: 'Austria', dial: '+43' },
  { code: 'SE', name: 'Sweden', dial: '+46' },
  { code: 'NO', name: 'Norway', dial: '+47' },
  { code: 'DK', name: 'Denmark', dial: '+45' },
  { code: 'FI', name: 'Finland', dial: '+358' },
  { code: 'AU', name: 'Australia', dial: '+61' },
  { code: 'CA', name: 'Canada', dial: '+1' },
  { code: 'RU', name: 'Russia', dial: '+7' },
  { code: 'UA', name: 'Ukraine', dial: '+380' },
  { code: 'PL', name: 'Poland', dial: '+48' },
];

export default function ContactForm() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        Shape Your Smile
        <br />
        with VeraSmile
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-white/90 mb-1">
            Full Name<span className="text-red-300">*</span>
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
            Email<span className="text-red-300">*</span>
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
            Phone number<span className="text-red-300">*</span>
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
                    {country.name}
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
          <label className="block text-sm text-white/90 mb-1">Message</label>
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
          {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted!' : 'Submit'}
        </Button>
      </form>
    </motion.div>
  );
}
