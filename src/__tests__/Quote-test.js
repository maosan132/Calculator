import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

describe('Quote', () => {
  it('renders correctly', () => {
    const quote = Renderer
      .create(
        <>
          <Router>
            <Navbar />
          </Router>
          <blockquote>Mathematics is about understanding.</blockquote>
        </>,
      )
      .toJSON();
    expect(quote).toMatchSnapshot();
  });
});
