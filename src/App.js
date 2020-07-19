import React, { useState, Fragment } from 'react';
import './App.scss';
import Counter from './components/ComponentFunction';
import UnreadMessages from './components/UnreadMessages';
import UserForm from './components/userForm/UserForms';
function App() {

  const [showCounters, setShowCounters] = useState(true);

  const quitarCounters = () => {
    setShowCounters(!showCounters);
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* {showCounters &&
          <Fragment>
            <Counter initialValue={0} step={2} />
            <Counter initialValue={1} step={3} />
            <Counter initialValue={2} step={5} />
          </Fragment>
        }
        <br />
        <button onClick={quitarCounters}> {showCounters ? 'Quitar Counters' : 'Mostrar Counters'} </button> */}
        {/*         <UnreadMessages unreadMessages = {[]}/> */}

        <UserForm />
      </header>
    </div>
  );
}

export default App;
