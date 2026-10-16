import type { Metadata } from "next";
import { Geist, Geist_Mono, Preahvihear } from "next/font/google";
import "./globals.css";

const preahvihear = Preahvihear({
  variable: "--font-preahvihear",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "My Portfolio | Obiebi Franklin E.",
  description: "A portfolio of my tech progress and projects developed.",
   icons: {
    icon: "/images/logo/thesius-favicon-color.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` ${preahvihear.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
