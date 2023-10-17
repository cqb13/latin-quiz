import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Latin Quiz",
  description: "Latin Quiz on Columbus' Parts Quarta et Pars Quinta"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-lavender_blush`}>
        <header className='h-[90vh] bg-gunmetal p-24'>
          <h1 className='font-signika text-non_photo_blue text-9xl'>
            Latin Quiz
          </h1>
          <sub className='font-signika text-gray text-3xl'>
            Columbus&rsquo; Parts Quarta et Pars Quinta
          </sub>
        </header>
        {children}
        <footer className='p-24 flex flex-col justify-center border-t-gray-800 border-t-2 bg-gray bg-opacity-30'>
          <p className="font-belgrano text-black">© 2023 Learning Latin</p>
        </footer>
      </body>
    </html>
  );
}
