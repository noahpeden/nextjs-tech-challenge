'use client';
import React, { useContext } from 'react';
import Loading from '../loading';
import Filters from '../components/Filters';
import { DozersContext } from '../contexts/DozersContext';

const Home = () => {
  const { dozers = [] } = useContext(DozersContext);
  if (dozers?.length === 0) return <Loading />;
  if (dozers?.error) return <div>There was an error fetching dozers</div>;

  return (
    <div className='container flex'>
      <div className='mr-8 mt-12'>
        <Filters />
      </div>
      <div className='container mx-auto '>
        <h1 className='text-2xl font-bold mb-4'>Dozers</h1>

        <ul className='grid grid-cols-3 gap-4'>
          {dozers?.map((product) => (
            <li key={product.id} className='bg-gray-200 p-4 rounded'>
              <h2 className='text-lg font-bold'>
                {product.brand} - {product.model_name}
              </h2>
              <p>{product.family}</p>
              <p>{product.longDesc}</p>

              {product?.specs?.map((spec) => (
                <p key={spec.spec_name}>
                  {spec.spec_name} - {spec.spec_value}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
