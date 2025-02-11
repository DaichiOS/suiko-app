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
          <div className="min-h-screen">
            <div className="fixed w-full top-0 z-50 bg-[#0a0f1a]">
              <Navbar />
            </div>
            <main className="max-w-4xl mx-auto pt-14 pb-8 relative z-10">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
