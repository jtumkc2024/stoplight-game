import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import End from './pages/End';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<End />} />
        <Route path="/FAQ" element={<FAQ />} />
    </Routes>
  );
}

export default App;
