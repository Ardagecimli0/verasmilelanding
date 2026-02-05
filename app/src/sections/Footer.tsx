import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/images/logo-cevredent.png"
              alt="CevreDent Logo"
              className="h-10 md:h-12 w-auto brightness-0 invert"
            />
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">
                  Mecidiyeköy Mahallesi, Büyükdere Cd. Ocak Apt No:91 Kat 2 Daire:2, 34387 Şişli/İstanbul
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+90 549 475 52 87</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@cevredent.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm">
            Copyright@2026 CevreDent
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
