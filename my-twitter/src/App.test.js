import { render, screen } from '@testing-library/react';
import App from './App';

// test backgroud color of App component
test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByTestId('grid-container');
  expect(appElement).toHaveClass('MuiGrid-container');
});
