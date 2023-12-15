'use client';
import React, { useEffect, useState, Suspense } from 'react';
import fetchDozers from '../actions/fetchDozers';
import Loading from '../loading';
import Filters from '../components/Filters';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchDozers();
      setData(response);
    }
    fetchData();
  }, []);

  if (data.length === 0) return <Loading />;
  if (data?.error) return <div>There was an error fetching dozers</div>;
  console.log(data);
  return (
    <div className='container flex'>
      <div className='mr-8 mt-12'>
        <Filters />
      </div>
      <div className='container mx-auto '>
        <h1 className='text-2xl font-bold mb-4'>Dozers</h1>

        <ul className='grid grid-cols-3 gap-4'>
          {data?.models?.map((product) => (
            <li key={product.id} className='bg-gray-200 p-4 rounded'>
              <h2 className='text-lg font-bold'>
                {product.brand} - {product.model_name}
              </h2>
              <p>{product.family}</p>
              <p>{product.longDesc}</p>

              {product?.specs?.map((spec) => (
                <p key={spec.id}>
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
