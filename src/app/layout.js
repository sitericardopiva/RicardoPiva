import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { handleJSONfile } from "@/utils/jsonHandler";
import Script from "next/script";
import React from "react";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const lucidaBright = localFont({
  src: "./fonts/LucidaBright.ttf",
  variable: "--font-lucida-bright",
  weight: "100 900",
});
const gothamLight = localFont({
  src: "./fonts/GothamLight.ttf",
  variable: "--font-gotham-light",
  weight: "100 900",
});


export const metadata = {
  title: "Ricardo Piva Advocacia",
  description: "Ricardo Piva Advocacia",
  charset: "utf-8",
  openGraph: {
    title: "IDE",
    description: "Exemplo de descrição.",
    type: "website",
    image: "https://avatars.githubusercontent.com/u/17241356?s=200&v=4",
  },
  twitter: {
    card: "summary",
    creator: "IDE",
    title: "Exemplo title",
    description: "Exemplo de descrição.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  const foo = handleJSONfile(`./content/navFooter/footer.json`);
  const contato = handleJSONfile(`./content/contato/contato.json`);
  const nav = handleJSONfile(`./content/navFooter/navbar.json`);

  return (
    <html lang="pt-BR">
      
      <head>
        <Script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lucidaBright.variable} ${gothamLight.variable} antialiased`}
      >
        <React.Fragment>
          <Navbar contato={contato} nav={nav} />
        </React.Fragment>
        {children}
        <Footer contato={contato} footer={foo} />
      </body>
    </html>
  );
}
