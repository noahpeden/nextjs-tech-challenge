import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/home/page';
import * as ReactModule from 'react';

jest.mock('../app/actions/fetchDozers');
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
      longDesc: 'Versatile and Efficient',
      specs: [{ id: 'spec1', spec_name: 'Engine Power', spec_value: '104 kW' }],
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
    expect(screen.getAllByText('Medium Dozers')).toHaveLength(2);
    expect(screen.getByText('Versatile and Efficient')).toBeInTheDocument();
    expect(screen.getByText('Engine Power - 104 kW')).toBeInTheDocument();
  });
});
