import type { Metadata } from "next";
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
// import { Inter, Space_Grotesk } from "next/font/google";
import Header from './_components/Header'
import Footer from './_components/Footer'

// Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  // variable: "--font-space-grotesk",
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
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex flex-col min-h-screen box-border">
        <div className="flex flex-col flex-1">

         <Header />
      
          {children}

          <Footer />

        </div>      
      </body>
    </html>
  );
}

// export default function RootLayout({ children }: LayoutProps<"/">) {
//   return (
//     <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
//       <body className="min-h-full flex flex-col">
//         {children}
//       </body>
//     </html>
//   );
// }

