import Link from 'next/link';
import Image from 'next/image';
import png from '../public/logo.png';

export default function Home() {
  return (
    <main>
      <div className='flex h-80 flex-col items-center justify-around mt-20'>
        <Image
          src={png}
          alt='dozer'
          width={500}
          height={500}
          layout='intrinsic'
        />
        <p className='text-xl text-center '>
          This is tech challenge for Boom and Bucket. It is a simple app that
          allows you to filter through dozers and submit a request for more
          info.
        </p>
        <Link
          href='/home'
          className='bg-primary text-white px-4 py-2 rounded hover:bg-primary-darker mt-5'
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
