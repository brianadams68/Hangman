import './App.css';
import Hangman from './components/Hangman';

const App: React.FC = () => {
  const handleGuess = (letter: string) => {
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hangman Game</h1>
        <Hangman />
      </header>
    </div>
  );
};

export default App;


