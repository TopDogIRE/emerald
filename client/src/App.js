import logo from './logo.svg';
import './App.css';
import SomeFeature from './components/SomeFeature';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <SomeFeature />
        
        
      </header>
    </div>
  );
}

export default App;
