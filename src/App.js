import React from 'react';
import './App.css';
import Game from './components/game/game';
import Difficulty from './components/difficulty/difficulty';
import Leaderboard from './components/leaderboard/leaderboard';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrap'>
        <div className='app-wrap__content'>
          <Game />
          <Difficulty />
          <Leaderboard />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
