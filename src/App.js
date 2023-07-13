import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import { Info } from './pages/info';

function App() {
  return (
    //rotas
    <Router>
      <Routes> 
        <Route path="/Personal-Web-site" element={<Home/>}></Route>
        <Route path="/Personal-Web-site/info" element={<Info/>}></Route>      
      </Routes>
    </Router>

    
  );
}

export default App;


