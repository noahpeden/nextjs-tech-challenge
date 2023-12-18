import './globals.css';
import { DozersProvider } from './contexts/DozersContext';
import Image from 'next/image';
import logo from '../public/logo.png';
import Head from 'next/head';
import Link from 'next/link';

export const metadata = {
  title: 'Boom & Bucket Tech Challenge',
  description:
    'A simple app that allows you to filter through dozers and submit a request for more info.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </Head>
      <body className='bg-primary-lighter min-h-screen'>
        <section className='flex  items-center p-1 bg-primary-darker shadow'>
          <div className='logo'>
            <Link href='/'>
              <Image src={logo} alt='Logo' width={100} height={50} />{' '}
            </Link>
          </div>
          <div>
            <h1 className='text-2xl text-accent font-bold'>
              Boom & Bucket Tech Challenge
            </h1>
          </div>
        </section>
        <DozersProvider>
          <main className='p-2'>{children}</main>
        </DozersProvider>
      </body>
    </html>
  );
}
