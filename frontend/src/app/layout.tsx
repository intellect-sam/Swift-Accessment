import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ChakraProvider } from '../hoc';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Xpress Support',
  description: 'Xpress Support Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ChakraProvider>
          <main>{children}</main>
        </ChakraProvider>
      </body>
    </html>
  );
}
