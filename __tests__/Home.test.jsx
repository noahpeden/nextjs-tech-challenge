import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../app/home/page';
import fetchDozers from '../app/actions/fetchDozers';
import { act } from 'react-dom/test-utils';

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
jest.mock('../app/actions/fetchDozers');
describe('<Home/>', () => {
  const setup = () => {
    return render(<Home />);
  };

  describe('render', () => {
    it('displays the skeleton loader initially', async () => {
      await act(() => {
        setup();
      });

      expect(document.querySelector('#skeleton-loader')).toBeInTheDocument();
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
  });

  describe('actions', () => {});
});
