import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";

// Use Poppins font with your desired subsets
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Shyam Silks",
  description: "Experience the Elegance of Silk",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
