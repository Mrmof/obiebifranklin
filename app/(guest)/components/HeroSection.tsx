import colors from "@/lib/constants/colors";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full md:w-2/4 md:mx-auto p-5">
        <div className="relative ">
          <h1 className="font-regular text-[19px] mt-25 text-center lg:text-right text-white">
            Hello! I am{" "}
            <span style={{ color: colors.brand }}>Obiebi Franklin E.</span>
          </h1>
          <Image
            src="/images/vectors/arrow.svg"
            alt="Arrow"
            width={78}
            height={47}
            className="hidden lg:block absolute top-[50%] left-[45%]"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <Image
            src="/images/myPhoto.svg"
            alt="Arrow"
            width={258}
            height={258}
            className="flex-1"
          />
          <div className="flex-1">
            <h1 className="font-regular text-[17px] text-white">
              A Software developer who
            </h1>
            <h1 className="font-regular text-[17px] text-white mt-2">
              Designs <span style={{ color: colors.brand }}>research</span>{" "}
              studies, <span style={{ color: colors.brand }}>analyzes</span>{" "}
              data and,{" "}
              <span style={{ color: colors.brand }}>develops and deploys</span>{" "}
              softwares!
            </h1>
            <p className="font-regular text-[11px] text-white mt-2">
              Let's bring your objectives to reality. You know it's important!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
            <h1 className="font-regular text-[17px] text-white">
              I am a software developer | currently working at <span style={{ color: colors.brand }}>Schoolville</span>.
            </h1>

            <h1 className="font-regular text-[17px] text-white">
             A researcher, data analyst and web application developer with <span style={{ color: colors.brand }}>5+ years experience</span>, specialized in the production of scalable web applications, design of research studies and obtaining reliable insights from data using analytical and technological skills. 
            </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
