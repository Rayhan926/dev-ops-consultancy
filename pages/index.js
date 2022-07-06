import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import WhatWeCanDoSection from "../components/WhatWeCanDoSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevOps Consultancy</title>
      </Head>
      <div className="space-y-[150px]">
        <HeroSection />
        <AboutSection />
        <WhatWeCanDoSection />
      </div>
    </>
  );
}
