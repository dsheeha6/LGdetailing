import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LG Mobile Detailing', () => {
  render(<App />);
  const linkElement = screen.getByText(/LG Mobile Detailing/i);
  expect(linkElement).toBeInTheDocument();
});
