import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import MethodSection from "./components/MethodSection";
import Testimonials from "./components/Testimonials";
import FunnelOffer from "./components/FunnelOffer";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <MethodSection />
        <Testimonials />
        <FunnelOffer />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
