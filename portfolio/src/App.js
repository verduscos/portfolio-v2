import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
import Projects from './components/Carousel';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact={true} element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
