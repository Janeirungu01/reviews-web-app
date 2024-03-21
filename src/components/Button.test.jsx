// Button.test.js
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button text', () => {
  render(<Button>Click me</Button>);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
