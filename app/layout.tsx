import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SideNav } from "./Components/Sidebar";
import { Navbar } from "./Components/Navbar";
import { UserNav } from "./Components/UserNav";
 
 

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

export const metadata: Metadata = {
  title: "Delberto AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-white ">
          <div className="flex h-16 items-center px-4">
            <Navbar className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
                Get start for free 
              </button>
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-300 transition-colors">
                Upgrade
              </button>
              <UserNav />
            </div>
          </div>
        </header>
        <div className="flex h-full">
          <SideNav />
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
