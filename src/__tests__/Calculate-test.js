import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Calculate from '../logic/calculate';
import App from '../components/App';

describe('Use Operations', () => {
  const negateBtn = '+/-';
  const plusBtn = '+';
  const minusBtn = '-';
  const timesBtn = 'X';
  const divideBtn = '/';
  const cleanBtn = 'AC';

  const calculatorNegates = { total: 10, next: 0, operation: negateBtn };
  const calculatorSums = { total: 15, next: 20, operation: plusBtn };
  const calculatorSubtracts = { total: 15, next: 20, operation: minusBtn };
  const calculatorMultiplies = { total: 15, next: 20, operation: timesBtn };
  const calculatorDivides = { total: 15, next: 5, operation: divideBtn };
  const calculatorCleans = { total: 15, next: 5, operation: cleanBtn };

  test('negate the given number', () => {
    const result = (Calculate(calculatorNegates, negateBtn));
    expect(result).toEqual({ next: '0', operation: '+/-', total: '-10' });
  });

  test('add the given numbers', () => {
    const result = (Calculate(calculatorSums, plusBtn));
    const result2 = Calculate(result, '=');
    expect(result2).toEqual({ next: null, operation: null, total: '35' });
  });

  test('subtract the given numbers', () => {
    const result = (Calculate(calculatorSubtracts, minusBtn));
    const result2 = Calculate(result, '=');
    expect(result2).toEqual({ next: null, operation: null, total: '-5' });
  });

  test('multiply the given numbers', () => {
    const result = (Calculate(calculatorMultiplies, timesBtn));
    const result2 = Calculate(result, '=');
    expect(result2).toEqual({ next: null, operation: null, total: '300' });
  });

  test('divide the given numbers', () => {
    const result = (Calculate(calculatorDivides, divideBtn));
    const result2 = Calculate(result, '=');
    expect(result2).toEqual({ next: null, operation: null, total: '3' });
  });

  test('Erases the screen', () => {
    const result = (Calculate(calculatorCleans, cleanBtn));
    expect(result).toEqual({ next: 0, operation: null, total: 0 });
  });
});

describe('Render Buttons', () => {
  it('Should display AC', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/AC/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button =', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/=/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button 1', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/1/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button 2', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/2/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button 3', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/3/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button 4', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/4/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button 5', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/5/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button 6', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/6/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button 7', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/7/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button 8', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/8/);
    expect(btnName).toBeInTheDocument();
  });

  it('Should display button 8', () => {
    const { getByText } = render(<App />);
    const btnName = getByText(/9/);
    expect(btnName).toBeInTheDocument();
  });
});
