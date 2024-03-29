import Image from "next/image";
import React from "react";

const projects = [
  {
    projectLogoSrc: "/img/project_logo_1.png",
    shortDescription: "Property Management",
    projectImgSrc: "/img/project_1.jpg",
  },
  {
    projectLogoSrc: "/img/project_logo_2.png",
    shortDescription: "Educational Web Platform",
    projectImgSrc: "/img/project_2.jpg",
  },
  {
    projectLogoSrc: "/img/project_logo_3.png",
    shortDescription: "Educational Web Platform",
    projectImgSrc: "/img/project_3.png",
  },
  {
    projectLogoSrc: "/img/project_logo_1.png",
    shortDescription: "Educational Web Platform",
    projectImgSrc: "/img/project_1.jpg",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="title_md text-center">
          Our <span className="text-primary">Projects</span>
        </h2>

        <div className="mt-[50px] lg:mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-[30px]">
          {projects.map(
            ({ projectImgSrc, projectLogoSrc, shortDescription }, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-[20px] px-4 p-[30px] lg:p-10 lg:pb-0"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="max-w-[122px] lg:max-w-[250px]">
                    <Image
                      src={projectLogoSrc}
                      width={250}
                      height={60}
                      alt="Project Logo"
                    />
                  </div>
                  <p className="body_text mt-2 lg:mt-4">{shortDescription}</p>
                </div>

                <div className="mt-10 lg:mt-[60px] overflow-hidden rounded-t-[16px]">
                  <Image
                    layout="responsive"
                    src={projectImgSrc}
                    width={525}
                    height={373}
                    alt="Project title"
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
