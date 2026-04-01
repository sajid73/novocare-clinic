import { Star } from 'lucide-react'
import React from 'react'

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-brand-900 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-400 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Real Results, Real People</h2>
                    <p className="text-brand-200 text-lg">Join thousands who have found relief through our specialized care.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sarah Jenkins",
                            role: "Marathon Runner",
                            text: "I thought my running days were over due to chronic hip pain. After 6 weeks at Novocare, I'm back on the trail and feeling stronger than ever.",
                            img: "https://picsum.photos/seed/sarah/200/200"
                        },
                        {
                            name: "Michael Chen",
                            role: "Software Engineer",
                            text: "Years of sitting at a desk ruined my posture and caused daily headaches. The Novocare Method fixed the root cause, not just the symptoms.",
                            img: "https://picsum.photos/seed/michael/200/200"
                        },
                        {
                            name: "Elena Rodriguez",
                            role: "Yoga Instructor",
                            text: "As someone who works with bodies, I'm very picky. The precision and knowledge at Novocare is unmatched in the industry.",
                            img: "https://picsum.photos/seed/elena/200/200"
                        }
                    ].map((t, i) => (
                        <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                            <div className="flex text-amber-400 mb-6">
                                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                            </div>
                            <p className="text-lg italic mb-8 text-brand-50">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                                <div>
                                    <h5 className="font-bold">{t.name}</h5>
                                    <p className="text-sm text-brand-300">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
