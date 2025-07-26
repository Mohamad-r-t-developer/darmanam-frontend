import iranSansFont from "@/constants/localFont";
import type { Metadata } from "next";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SocketProvider } from "@/providers/SocketProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import RequestProvider from "@/providers/RequestProvider";


export const metadata: Metadata = {
  title: "درمانم",
  description: "مراقبت های درمانی تو به ما بسپار",
  other: {
    "apple-mobile-web-app-title": "darmanam",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body
        className={`${iranSansFont.variable} antialiased shadow-primary-1 m-auto  max-w-screen-xs`}
      >
        <ReactQueryProvider>
          <RequestProvider>
            <SocketProvider>
              <Toaster />
              {children}
            </SocketProvider>
          </RequestProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
