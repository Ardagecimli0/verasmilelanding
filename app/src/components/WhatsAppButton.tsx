import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChat = () => {
    window.open('https://api.whatsapp.com/send?phone=905494755287&text=What are the options and pricing for dental treatment', '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="currentColor" />
      </motion.button>

      {/* Chat Widget Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-50"
            />

            {/* Chat Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed bottom-24 right-6 z-50 w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#075E54] px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {/* Logo */}
                  {/* Logo */}
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src="/images/logo-cevredent.png"
                      alt="CevreDent"
                      className="w-full h-auto object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">CevreDent</h4>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#25D366] rounded-full"></span>
                      <span className="text-white/80 text-xs">Online</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Background with Pattern */}
              <div
                className="bg-[#E5DDD5] px-4 py-6 min-h-[180px]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-30 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm60 30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10zm-60 0c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.5-10-10z' fill='%23D1C7BB' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat',
                }}
              >
                {/* Welcome Message Bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#DCF8C6] rounded-lg rounded-tl-none p-4 shadow-sm max-w-[280px]"
                >
                  <p className="text-gray-800 text-sm leading-relaxed">
                    Welcome to  CevreDent Clinic! 😊
                  </p>
                  <p className="text-gray-800 text-sm leading-relaxed mt-2">
                    Have questions about our services, packages, or how to get started?
                  </p>
                  <p className="text-gray-800 text-sm leading-relaxed mt-1">
                    We're here to help
                  </p>
                </motion.div>
              </div>

              {/* Footer with CTA Button */}
              <div className="bg-white px-4 py-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOpenChat}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  send us a message!
                </motion.button>

                <p className="text-center text-gray-400 text-xs mt-3">
                  © 2025 CevreDent
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
