import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import AlbumPage from './components/albumpage/AlbumPage';

import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/album/:artist/:album' element={<AlbumPage />} />
      </Routes>
    </Router>
  </>
);

export default App;
