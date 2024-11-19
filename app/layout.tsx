import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";


// Define custom fonts using local font files
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

// Define metadata for the site
export const metadata: Metadata = {
  title: "My Blog", // Title of the page
  description: "A blog about tech, programming, and more!", // Page description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Add custom meta tags or head elements here */}</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <div className="max-w-3xl mx-auto p-4">{children}</div>
      

        <Footer />
      </body>
    </html>
  );
}
