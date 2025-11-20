import './App.css';
import Hello from './Hello';
import Garage from './Garage';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Hello title="OSS!"/>
        <Garage />
        <p className='letter'>Just Playing With React!</p>
        <p className='letter'>Scorll Down</p>
      </header>
    </div>
  );
}

export default App;
