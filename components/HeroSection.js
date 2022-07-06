import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center !mt-10"
      id="home"
    >
      <div className="container">
        <div className="grid grid-cols-[45%,55%] gap-5">
          <div className="flex flex-col justify-center">
            <h1 className="text-[80px] leading-[100px] font-black text-white">
              Cloud <span className="text-primary">DevOps</span> Consulting
              Services
            </h1>
            <p className="body_text mt-6">
              Let us take care of your software delivery process; with
              efficiency, accuracy, faster, and more frequently.
            </p>
            <div>
              <button className="__button mt-[60px]">Work with us</button>
            </div>
          </div>
          <div>
            <div className="scale-[1.4]">
              <Image
                src={"/img/hero_image.png"}
                width={1418}
                height={982}
                alt="DevOps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
