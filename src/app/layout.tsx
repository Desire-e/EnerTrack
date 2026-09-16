import type { Metadata } from "next";
import "./globals.css";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
// import { Inter, Space_Grotesk } from "next/font/google";
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import Chatbot from '@/app/_components/Chatbot'


// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});


// Metadata
// TODO. Overwrite on every page
export const metadata: Metadata = {
  title: "Energy Management",
  description: "IoT-based energy monitoring solutions for industrial and commercial clients.",
};


export default function RootLayout({ children }: { children: React.ReactNode; }){
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${jetBrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex flex-col min-h-screen box-border">
        <div className="flex flex-col flex-1">

          <Header />

          <Chatbot />

          {children}

          <Footer />

        </div>      
      </body>
    </html>
  );
}
