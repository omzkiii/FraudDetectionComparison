import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SMS Fraud Detection",
  description: "Compare different NLP models in detecting SMS fraud.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
