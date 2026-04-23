'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, Home, FileText, Heart, Shield, Scale, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { name: 'Køberrådgivning', href: '/ydelser/koeberraadgivning', icon: Home },
  { name: 'Testamente & Arv', href: '/ydelser/testamente', icon: FileText },
  { name: 'Ægtepagt & Særeje', href: '/ydelser/aegtepagt', icon: Heart },
  { name: 'Fremtidsfuldmagt', href: '/ydelser/fremtidsfuldmagt', icon: Shield },
  { name: 'Skilsmisse & Bodeling', href: '/ydelser/skilsmisse', icon: Scale },
  { name: 'Dødsbobehandling', href: '/ydelser/doedsbo', icon: BookOpen },
];

const navItems = [
  { name: 'Ydelser', href: '/ydelser', children: services },
  { name: 'Om os', href: '/om-os' },
  { name: 'Byer', href: '/byer' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/60'
          : 'bg-white'
      }`}
    >
      {/* Thin cyan accent line at top */}
      <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-blue.png"
              alt="LexJuris Advokatfirma"
              width={150}
              height={42}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2 transition-colors group"
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-3"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl shadow-slate-950/20 border border-slate-200 p-2 min-w-[280px]">
                          {item.children.map((child) => {
                            const Icon = child.icon;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group/item"
                              >
                                <div className="w-9 h-9 rounded-lg bg-slate-100 group-hover/item:bg-cyan-50 flex items-center justify-center transition-colors">
                                  <Icon className="w-4 h-4 text-slate-500 group-hover/item:text-cyan-600 transition-colors" />
                                </div>
                                <span className="font-medium">{child.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2 transition-colors group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:70707122" className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-cyan-600 transition-colors">
              <Phone className="w-4 h-4" />
              70 70 71 22
            </a>
            <Link
              href="/gratis-samtale"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all hover:scale-[1.02]"
            >
              Book gratis samtale
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate-600 p-2"
            aria-label={mobileOpen ? 'Luk menu' : 'Åbn menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-[calc(4rem+2px)] bg-white z-40"
          >
            <div className="px-6 py-6 space-y-1 h-full overflow-y-auto">
              {/* Ydelser accordion */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-4 text-lg font-medium text-slate-900"
                >
                  Ydelser
                  <ChevronDown className={`w-5 h-5 text-cyan-500 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-3 space-y-1">
                        <Link
                          href="/ydelser"
                          className="block py-2.5 text-sm text-cyan-600 font-medium"
                          onClick={() => setMobileOpen(false)}
                        >
                          Alle ydelser
                        </Link>
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-3 py-2.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            <s.icon className="w-4 h-4 text-slate-600" />
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/om-os"
                className="block py-4 text-lg font-medium text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                Om os
              </Link>
              <Link
                href="/byer"
                className="block py-4 text-lg font-medium text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                Byer
              </Link>
              <Link
                href="/kontakt"
                className="block py-4 text-lg font-medium text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                Kontakt
              </Link>

              <div className="pt-6 space-y-4 border-t border-slate-200">
                <a
                  href="tel:70707122"
                  className="flex items-center justify-center gap-2 text-sm text-slate-500"
                >
                  <Phone className="w-4 h-4" />
                  70 70 71 22
                </a>
                <Link
                  href="/gratis-samtale"
                  className="block text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm px-5 py-3.5 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Book gratis samtale
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
