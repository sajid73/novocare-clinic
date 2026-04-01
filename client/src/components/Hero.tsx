import { ArrowRight, ShieldCheck, Star } from "lucide-react"
import {motion} from "motion/react"
import React from 'react'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-50 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                            </span>
                            Top-Rated Clinic in the USA
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                            Reclaim Your <span className="text-brand-600">Active Life</span> Without Surgery.
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                            Experience the Novocare Method™—a personalized chiropractic approach designed to eliminate chronic pain, improve mobility, and restore your body's natural alignment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#booking" className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 group">
                                Start Your Recovery
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <div className="flex items-center gap-4 px-6 py-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <img
                                            key={i}
                                            src={`https://picsum.photos/seed/user${i}/100/100`}
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-white object-cover"
                                            referrerPolicy="no-referrer"
                                        />
                                    ))}
                                </div>
                                <div>
                                    <div className="flex text-amber-400">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                    <p className="text-xs font-semibold text-slate-500">500+ Happy Patients</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1706353399656-210cca727a33?q=80&w=1170&auto=format&fit=crop"
                                alt="Chiropractic Adjustment"
                                className="w-full aspect-[4/5] object-cover"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                        </div>

                        {/* Floating Stats Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]"
                        >
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                <ShieldCheck size={24} />
                            </div>
                            <p className="text-2xl font-bold text-slate-900">98%</p>
                            <p className="text-sm text-slate-500 font-medium">Success rate in chronic back pain relief</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
