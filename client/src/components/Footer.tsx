import { Activity, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

const socials = [
    { icon: Facebook, href: "https://www.facebook.com/novocare" },
    { icon: Twitter, href: "https://twitter.com/novocare" },
    { icon: Instagram, href: "https://www.instagram.com/novocare" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/novocare" },
];


export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
                                <Activity size={20} />
                            </div>
                            <span className="text-xl font-bold tracking-tight">Novocare</span>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-8">
                            Novocare is dedicated to providing the highest quality chiropractic care in the USA. Our mission is to help you live a life free from pain and full of vitality.
                        </p>
                        <div className="flex gap-4">
                            {socials.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={i}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-600 transition-colors"
                                        target="_blank"
                                    >
                                        <Icon className="w-5 h-5 text-slate-400" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6">Quick Links</h5>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                            <li><a href="#method" className="hover:text-white transition-colors">Our Method</a></li>
                            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6">Legal</h5>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Medical Disclaimer</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/10 text-center text-slate-500 text-xs">
                    <p>© 2026 Novocare Chiropractic Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
