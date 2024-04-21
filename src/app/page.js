// import Contact from "@/components/Contact";
import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Gallery from "@/components/Gallery";
import Call from "@/components/Call";
import Services from "@/components/Services";
import ServicesTwo from "@/components/ServicesTwo";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <ServicesTwo />
      <ChooseUs />
      <Latest />
      <Gallery />
      <Call />
      <ContactUs />
      {/* <Contact /> */}
    </div>
  );
}
