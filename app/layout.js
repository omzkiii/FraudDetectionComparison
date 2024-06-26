import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SMS Fraud Detection",
  description: "Compare different NLP models in detecting SMS fraud.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <Providers>
      <body className={inter.className}>
        <Header >
        {children}
        </ Header>
      </body>
      </Providers>
      
    </html>
  );
}
