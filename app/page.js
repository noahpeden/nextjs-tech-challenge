import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='flex h-80 flex-col items-center justify-around '>
        <h1 role='heading' className='text-4xl font-bold'>
          Welcome to Boom and Bucket 🚜
        </h1>
        <p className='text-xl text-center'>
          This is tech challenge for Boom and Bucket. It is a simple app that
          allows you to filter through dozers and submit a request for more
          info.
        </p>
        <Link
          href='/home'
          className='bg-primary text-white px-4 py-2 rounded hover:bg-primary-darker'
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
