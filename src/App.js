

import Home from './Components/Home';
import AboutUs from './Components/AboutUs'
import Faq from './Components/Faq'
import ErrorPage from './Components/ErrorPage';
import {Navigate, Route,Routes}  from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchFlight from './Components/SearchFlight';
import SignupForm from './Components/SignupForm';
function App() {
  return (
    <div> 
       
     
     <BrowserRouter>
     
          <Routes>
                <Route exact path='/' element={<Navigate to='/home'/>}></Route>    
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/AboutUs' element={<AboutUs/>}/> 
                <Route exact path='/FAQ' element={<Faq/>}/>
                <Route exact  path='/searchflight'  element={<SearchFlight/>}/> 
                <Route  path='/signup' element={<SignupForm/>}/>
                <Route  path='/error' element={<ErrorPage/>}/>
                
                <Route path='*' element={<ErrorPage/>}/>
                
          </Routes>
        
          </BrowserRouter>
        
      
     
      </div>
  );
}

export default App;


