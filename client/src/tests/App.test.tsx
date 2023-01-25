import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render the App component with the className "App"', () => {
    const { container } = render(<App />);
    const app = container.querySelector('.App');
    expect(app).toBeInTheDocument();
  });
});

describe('App', () => {
  it('should render the Home component inside the App component', () => {
    const { container } = render(<App />);
    const home = container.querySelector('.container');
    expect(home).toBeInTheDocument();
  });
});


