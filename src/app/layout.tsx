"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { ThemeProvider } from "next-themes";
import { Inter } from 'next/font/google';
import Lines from "@/components/Lines";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    // <html lang="en">
    //   <body suppressHydrationWarning={true}>
    //     <div className="dark:bg-boxdark-2 dark:text-bodydark">
    //       {loading ? <Loader /> : children}
    //     </div>
    //   </body>
    // </html>
    <html lang="en" suppressHydrationWarning>
    <body className={`dark:bg-black ${inter.className}`}>
      <ThemeProvider
        enableSystem={false}
        attribute="class"
        defaultTheme="light"
      >
        {/* <Lines /> */}
        <MainHeader />
        {/* <ToasterContext /> */}
        {children}
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </body>
  </html>
  );
}
