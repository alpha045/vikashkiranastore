import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import ProblemsSection from "../components/ProblemsSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTA";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemsSection />
      <Features />
      <Reviews />
      <CTASection />
      <Footer />
      
    </>
  );
}

export default Home;