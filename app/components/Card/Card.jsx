import Image from 'next/image';

export default function Card({ handleDozerClick, product }) {
  return (
    <li
      onClick={() => handleDozerClick({ target: { value: product } })}
      className='bg-white shadow-md rounded overflow-hidden hover:cursor-pointer hover:bg-gray-100 hover:shadow-lg hover:border-primary'
    >
      <div className='p-4 '>
        <Image
          src={product?.image_url}
          alt={`${product?.brand} - ${product?.model_name}`}
          width={500}
          height={300}
          priority
        />
        <h2 className='text-lg font-bold mt-2'>
          {product?.brand} - {product?.model_name}
        </h2>
        <p className='text-sm text-gray-600'>{product?.family}</p>

        {product?.specs?.map((spec) => (
          <div className='mt-1' key={`${product?.id}-${spec.spec_name}`}>
            <span className='text-sm font-medium'>{spec.spec_name}: </span>
            <span className='text-sm'>{spec.spec_value[0]}</span>
          </div>
        ))}
      </div>
    </li>
  );
}
