import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

const Calculator = () => (
  <React.StrictMode>
    <Router>
      <container>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/App" component={App} />
          <Route path="/Quote" component={Quote} />
        </Switch>
      </container>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(
  <Calculator />,
  document.getElementById('root'),
);
