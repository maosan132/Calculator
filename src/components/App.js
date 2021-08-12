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
