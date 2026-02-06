import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Before & After', href: '#before-after' },
  { label: 'Our Doctors', href: '#doctors' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4">

        <div className="relative flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 -ml-3 lg:ml-0 lg:static lg:transform-none lg:left-0">
            <img
              src="/images/logo.png"
              alt="VeraSmile Logo"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden ml-auto">
              <button className="p-2 text-gray-700 hover:text-primary transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white">
              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg font-medium text-gray-700 hover:text-primary transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
