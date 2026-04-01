import { motion } from "motion/react";
import { HeartPulse, Users, Zap } from 'lucide-react';
import React from 'react'

export default function Features() {
    const features = [
        {
            icon: <Zap className="text-brand-600" />,
            title: "Rapid Relief",
            description: "Targeted adjustments that provide immediate pressure release and pain reduction."
        },
        {
            icon: <HeartPulse className="text-brand-600" />,
            title: "Holistic Health",
            description: "We don't just treat symptoms; we optimize your entire nervous system for long-term health."
        },
        {
            icon: <Users className="text-brand-600" />,
            title: "Expert Care",
            description: "Our board-certified chiropractors have over 15 years of experience in spinal health."
        }
    ];

    return (
        <section id="benefits" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Why Choose Novocare?</h2>
                    <p className="text-lg text-slate-600">We combine traditional chiropractic wisdom with modern diagnostic technology to deliver results that last.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
                        >
                            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-8">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{f.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{f.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
