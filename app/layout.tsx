import type { Metadata } from "next";
import { quicksand } from "@/app/ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | V-Manager',
    default: 'V-Manager',
  },
  description: 'Der V-Manager verwaltet Informationen zu Straßen- und Hausanschlussleitungen.',
  metadataBase: new URL('https://www.sw-sundern.de'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${quicksand.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
