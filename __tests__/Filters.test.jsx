import { render, screen } from '@testing-library/react';
import Filters from '../app/components/Filters';
import '@testing-library/jest-dom';

describe.only('<Filters/>', () => {
  const setup = () => {
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
      expect(screen.getByText('Dozers')).toBeInTheDocument();
      expect(screen.getByText('Excavators')).toBeInTheDocument();
      expect(screen.getByText('Wheel Loaders')).toBeInTheDocument();
      expect(screen.getByText('Skid Steers')).toBeInTheDocument();
      expect(screen.getByText('Backhoes')).toBeInTheDocument();
    });

    test('renders the engine HP range input', () => {
      setup();

      expect(screen.getByText('Engine HP')).toBeInTheDocument();
    });

    test('renders the operating weight range input', () => {
      setup();

      expect(screen.getByText('Operating Weight')).toBeInTheDocument();
    });
  });
});
