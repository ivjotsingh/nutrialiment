import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Included from "./components/Included";
import WhyMansi from "./components/WhyMansi";
import Stories from "./components/Stories";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppBubble from "./components/WhatsAppBubble";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  useLenis();

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-cream font-sans">
        <a className="skip-link" href="#main-content" data-testid="skip-to-content-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Services />
          <Process />
          <Included />
          <WhyMansi />
          <Stories />
          <Booking />
          <Contact />
        </main>
        <Footer />
        <WhatsAppBubble />
      </div>
    </MotionConfig>
  );
}
