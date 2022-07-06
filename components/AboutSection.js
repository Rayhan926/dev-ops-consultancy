import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about-us">
      <div className="container">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <div className="relative">
              <Image
                src="/img/about_img.png"
                width={575}
                height={431}
                className="relative z-[2]"
              />
              <img
                src="/img/light.png"
                alt="light"
                className="absolute left-1/2 -translate-x-1/2 top-[40%] -translate-y-1/2"
              />
            </div>
          </div>
          <div>
            <h2 className="title_md">
              About Our <span className="text-primary">DevOps</span> Consultancy
            </h2>
            <p className="body_text mt-[30px]">
              <span className="font-bold text-primary">DevOps Consultancy</span>{" "}
              is a deeply credentialed, award-winning provider of AWS and DevOps
              consulting and implementation services. We are an integrated team
              of skilled engineers, architects, developers, project managers,
              and sales & marketing professionals who are passionate about
              client success, software excellence, and innovation. We enable our
              clients to deliver better products faster and create awesome
              customer experiences. Rapyder is a Global cloud consulting
              Partner, providing Cloud Consulting,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
