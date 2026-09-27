import { Onest, Space_Grotesk } from "next/font/google";

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-onest",
  display: "swap",
});
