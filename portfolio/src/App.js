import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Carousel';
import Main from './components/Main';
import Test from './components/Main';
import './App.css';

let home = (
  <>
    <Nav />
    <Projects />
  </>
)

let about = (
  <>
    <Nav />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<Main />} />
        <Route path='projects' element={<Main />} />
        <Route path='contact' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
