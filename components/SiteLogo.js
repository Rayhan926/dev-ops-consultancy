import Image from "next/image";
import Link from "next/link";
import React from "react";

const SiteLogo = () => {
  return (
    <Link href="/">
      <a>
        <Image
          src={"/img/devops-consultancy.png"}
          width={161}
          height={72}
          alt="DevOps Consultancy"
        />
      </a>
    </Link>
  );
};

export default SiteLogo;
