import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { AuthContextProvider } from "@/lib/context/authContext";
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
        <AuthContextProvider>
          <Header />
          {children}
          <footer className='p-24 flex flex-col justify-center border-t-gray-800 border-t-2 bg-gray bg-opacity-30'>
            <p className='font-belgrano text-black'>© 2023 Learning Latin</p>
          </footer>
        </AuthContextProvider>
      </body>
    </html>
  );
}
