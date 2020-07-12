import React, { useState, Fragment } from 'react';
import './App.css';
import Counter from './components/ComponentFunction';

function App() {

  const [showCounters, setShowCounters] = useState(true);

  const quitarCounters = () => {
    setShowCounters(!showCounters);
  }

  return (
    <div className="App">
      <header className="App-header">
        {showCounters &&
          <Fragment>
            <Counter initialValue={0} step={2} />
            <Counter initialValue={1} step={3} />
            <Counter initialValue={2} step={5} />
          </Fragment>
        }
        <br />
        <button onClick={quitarCounters}> {showCounters ? 'Quitar Counters' : 'Mostrar Counters'} </button>
      </header>
    </div>
  );
}

export default App;
