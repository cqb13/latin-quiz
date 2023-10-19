import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Latin Quiz",
  description: "Latin Quiz on Columbus' Parts Quarta et Pars Quinta",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "cqb13", url: "https://cqb13.dev" }],
  colorScheme: "dark",
  creator: "cqb13",
  publisher: "cqb13",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-lavender_blush`}>
        <header className='h-[90vh] bg-gunmetal p-24 max-md:px-10 max-md:text-left max-sm:h-[60vh]'>
          <h1 className='font-signika text-non_photo_blue text-9xl max-md:text-8xl max-sm:text-7xl'>
            Latin Quiz
          </h1>
          <div className='flex flex-col gap-2'>
            <sub className='font-signika text-gray text-3xl'>
              Columbus&rsquo; Parts Quarta et Pars Quinta
            </sub>
            <sub className='font-signika text-gray text-3xl'>
              By: Maksim Straus, Eddie Kim, Emily Quan
            </sub>
          </div>
        </header>
        {children}
        <footer className='p-24 flex flex-col justify-center border-t-gray-800 border-t-2 bg-gray bg-opacity-30'>
          <p className='font-belgrano text-black'>© 2023 Learning Latin</p>
        </footer>
      </body>
    </html>
  );
}
