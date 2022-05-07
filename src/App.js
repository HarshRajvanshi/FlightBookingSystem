import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import AboutUs from './Components/AboutUs'
import Faq from './Components/Faq'
import {Route,Routes}  from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchFlight from './Components/SearchFlight';
function App() {
  return (
    <div>
       
     
     <BrowserRouter>
     
          <Routes>
                <Route exact path='/' element={<Home/>}/>    
                <Route exact path='/AboutUs' element={<AboutUs/>}/> 
                <Route exact path='/FAQ' element={<Faq/>}/>
                <Route exact  path='/searchflight'  element={<SearchFlight/>}  /> 
                
          </Routes>
        
          </BrowserRouter>
        
      
     
      </div>
  );
}

export default App;

