import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import { Info } from './pages/info';

function App() {
  return (
    //rotas
    <Router>
      <Routes> 
        <Route path="/personal-web-site-nine-zeta/" element={<Home/>}></Route>
        <Route path="/personal-web-site-nine-zeta/info" element={<Info/>}></Route>      
      </Routes>
    </Router>

    
  );
}

export default App;


