import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

function Button() {
  return <button>Click me</button>;
}

test('renders a button', () => {
  render(<Button />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
