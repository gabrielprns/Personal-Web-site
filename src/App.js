import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import { Info } from './pages/info';
import { Port } from './pages/portfolio';

function App() {
  return (
    //rotas
    <Router>
      <Routes> 
        <Route path="/Portfolio_React" element={<Home/>}></Route>
        <Route path="/info" element={<Info/>}></Route>
        <Route path="/portfolio" element={<Port/>}></Route>
      </Routes>
    </Router>

    
  );
}

export default App;


