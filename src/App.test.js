import { render, screen } from '@testing-library/react';
import App from './App';

test('Should have HTML, CSS and JS editors', () => {
  render(<App />);
  const htmlEditor = screen.getByText(/HTML/i);
  const cssEditor = screen.getByText(/CSS/i);
  const jsEditor = screen.getByText(/JS/i);
  expect(htmlEditor).toBeInTheDocument();
  expect(cssEditor).toBeInTheDocument();
  expect(jsEditor).toBeInTheDocument();
});

// test('Should have output pane', () => {
//   render(<App />);
//   const output = screen.getByText(/output/i);
//   expect(output).toBeInTheDocument();
// });