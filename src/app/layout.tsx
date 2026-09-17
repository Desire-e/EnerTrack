import type { Metadata } from "next";
import "@/app/globals.css";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import Header from '@/app/_components/Header'
import Footer from '@/app/_components/Footer'
import Chatbot from '@/app/_components/Chatbot'


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


export const metadata: Metadata = {
  // metadataBase allows URL-based metadata fields to use a relative path instead of absolute URL
  metadataBase: new URL("https://ener-track-bay.vercel.app/"),

  title: {
    template: "EnerTrack | %s",
    default: "EnerTrack | Intelligent Energy Management",
  },

  description: "IoT-based energy monitoring solutions for industrial and commercial clients.",

  openGraph: {
    type: "website",
    siteName: "EnerTrack",
    locale: "en_US",
    description: "IoT-based energy monitoring solutions for industrial and commercial clients.",
    images: [
      {
        url: "/images/open-graphs/og-image-global.png",
        width: 941,
        height: 470,
        alt: "EnerTrack - Intelligent Energy Management",
      },
    ]
  },
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
