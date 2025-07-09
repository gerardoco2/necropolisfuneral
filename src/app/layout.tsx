"use client";
import { SessionProvider } from "next-auth/react";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { ThemeProvider, useTheme } from "next-themes";
import { Inter } from "next/font/google";
import Lines from "@/components/Lines";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { Session } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const themeChakra = extendTheme({
    config: {
      initialColorMode: "dark", // Set default to dark mode
      useSystemColorMode: false, // Disable system color mode
    },
  });

  useEffect(() => {
    setTheme("dark");
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
    <SessionProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`dark:bg-black dark:text-bodydark ${inter.className}`}>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="dark"
          >
            <ChakraProvider theme={themeChakra}>
              <ColorModeScript
                initialColorMode={themeChakra.config.initialColorMode}
              />
              {children}
            </ChakraProvider>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
