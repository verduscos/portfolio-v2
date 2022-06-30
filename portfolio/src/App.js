import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Projects from './components/Carousel';
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
        <Route exact path='/' element={home} />
        <Route path='about' element={about} />
        <Route path='projects' element={about} />
        <Route path='contact' element={about} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
