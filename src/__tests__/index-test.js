import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Renderer from 'react-test-renderer';
import Display from '../components/Display';
import App from '../components/App';
import Home from '../pages/Home';
import Quote from '../pages/Quote';

describe('Index', () => {
  it('renders correctly', () => {
    const index = Renderer
      .create(
        <>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/App" component={App} />
              <Route path="/Quote" component={Quote} />
            </Switch>
          </Router>
        </>,
      )
      .toJSON();
    expect(index).toMatchSnapshot();
  });
});
