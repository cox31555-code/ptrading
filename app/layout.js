import "./globals.css";
import { lato } from "./fonts";
import HeaderClient from "@/ui/header/HeaderClient";
import FooterWrapper from "@/ui/footer/FooterWrapper";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Polar Trading Services",
  description: "Expert Forex, Stocks, and Trading Education - Master Financial Markets with Polar Trading Services",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={lato.className}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
              border: "1px solid rgba(1, 188, 228, 0.53)",
            },
            success: {
              iconTheme: {
                primary: "#2ed573",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#ff4757",
                secondary: "#fff",
              },
            },
          }}
        />
        <HeaderClient />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
