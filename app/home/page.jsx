'use client';
import React, { useContext } from 'react';
import Loading from '../loading';
import Filters from '../components/Filters/Filters';
import { DozersContext } from '../contexts/DozersContext';
import Image from 'next/image';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './home.css';

const Home = () => {
  const { dozers = [], loading } = useContext(DozersContext);
  console.log(dozers);
  if (loading) return <Loading />;
  if (dozers?.error) return <div>There was an error fetching dozers</div>;

  return (
    <div className='container flex flex-col md:flex-row'>
      <div className='w-full md:w-[350px] md:mr-4'>
        <Filters />
      </div>
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Dozers</h1>
        <ul>
          <TransitionGroup className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {dozers?.map((product) => (
              <CSSTransition
                key={`${product.brand} - ${product.model_name}`}
                timeout={500}
                classNames='fade'
              >
                <li className='bg-white shadow-md rounded overflow-hidden'>
                  <div className='p-4'>
                    <Image
                      src={product.image_url}
                      alt={`${product.brand} - ${product.model_name}`}
                      width={500}
                      height={300}
                      layout='responsive'
                    />
                    <h2 className='text-lg font-bold mt-2'>
                      {product.brand} - {product.model_name}
                    </h2>
                    <p className='text-sm text-gray-600'>{product.family}</p>

                    {product?.specs?.map((spec) => (
                      <div
                        className='mt-1'
                        key={`${product.id}-${spec.spec_name}`}
                      >
                        <span className='text-sm font-medium'>
                          {spec.spec_name}:{' '}
                        </span>
                        <span className='text-sm'>{spec.spec_value[0]}</span>
                      </div>
                    ))}
                  </div>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </div>
    </div>
  );
};

export default Home;
