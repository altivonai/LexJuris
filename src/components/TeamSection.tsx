'use client';

import { useState } from 'react';
import { Mail, Phone, Smartphone, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { team } from '@/data/team';

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <>
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-14">
              Mød teamet
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.1}>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="group bg-white rounded-3xl border border-slate-200 overflow-hidden w-full flex flex-col hover:shadow-2xl hover:shadow-amber-500/10 hover:border-amber-300 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Photo */}
                  <div className="aspect-square relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-slate-900">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-sm text-amber-700 font-semibold uppercase tracking-wide">
                      {member.title}
                    </p>
                  </div>
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-amber-50 transition-colors shadow-lg"
                  >
                    <X className="w-5 h-5 text-slate-700" />
                  </button>

                  <div className="flex flex-col md:flex-row">
                    {/* Photo */}
                    <div className="md:w-2/5 aspect-square md:aspect-auto relative bg-gradient-to-br from-slate-50 to-slate-100">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Details */}
                    <div className="md:w-3/5 p-8">
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-slate-900">
                        {selectedMember.name}
                      </h3>
                      <p className="mt-1 text-sm text-amber-700 font-semibold uppercase tracking-wide">
                        {selectedMember.title}
                      </p>
                      
                      <p className="mt-6 text-sm text-slate-600 leading-relaxed">
                        {selectedMember.bio}
                      </p>

                      {/* Contact info */}
                      <div className="mt-8 space-y-3">
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Kontakt
                        </h4>
                        {selectedMember.email && (
                          <a
                            href={`mailto:${selectedMember.email}`}
                            className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-700 transition-colors group/link"
                          >
                            <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center group-hover/link:bg-amber-50 transition-colors">
                              <Mail className="w-4 h-4" />
                            </div>
                            <span>{selectedMember.email}</span>
                          </a>
                        )}
                        <a
                          href={`tel:${selectedMember.phone.replace(/\s/g, '')}`}
                          className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-700 transition-colors group/link"
                        >
                          <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center group-hover/link:bg-amber-50 transition-colors">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span>{selectedMember.phone}</span>
                        </a>
                        {selectedMember.mobile && (
                          <a
                            href={`tel:${selectedMember.mobile.replace(/\s/g, '')}`}
                            className="flex items-center gap-3 text-sm text-slate-600 hover:text-amber-700 transition-colors group/link"
                          >
                            <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center group-hover/link:bg-amber-50 transition-colors">
                              <Smartphone className="w-4 h-4" />
                            </div>
                            <span>{selectedMember.mobile}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
