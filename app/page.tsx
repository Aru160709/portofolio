import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Page() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Education /><Services /><Contact />
      </main>
      <Footer />
    </>
  );
}
