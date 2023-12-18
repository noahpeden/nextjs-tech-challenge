import { render, screen } from '@testing-library/react';
import Filters from '../app/components/Filters/Filters';
import '@testing-library/jest-dom';
import * as ReactModule from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));
describe.only('<Filters/>', () => {
  const setup = () => {
    ReactModule.useContext.mockImplementation(() => ({
      filters: {
        categories: [],
        engineHP: 0,
        operatingWeight: 0,
      },
      updateFilters: jest.fn(),
    }));
    return render(<Filters />);
  };
  describe('render', () => {
    test('renders the title', () => {
      setup();

      expect(screen.getByText('Filters')).toBeInTheDocument();
    });
    test('renders the category list', () => {
      setup();

      // Assert that the category list is rendered
      expect(screen.getByText('Category')).toBeInTheDocument();
      expect(screen.getByText('Small Dozers')).toBeInTheDocument();
      expect(screen.getByText('Medium Dozers')).toBeInTheDocument();
      expect(screen.getByText('Large Dozers')).toBeInTheDocument();
      expect(screen.getByText('Wheel Dozers')).toBeInTheDocument();
    });

    xtest('renders the engine HP range input', () => {
      setup();

      expect(screen.getByText('Engine HP')).toBeInTheDocument();
      expect(
        screen.getByRole('slider', { name: 'Engine HP' })
      ).toBeInTheDocument();
    });

    xtest('renders the operating weight range input', () => {
      setup();

      expect(screen.getByText('Operating Weight')).toBeInTheDocument();
      expect(
        screen.getByRole('slider', { name: 'Operating Weight' })
      ).toBeInTheDocument();
    });
  });
});
