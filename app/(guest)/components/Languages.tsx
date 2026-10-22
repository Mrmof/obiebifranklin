import React from "react";
import Image from "next/image";
import colors from "@/lib/constants/colors";

const Languages = () => {
  const languages = [
    "html.svg",
    "css.svg",
    "tailwindcss.svg",
    "bootstrap.svg",
    "js.svg",
    "php.svg",
    "laravel.svg",
    "mysql.svg",
    "nextjs.svg",
    "excel.svg",
    "powerpoint.svg",
    "powerbi.svg",
    "sql.svg",
  ];
  return (
    <div>
      <div>
        <div className="w-full sm:w-2/3 flex justify-center gap-1 flex-wrap mx-auto">
          {languages.map((language, index) => (
            <div
              key={index}
              className="w-11 h-11 border rounded-[50%] bg-[#251C31] flex items-center justify-center"
            >
              <Image
                src={`images/languages/${language}`}
                width={25}
                height={25}
                alt="language icon"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-3">
          <Image
            src="images/vectors/line-right.svg"
            className="-scale-x-100"
            width={100}
            height={200}
            alt="line"
          />
          <Image
            src="images/vectors/line-right.svg"
            width={100}
            height={200}
            alt="line"
          />
        </div>
        <div className="relative flex justify-center py-3">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-45 h-45 rounded-full bg-[linear-gradient(135deg,#763CAC_0%,#320F85_100%)] blur-3xl" />
          <div
            className="relative z-10 w-45 h-45 flex items-center justify-center rounded-full"
            style={{ backgroundColor: colors.brand }}
          >
            <Image
              src="/images/logo/thesius-logo-white.svg"
              alt="Thesius Logo"
              width={160}
              height={160}
              className="w-40 h-40 object-contain"
            />
          </div>
            <Image
              src="/images/vectors/ellipse_1.svg"
              alt="ellipse 1"
              width={160}
              height={160}
              className="w-full h-40 bottom-[2%] object-contain absolute"
            />
            <Image
              src="/images/vectors/ellipse_2.svg"
              alt="ellipse 1"
              width={160}
              height={160}
              className="w-full h-40 bottom-[2%] object-contain absolute"
            />
          
          
        </div>
        
      </div>
    </div>
  );
};

export default Languages;
