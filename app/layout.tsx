import type { Metadata } from 'next';
import NavBar from '../components/NavBar';
import './globals.css';
import { Inter, Montserrat, Roboto } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'greek'] });
const montserrat = Montserrat({ subsets: ['latin'] });

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with TypeScript and TailwindCSS.',
  keywords: 'Next.js, Typescript, TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <nav>
          <NavBar />
        </nav>
        <main className='max-w-3xl mx-auto'>{children}</main>
      </body>
    </html>
  );
}
