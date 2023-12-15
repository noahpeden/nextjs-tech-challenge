export default function Filters() {
  return (
    <div>
      <h1>Filters</h1>
      <div>
        <h2>Category</h2>
        <ul>
          <li>Dozers</li>
          <li>Excavators</li>
          <li>Wheel Loaders</li>
          <li>Skid Steers</li>
          <li>Backhoes</li>
        </ul>
      </div>
      <div>
        <h2>Engine HP</h2>
        <input
          role='slider'
          name='Engine HP'
          type='range'
          min='0'
          max='100'
          value='50'
          onChange={() => {}}
        />
      </div>
      <div>
        <h2>Operating Weight</h2>
        <input
          role='slider'
          name='Operating Weight'
          type='range'
          min='0'
          max='100'
          value='50'
          onChange={() => {}}
        />
      </div>
    </div>
  );
}
