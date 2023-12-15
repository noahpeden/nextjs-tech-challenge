import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/home/page';
import fetchDozers from '../app/actions/fetchDozers';
import { act } from 'react-dom/test-utils';

jest.mock('../app/actions/fetchDozers');
const mockData = {
  products: [
    {
      id: '1',
      brand: 'CAT',
      model_name: 'D5',
      family: 'Medium Dozers',
      description: 'Versatile and Efficient',
      specs: [{ id: 'spec1', name: 'Engine Power', value: '104 kW' }],
    },
  ],
};
const setup = () => {
  return render(<Home />);
};

describe('render', () => {
  it('displays the skeleton loader initially', () => {
    setup();
    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
  });

  it('renders dozers after fetch completes', async () => {
    fetchDozers.mockResolvedValue(mockData);
    setup();
    await waitFor(() => {
      expect(screen.queryByTestId('skeleton-loader')).toBeNull();
      expect(screen.getByText('CAT - D5')).toBeInTheDocument();
      expect(screen.getByText('Medium Dozers')).toBeInTheDocument();
      expect(screen.getByText('Versatile and Efficient')).toBeInTheDocument();
      expect(screen.getByText('Engine Power - 104 kW')).toBeInTheDocument();
    });
  });

  it('handles fetch errors gracefully', async () => {
    fetchDozers.mockRejectedValue(new Error('Network error'));
    setup();
    await waitFor(() => {
      expect(screen.queryByTestId('skeleton-loader')).not.toBeInTheDocument();
      // error handling assertion
    });
  });
});

describe('actions', () => {});
