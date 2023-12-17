'use client';
import React, { useContext } from 'react';
import { DozersContext } from '../contexts/DozersContext';

export default function Filters() {
  const { filters, updateFilters } = useContext(DozersContext);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    updateFilters({ ...filters, categories: newCategories });
  };

  const handleSliderChange = (event) => {
    updateFilters({
      ...filters,
      [event.target.name]: Number(event.target.value),
    });
  };
  return (
    <div>
      <h1>Filters</h1>
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
      {/* @TODO this is up next */}
      {/* <div>
        <h2>Engine HP</h2>
        <input
          onChange={handleSliderChange}
          role='slider'
          name='Engine HP'
          type='range'
          min='0'
          max='100'
          value={filters.engineHP}
        />
      </div>
      <div>
        <h2>Operating Weight</h2>
        <input
          onChange={handleSliderChange}
          role='slider'
          name='Operating Weight'
          type='range'
          min='0'
          max='100'
          value={filters.operatingWeight}
        />
      </div> */}
    </div>
  );
}
