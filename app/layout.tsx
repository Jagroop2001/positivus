import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src:[
    {
      path:'./fonts/SpaceGrotesk-Bold.ttf',
      weight:'700',
      style:'normal'
    },
    {
      path:'./fonts/SpaceGrotesk-SemiBold.ttf',
      weight:'600',
      style:'normal'
    },
    {
      path:'./fonts/SpaceGrotesk-Medium.ttf',
      weight:'500',
      style:'normal'
    },
    {
      path:'./fonts/SpaceGrotesk-Light.ttf',
      weight:'300',
      style:'normal'
    },
    {
      path:'./fonts/SpaceGrotesk-Regular.ttf',
      weight:'400',
      style:'normal'
    },
    {
      path:'./fonts/SpaceGrotesk-Thin.ttf',
      weight:'200',
      style:'normal'
    },
  ],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: "Positivus",
  description: "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
