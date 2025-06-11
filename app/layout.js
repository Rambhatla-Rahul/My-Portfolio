import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import IconBar from "@/components/IconBar";

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
  icons: {
    icon: "/brand.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >        
        <Navbar/>
        <main>{children}</main>
        <IconBar/>
      </body>
    </html>
  );
}
