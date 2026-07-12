import NavBar from "./components/navbar";
import Hero from "./components/hero";
import { BackgroundRippleEffect } from "./components/ui/background-ripple-effect";
import HowItWorks from "./components/how_it_works";
import Features from "./components/features";
import Level from "./components/level";
import Dashboard from "./components/dashboard";
import Feedback from "./components/feedback";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen overflow-hidden">
        <BackgroundRippleEffect />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20">
          <Hero />
          <HowItWorks />
          <Features />
          <Level />
          <Dashboard />
          <Feedback />   
        </div>
      </main>
      <Footer />
    </>
  );
}
