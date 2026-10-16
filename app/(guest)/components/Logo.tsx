import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/images/logo/thesius-logo-white.svg"
      alt="Thesius Logo"
      width={35}
      height={35}
      className="w-30 h-20"
    />
  );
};

export default Logo;
