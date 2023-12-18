export default function Category({ category, handleCategoryChange, filters }) {
  return (
    <li key={category} className='flex items-center mb-2'>
      <input
        id={category.replace(/\s+/g, '-').toLowerCase()}
        type='checkbox'
        value={category}
        className='hidden'
        onChange={handleCategoryChange}
        checked={filters.categories.includes(category)}
      />
      <label
        htmlFor={category.replace(/\s+/g, '-').toLowerCase()}
        className='flex items-center cursor-pointer'
      >
        <span className='w-4 h-4 inline-block mr-2 rounded-sm border border-gray-400 flex items-center justify-center'>
          <span
            className={`w-2 h-2 rounded-sm ${
              filters.categories.includes(category) ? 'bg-blue-600' : ''
            }`}
          ></span>
        </span>
        {category}
      </label>
    </li>
  );
}
