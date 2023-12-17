'use client';
import React, { useContext } from 'react';
import { DozersContext } from '../contexts/DozersContext';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

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
    <div className='mr-10'>
      <h1 className='text-lg'>Filters</h1>
      <div>
        <h2>Category</h2>
        <ul>
          <li>
            <input
              onChange={handleCategoryChange}
              type='checkbox'
              id='small-dozers'
              name='category'
              value='Small Dozers'
            />
            <label htmlFor='Small Dozers'>Small Dozers</label>
          </li>
          <li>
            <input
              onChange={handleCategoryChange}
              type='checkbox'
              id='medium-dozers'
              name='category'
              value='Medium Dozers'
            />
            <label htmlFor='Medium Dozers'>Medium Dozers</label>
          </li>
          <li>
            <input
              onChange={handleCategoryChange}
              type='checkbox'
              id='large-dozers'
              name='category'
              value='Large Dozers'
            />
            <label htmlFor='Large Dozers'>Large Dozers</label>
          </li>
          <li>
            <input
              onChange={handleCategoryChange}
              type='checkbox'
              id='wheel-dozers'
              name='category'
              value='Wheel Dozers'
            />
            <label htmlFor='Wheel Dozers'>Wheel Dozers</label>
          </li>
        </ul>
      </div>

      <div>
        <h2>Engine HP</h2>
        <span>{`${filters.engineHP[0]}HP - ${filters.engineHP[1]}HP`}</span>
        <RangeSlider
          min={0}
          max={500}
          step={10}
          value={filters.engineHP}
          onInput={(value) => updateFilters({ ...filters, engineHP: value })}
        />
      </div>

      <div>
        <h2 className='text-md bold'>Operating Weight</h2>
        <span>{`${filters.operatingWeight[0]}lbs - ${filters.operatingWeight[1]}lbs`}</span>
        <RangeSlider
          min={0}
          step={500}
          max={105000}
          value={filters.operatingWeight}
          onInput={(value) =>
            updateFilters({ ...filters, operatingWeight: value })
          }
        />
      </div>
    </div>
  );
}
