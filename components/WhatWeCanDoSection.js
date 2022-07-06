import React from "react";
import CloudStrategyIcon from "./Icons/CloudStrategyIcon";
import CloudSecurityIcon from "./Icons/CloudSecurityIcon";
import CloudMigration from "./Icons/CloudMigration";
import DatabaseMigration from "./Icons/DatabaseMigration";
import DevOpsAutomation from "./Icons/DevOpsAutomation";
import ManagedCloudService from "./Icons/ManagedCloudService";

const services = [
  {
    icon: <CloudStrategyIcon />,
    title: "Cloud Strategy",
    description:
      "Expert cloud consulting services to help your business take advantage of the cloud .",
  },
  {
    icon: <CloudSecurityIcon />,
    title: "Cloud Security",
    description:
      "Expert cloud consulting services to help your business take advantage of the cloud .",
  },
  {
    icon: <CloudMigration />,
    title: "Cloud Migration",
    description:
      "Expert cloud consulting services to help your business take advantage of the cloud .",
  },
  {
    icon: <DatabaseMigration />,
    title: "Database Migration",
    description:
      "Expert cloud consulting services to help your business take advantage of the cloud .",
  },
  {
    icon: <DevOpsAutomation />,
    title: "DevOps Automation",
    description:
      "Expert cloud consulting services to help your business take advantage of the cloud .",
  },
  {
    icon: <ManagedCloudService />,
    title: "Managed Cloud Services",
    description:
      "Expert cloud consulting services to help your business take advantage of the cloud .",
  },
];

const WhatWeCanDoSection = () => {
  return (
    <section id="what-we-do">
      <div className="container">
        <h2 className="title_md text-center">
          What We <span className="text-primary">Can Do</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7 xl:gap-x-[30px] xl:gap-y-[60px] mt-[100px]">
          {services.map(({ icon, description, title }, i) => (
            <div key={i} className="rounded-[16px] bg-white/5 px-[30px] py-10">
              <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full">
                {icon}
              </div>
              <h4 className="text-[24px] leading-[34px] font-black text-white mb-3 mt-6">
                {title}
              </h4>
              <p className="body_text">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanDoSection;
