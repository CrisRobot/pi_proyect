import './App.css';
import {Route, Routes} from "react-router-dom";
import Welcome from './components/views/welcome';
import Home from './components/views/home';



function App() {



  return (
    
  <Routes>
<Route path="/" element={<Welcome/>} />
<Route path="/home" element={<Home/>} />
  </Routes>
   
 
    
  );
}

export default App;
