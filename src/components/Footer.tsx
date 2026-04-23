import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const footerServices = [
  { name: 'Køberrådgivning', href: '/ydelser/koeberraadgivning' },
  { name: 'Testamente & Arv', href: '/ydelser/testamente' },
  { name: 'Ægtepagt', href: '/ydelser/aegtepagt' },
  { name: 'Fremtidsfuldmagt', href: '/ydelser/fremtidsfuldmagt' },
  { name: 'Skilsmisse', href: '/ydelser/skilsmisse' },
  { name: 'Dødsbobehandling', href: '/ydelser/doedsbo' },
];

const footerLinks = [
  { name: 'Om os', href: '/om-os' },
  { name: 'Videos', href: '/videos' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'Byer vi dækker', href: '/byer' },
  { name: 'Privatlivspolitik', href: '/privatlivspolitik' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Thin amber accent line at top */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-40" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-gold.png"
                alt="LexJuris Advokatfirma"
                width={150}
                height={42}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              Erfaren advokat i Viborg, juridisk rådgivning til private i hele landet.
              Fast pris, direkte kontakt og gratis indledende samtale.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-5 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/lexjurisadvokater/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all hover:scale-105 text-slate-400"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/anette-malthe-christiansen-870437b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all hover:scale-105 text-slate-400"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/lexjurisadvokatfirma/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all hover:scale-105 text-slate-400"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a
                href="https://www.youtube.com/@lexjurisadvokatfirma4740/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-amber-600 hover:text-white transition-all hover:scale-105 text-slate-400"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="text-center sm:text-left">
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-white mb-4">
              Ydelser
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-slate-500 hover:text-amber-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links column */}
          <div className="text-center sm:text-left">
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-white mb-4">
              LexJuris
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-500 hover:text-amber-400 transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://lexjuris.dk/blog-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 hover:text-amber-400 transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact column */}
          <div className="text-center sm:text-left">
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-white mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span className="text-sm">
                  Gravene 2<br />
                  8800 Viborg
                </span>
              </li>
              <li>
                <a href="tel:70707122" className="flex items-center gap-2.5 text-sm hover:text-amber-400 transition-colors justify-center sm:justify-start">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  70 70 71 22
                </a>
              </li>
              <li>
                <a href="mailto:info@lexjuris.dk" className="flex items-center gap-2.5 text-sm hover:text-amber-400 transition-colors justify-center sm:justify-start">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  info@lexjuris.dk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-slate-800/80 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} LexJuris Advokatfirma. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
}
