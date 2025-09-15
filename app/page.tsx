
import About from "./components/about/about";
import Hero from "./components/hero/hero";
import Clients from "./components/clients/clients";
import Contact from "./components/contacts/contacts";
import Footer from "./layout/footer";
import PriceSection from "./components/price/PriceSection";

export default function Home() {


  return (
    <main className="">


      <Hero />
      <About />
      <PriceSection />
      <Clients />
      <Contact />
      <Footer />

    </main>
  );
}
