import './App.css';
import {Route, Routes} from "react-router-dom";
import Welcome from './components/views/welcome';
import Home from './components/views/home';
import Detail from './components/views/details';
import Form from './components/views/form';

function App() {



  return (
    
  <Routes>
    <Route path="/" element={<Welcome/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/home/:id" element={<Detail/>} />
    <Route path="/create" element={<Form/>} />
  </Routes>
   
 
    
  );
}

export default App;
