import { motion } from "motion/react";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { FormEvent, useState } from "react";

export default function BookingForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <section id="booking" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">Book Your Consultation</h2>
                        <p className="text-lg text-slate-600 mb-12">
                            Take the first step towards a pain-free life. Fill out the form and our wellness coordinator will contact you within 2 hours to schedule your visit.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Visit Us</p>
                                    <p className="text-slate-600">123 Wellness Way, Austin, TX 78701</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Call Us</p>
                                    <p className="text-slate-600">(512) 555-0199</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Hours</p>
                                    <p className="text-slate-600">Mon-Fri: 8am - 7pm | Sat: 9am - 2pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 lg:p-12 rounded-[32px] shadow-2xl border border-slate-100">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h3>
                                <p className="text-slate-600">Our team will call you shortly to confirm your appointment. We look forward to seeing you!</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="(555) 000-0000"
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Primary Concern</label>
                                    <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all appearance-none">
                                        <option>Back Pain</option>
                                        <option>Neck Pain</option>
                                        <option>Headaches / Migraines</option>
                                        <option>Sports Injury</option>
                                        <option>General Wellness</option>
                                    </select>
                                </div>
                                <button type="submit" className="w-full py-5 bg-brand-600 text-white rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 mt-4">
                                    Book My $49 Visit
                                </button>
                                <p className="text-center text-xs text-slate-400">By submitting, you agree to our terms and privacy policy.</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
