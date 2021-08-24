import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';

const Calculator = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/App" component={App} />
        <Route path="/Quote" component={Quote} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(
  <Calculator />,
  document.getElementById('root'),
);
