"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { push } = useRouter();

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const openWhatsapp = () => {
    push("https://wa.link/qbvwtr");
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={openWhatsapp}
          aria-label="scroll to top"
          className="hover:shadow-signUp flex h-20 w-20 animate-bounce cursor-pointer items-center  justify-center transition duration-300 ease-in-out hover:opacity-80"
        >
          <Image
            src={"/images/logo/whatsapp.png"}
            alt={"whatsapp"}
            width={100}
            height={100}
          />
          <span className="sr-only">whatsapp</span>
        </div>
      )}
    </div>
  );
}
