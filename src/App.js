import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            5 GitHub Users
        </p>
        <a
          className="App-link"
          href="?user=fabpot"
          target="_blank"
          rel="noopener noreferrer"
        >
          fabpot
        </a>
        <a
          className="App-link"
          href="?user=andrew"
          target="_blank"
          rel="noopener noreferrer"
        >
          andrew
        </a>
        <a
          className="App-link"
          href="?user=taylorotwell"
          target="_blank"
          rel="noopener noreferrer"
        >
          taylorotwell
        </a>
        <a
          className="App-link"
          href="?user=egoist"
          target="_blank"
          rel="noopener noreferrer"
        >
          egoist
        </a>
        <a
          className="App-link"
          href="?user=HugoGiraudel"
          target="_blank"
          rel="noopener noreferrer"
        >
          HugoGiraudel
        </a>
      </header>
    </div>
  );
}
export default App;
