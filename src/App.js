import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardPage from './components/CardPage';
import Home from './components/Home';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/card' element={<CardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
