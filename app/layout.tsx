import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutFit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
});

const OvO = Ovo({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tilak Rathoure",
  description: "Portfolio",
  icons: {
    icon: "/letter-t.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${OutFit.className} ${OvO.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
