import React from 'react';

const SkeletonLoader = () => {
  return (
    <div
      className='bg-gray-200 rounded animate-pulse'
      data-testid='skeleton-loader'
    >
      <div className='h-4 w-1/2 mb-2'></div>
      <div className='h-4 w-1/4 mb-2'></div>
      <div className='h-4 w-3/4 mb-2'></div>
      <div className='h-4 w-1/3 mb-2'></div>
      <div className='h-4 w-2/3 mb-2'></div>
    </div>
  );
};

export default SkeletonLoader;
