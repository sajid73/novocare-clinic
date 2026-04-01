import { Activity } from 'lucide-react'
import React from 'react'

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white">
                            <Activity size={24} />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-slate-900">Novocare</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Benefits</a>
                        <a href="#method" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Our Method</a>
                        <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Success Stories</a>
                        <a href="#booking" className="px-5 py-2.5 bg-brand-600 text-white rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200">
                            Book Appointment
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
