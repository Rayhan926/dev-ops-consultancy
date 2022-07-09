import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import WhatWeCanDoSection from "../components/WhatWeCanDoSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevOps Consultancy</title>
      </Head>
      <div className="space-y-[90px] lg:space-y-[200px] [&>section]:scroll-mt-[120px] lg:[&>section]:scroll-mt-[150px]">
        <Header />
        <HeroSection />
        <AboutSection />
        <WhatWeCanDoSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
