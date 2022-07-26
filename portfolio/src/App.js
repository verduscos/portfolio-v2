import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='about' element={<Main />} />
        <Route path='projects' element={<Main />} />
        <Route path='contact' element={<Main />} />
        <Route path="project/:projectId" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
