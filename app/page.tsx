import About from "@/components/About";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Expertise />
      <Work />
      <Journey />
      <Contact />
    </main>
  );
}
