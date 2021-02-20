import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/Header';
import GameBoard from './Components/GameBoard';

function App() {
  return (
    <div className="App">
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
