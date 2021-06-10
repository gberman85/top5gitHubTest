import logo from './logo.svg';
import './App.css';

function App2(params) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          User name: {params.username}
        </p>
        <a
          className="App-link"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Return
        </a>
      </header>
    </div>
  );
}
export default App2;
