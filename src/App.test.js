import { render, screen } from '@testing-library/react';
import App from './App';

test('Test pass', () => {
  render(<App />);
  const linkElement = screen.getByText(/TEST/i);
  expect(linkElement).toBeInTheDocument();
});
