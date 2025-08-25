import type { Metadata } from "next";
import { Montserrat, Marcellus_SC } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const marcellusSC = Marcellus_SC({
  variable: "--font-marcellus-sc",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ANANDAJATRA - Creative Advertising Agency",
  description: "You focus on your product, we make sure the world sees it right. Professional advertising and creative services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${marcellusSC.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
