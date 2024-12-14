"use client"
import { Inter } from "next/font/google";
import "@/app/globals.scss";
import "@/assets/styles/main.scss";
import "@/assets/styles/partials/_theming.scss";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "@/common/footer";
import Header from "@/common/header";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      offset: 130,
      duration: 1200,
      easing: "ease",
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Tripo Games | Game Company</title>
        <meta name="description" content="multiple games company" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
