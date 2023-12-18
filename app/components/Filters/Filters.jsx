import React, { useContext } from 'react';
import { DozersContext } from '../../contexts/DozersContext';
import Slider from '../Slider';
import Category from '../Category';
const dozerTypes = [
  'Small Dozers',
  'Medium Dozers',
  'Large Dozers',
  'Wheel Dozers',
];

export default function Filters() {
  const { filters, updateFilters } = useContext(DozersContext);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    updateFilters({ ...filters, categories: newCategories });
  };

  return (
    <div className='bg-white shadow-md rounded p-4'>
      <ul>
        {dozerTypes.map((category) => (
          <Category
            key={category}
            category={category}
            handleCategoryChange={handleCategoryChange}
            filters={filters}
          />
        ))}
      </ul>
      <Slider
        filterTitle='Engine HP'
        filterType='engineHP'
        filterLabel={`${filters.engineHP[0]}HP - ${filters.engineHP[1]}HP`}
        filters={filters}
        updateFilters={updateFilters}
        max={300}
      />
      <Slider
        filterType='operatingWeight'
        filterTitle='Operating Weight'
        filterLabel={`${filters.operatingWeight[0]}lbs - ${filters.operatingWeight[1]}lbs`}
        filters={filters}
        updateFilters={updateFilters}
        max={110000}
      />
    </div>
  );
}
