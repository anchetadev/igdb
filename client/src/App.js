import React from 'react';
import './App.css';

import Game from './components/games'

function App() {
  return (
    <div className="App">
      {/* add a nav bar and some content will play around with igdb api to see what kind of data comes through */}
      {/* interested in how it knows what to show for recommended games, from site it doesn't look very connected to game being 
        viewed */}
        <Game />
    </div>
  );
}

export default App;
