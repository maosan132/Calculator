import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import '../App.css';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="App">
        <Display result={result} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

// const App = () => {
//   calculate({ total: 0, operation: '', next: 0 }, '');
//   return (
//     <>
//       <Display />
//       <ButtonPanel />
//     </>
//   );
// };

export default App;
