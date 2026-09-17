import type { Metadata } from "next";
import "@/app/globals.css";
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


/**
 * Metadata
 * https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object
 */
export const metadata: Metadata = {
  // metadataBase allows URL-based metadata fields to use a relative path instead of absolute URL
  metadataBase: new URL("https://ener-track-70wl2hd1z-desiree-torres1.vercel.app"),

  title: {
    // title.template can be used to add a prefix or a suffix to titles defined in child route segments.
    template: "EnerTrack | %s",
    // title.default can be used to provide a fallback title to child route segments that don't define a title.
    default: "EnerTrack | Intelligent Energy Management",
  },

  description: "IoT-based energy monitoring solutions for industrial and commercial clients.",

  // Open Graph (OG) - How the page is presented when you share its URL
  // Is a  metadata standard that is used to control how the page is shown when 
  // someone shares its URL on social networks, WhatsApp, Discord, Slack, ... ()
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
