import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import FunButton from "@/components/FunButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rambhatla Rahul",
  description: "Welcome to my Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >        
        
        <main>{children}</main>
        <FunButton/>
      </body>
    </html>
  );
}
