import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import WhatWeCanDoSection from "../components/WhatWeCanDoSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevOps Consultancy</title>
      </Head>
      <div className="space-y-[200px]">
        <HeroSection />
        <AboutSection />
        <WhatWeCanDoSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
