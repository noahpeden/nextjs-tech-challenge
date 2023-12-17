'use client';
import React, { useContext } from 'react';
import Loading from '../loading';
import Filters from '../components/Filters';
import { DozersContext } from '../contexts/DozersContext';

const Home = () => {
  const { dozers = [], loading } = useContext(DozersContext);

  if (loading) return <Loading />;
  if (dozers?.error) return <div>There was an error fetching dozers</div>;

  return (
    <div className='container flex'>
      <div className='mr-4 mt-12 w-[350px]'>
        <Filters />
      </div>
      <div className='container mx-auto '>
        <h1 className='text-2xl font-bold mb-4'>Dozers</h1>

        <ul className='grid grid-cols-3 gap-4'>
          {dozers?.map((product) => (
            <li
              key={`${product.brand} - ${product.model_name}`}
              className='bg-gray-200 p-4 rounded'
            >
              <h2 className='text-lg font-bold'>
                {product.brand} - {product.model_name}
              </h2>
              <p>{product.family}</p>
              {/* <p>{product.longDesc}</p> */}

              {product?.specs?.map((spec) => {
                return (
                  <div
                    className='flex flex-col text-sm'
                    key={`${product.id}-${spec.spec_name}`}
                  >
                    {spec.spec_name} - {spec.spec_value[0]}
                  </div>
                );
              })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
