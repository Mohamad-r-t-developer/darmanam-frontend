import localFont from "next/font/local";

const iranSansFont = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSans/IRANSansXFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansXFaNum-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansXFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansXFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansXFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iransans",
  style: "normal",
  display: "block",
});

export default iranSansFont;
