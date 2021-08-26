import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

describe('App', () => {
  it('renders correctly', () => {
    const app = Renderer
      .create(
        <div className="app">
          <Router>
            <Navbar />
          </Router>
          <Display />
          <ButtonPanel />
        </div>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
