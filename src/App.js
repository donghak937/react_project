import './App.css';
import Hello from './Hello';
import Garage from './Garage';
import HelloBtn from './HelloBtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Hello title="OSS!"/>
        <Garage />
        <HelloBtn />
        <p className='letter'>Just Playing With React!</p>
        <p className='letter'>Scorll Down</p>
      </header>
    </div>
  );
}

export default App;
