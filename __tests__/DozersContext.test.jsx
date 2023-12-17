import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { DozersProvider, DozersContext } from '../app/contexts/DozersContext';
import fetchDozers from '../app/actions/fetchDozers';
import { act } from 'react-dom/test-utils';

const mockDozersData = {
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

describe('<DozersProvider />', () => {
  beforeEach(() => {
    fetchDozers.mockClear();
  });

  it('fetches dozers on mount and populates state', async () => {
    fetchDozers.mockResolvedValue(mockDozersData);

    let contextValue;
    const TestComponent = () => {
      contextValue = React.useContext(DozersContext);
      return null;
    };

    await act(async () => {
      render(
        <DozersProvider>
          <TestComponent />
        </DozersProvider>
      );
    });

    expect(fetchDozers).toHaveBeenCalled();
    expect(contextValue.dozers).toEqual(mockDozersData.models);
  });

  it('updates filters and filters dozers correctly', async () => {
    fetchDozers.mockResolvedValue(mockDozersData);

    let contextValue;
    const TestComponent = () => {
      contextValue = React.useContext(DozersContext);
      return null;
    };

    await act(async () => {
      render(
        <DozersProvider>
          <TestComponent />
        </DozersProvider>
      );
    });

    act(() => {
      contextValue.updateFilters({
        categories: ['Small Dozers'],
        engineHP: 60,
        operatingWeight: 5000,
      });
    });
  });
});
