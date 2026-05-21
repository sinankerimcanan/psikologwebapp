import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experts from "./components/Experts";
import Services from "./components/Services";
import Approach from "./components/Approach";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experts />
      <Services />
      <Approach />
      <FAQ />
      <Footer />
    </main>
  );
}
