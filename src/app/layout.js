import { React } from "react";
import { roboto_mono, raleway } from "@/app/fonts";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";


// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Maggie Wanders</title>
      </head>
      <body className={`text-center ${raleway.className}  mx-auto text-base md:text-lg lg:text-xl`}>
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
