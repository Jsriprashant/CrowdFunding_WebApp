import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sessionwrapper from "@/components/Sessionwrapper";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a Chai",
  description: "This is a online croud funding app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sessionwrapper>

          <Navbar />
          <div>
            <div className="top-0 z-[-2] min-h-screen min-w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] overflow-auto">
              {children}
            </div>
          </div>
          <Footer />
        </Sessionwrapper>

      </body>


    </html>
  );
}
