import localFont from "next/font/local";

export const bungee = localFont({
  src: "../fonts/bungee/Bungee-Regular.ttf",
  weight:"400",
  display: "swap",
  variable: "--font-bungee",
  fallback: ["sans-serif"],
});

export const changa = localFont({
  src: [
    {
      path: "../fonts/changa/Changa-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/changa/Changa-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/changa/Changa-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/changa/Changa-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/changa/Changa-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/changa/Changa-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/changa/Changa-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-changa",
  fallback: ["sans-serif"],
});
