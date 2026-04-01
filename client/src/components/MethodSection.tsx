import React from 'react'

export default function MethodSection() {
    return (
        <section id="method" className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1124&auto=format&fit=crop"
                                alt="Medical Consultation"
                                className="rounded-3xl shadow-2xl"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-600 rounded-full flex flex-col items-center justify-center text-white text-center p-4 shadow-xl">
                                <span className="text-2xl font-bold leading-none">15+</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Years Exp</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">The Novocare Method™</h2>
                        <div className="space-y-8">
                            {[
                                { step: "01", title: "Comprehensive Scan", desc: "Digital posture analysis and spinal thermal imaging to find the root cause." },
                                { step: "02", title: "Personalized Plan", desc: "A tailored roadmap combining adjustments, therapy, and lifestyle coaching." },
                                { step: "03", title: "Precision Adjustment", desc: "Gentle, effective techniques designed for your specific body type." },
                                { step: "04", title: "Active Maintenance", desc: "Ongoing support to ensure your pain never returns and you stay at peak performance." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="text-4xl font-bold text-brand-100 select-none">{item.step}</div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
