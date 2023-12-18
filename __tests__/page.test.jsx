import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';
jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub';
  },
}));

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByText(
      'This is tech challenge for Boom and Bucket. It is a simple app that allows you to filter through dozers and submit a request for more info.'
    );
    expect(heading).toBeInTheDocument();
  });
});
