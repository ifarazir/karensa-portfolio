import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import Clients from "@/components/home/Clients";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="framed divide-y divide-border">
          <Hero />
          <Clients />
          <Stats />
          <Services />
          <Work />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
