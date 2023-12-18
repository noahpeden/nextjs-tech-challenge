import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/home/page';
import * as ReactModule from 'react';

jest.mock('next/legacy/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub';
  },
}));
jest.mock('../app/actions/fetchDozers');
// eslint-disable-next-line react/display-name
jest.mock('../app/components/Filters/Filters', () => () => (
  <div>mock filters</div>
));
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

const mockData = {
  models: [
    {
      id: '1',
      brand: 'CAT',
      model_name: 'D5',
      family: 'Medium Dozers',
      image_url: 'https://via.placeholder.com/150',
      longDesc: 'Versatile and Efficient',
      specs: [
        { id: 'spec1', spec_name: 'Engine Power', spec_value: ['104 kW'] },
        {
          id: 'spec2',
          spec_name: 'Operating Weight',
          spec_value: ['18000lbs'],
        },
      ],
    },
  ],
};

describe('<Home/>', () => {
  beforeEach(() => {
    ReactModule.useContext.mockImplementation(() => ({
      dozers: mockData.models,
    }));
  });

  it('renders dozers from the DozersContext', async () => {
    render(<Home />);

    expect(screen.queryByTestId('skeleton-loader')).toBeNull();
    expect(screen.getByText('CAT - D5')).toBeInTheDocument();
    expect(screen.getAllByText('Medium Dozers')).toHaveLength(1);
    expect(screen.getByText('Operating Weight:')).toBeInTheDocument();
    expect(screen.getByText('18000lbs')).toBeInTheDocument();
  });
});
