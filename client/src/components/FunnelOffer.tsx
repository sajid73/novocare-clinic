import { CheckCircle2, ChevronRight } from 'lucide-react'
import React from 'react'

export default function FunnelOffer() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-brand-50 rounded-[40px] p-8 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-100 rounded-full -mr-32 -mt-32 opacity-50" />

                    <div className="relative z-10 text-center">
                        <span className="inline-block px-4 py-1 bg-brand-600 text-white text-xs font-bold rounded-full mb-6 uppercase tracking-widest">Limited Time Offer</span>
                        <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-8">New Patient Special</h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                            Get a complete Spinal Health Assessment, Digital Posture Scan, and your First Adjustment for just <span className="text-brand-600 font-bold">$49</span> (Value $249).
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-12">
                            {[
                                "Full Consultation & Exam",
                                "Digital Posture Analysis",
                                "X-Rays (if needed)",
                                "First Adjustment Included",
                                "Personalized Recovery Plan",
                                "No Long-term Contracts"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-brand-600" size={20} />
                                    <span className="font-medium text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#booking" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-600 text-white rounded-2xl font-bold text-xl hover:bg-brand-700 transition-all shadow-2xl shadow-brand-200">
                            Claim Your $49 Voucher
                            <ChevronRight size={24} />
                        </a>
                        <p className="mt-6 text-sm text-slate-500 font-medium">Only 12 vouchers left for this month!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
