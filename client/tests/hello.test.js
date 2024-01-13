import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hello from '@/components/Hello';

test('test1', () => {
  render(<Hello />);
  const element = screen.getByText(/nodejs/i);
  expect(element).toBeInTheDocument();
  const element1 = screen.getByText(/spring/i);
  expect(element1).toBeInTheDocument();
});

test('test', () => {
  expect(true).toBe(true);
});

// const add = (a, b) => a + b;
// const cases = [
//   [2, 3, 5],
//   [-2, -2, -4],
//   [2, -2, 0]
// ];
// describe('learning describe', () => {
//   test.each(cases)('expect %p + %p = %p', (a, b, expectedRes) => {
//     const result = add(a, b);
//     expect(result).toBe(expectedRes);
//   });
// });
