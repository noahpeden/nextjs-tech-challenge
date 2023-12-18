import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export default function Slider({
  filterType,
  filters,
  updateFilters,
  filterLabel,
  filterTitle,
  max,
}) {
  return (
    <div className='mb-4'>
      <h2 className='font-semibold'>{filterTitle}</h2>
      <span className='text-sm'>{filterLabel}</span>
      <RangeSlider
        min={0}
        max={max}
        step={10}
        value={filters[filterType]}
        className='mt-2'
        onInput={(value) => updateFilters({ ...filters, [filterType]: value })}
      />
    </div>
  );
}
