import "./globals.css";
import { Providers } from "@/providers/Providers";
import Navbar from "@/components/navigation/Navbar";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
});

export const metadata = {
  title: 'Suiko',
  description: 'Suiko Web3 Application',
  icons: {
    icon: '/suiko.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Providers>
          <Navbar />
          <main className="container mx-auto px-4 pt-24 pb-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
