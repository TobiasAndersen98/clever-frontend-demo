import { Roboto } from "@next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" type="image/png" href="/favicon.png" sizes="16x16"/>
      </head>
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
