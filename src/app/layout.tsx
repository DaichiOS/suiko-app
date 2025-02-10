import "./globals.css";
import { Providers } from "@/providers/Providers";
import Navbar from "@/components/navigation/Navbar";

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
    <html lang="en">
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
