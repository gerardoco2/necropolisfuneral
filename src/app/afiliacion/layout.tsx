import Footer from "@/components/Footer";
import MainHeader from "@/components/MainHeader";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

import React, { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: ReactNode;
}
const layoutAfiliacion = ({ children }: Props) => {
  return (
    <>
      <ChakraProvider>{children}</ChakraProvider>
    </>
  );
};

export default layoutAfiliacion;
//   <html lang="en" suppressHydrationWarning>
//   <body className={`dark:bg-black dark:text-bodydark ${inter.className}`}>

//       {/* <ToasterContext /> */}
//       <ChakraProvider theme={themeChakra}>
//         <ColorModeScript
//           initialColorMode={themeChakra.config.initialColorMode}
//         />
//         {children}
//       </ChakraProvider>
//   </body>
// </html>
//
