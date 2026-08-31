import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import GlobalNetwork from "@/components/GlobalNetwork";
import Industries from "@/components/Industries";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <GlobalNetwork />
        <Industries />
        <Quote />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
