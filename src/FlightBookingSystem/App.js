

import Home from './Components/Home';
import AboutUs from './Components/AboutUs'
import Faqs from './Components/Faqs'
import ErrorPage from './Components/ErrorPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SearchFlight from './Components/SearchFlight';
import SignupForm from './Components/SignupForm';
import AdminDashboard from './Components/AdminDashboard'
import Footer from './Components/Footer'
import Booked from './Components/Booked'
function App() {
  return (
    <div className="appWrapper">


      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<Navigate to='/home' />}></Route>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/AboutUs' element={<AboutUs />} />
          <Route exact path='/FAQ' element={<Faqs />} />
          <Route exact path='/searchflight' element={<SearchFlight />} />
          <Route exact path='/booked' element={<Booked />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/login' element={<AdminDashboard />} />
          <Route path='/error' element={<ErrorPage />} />

          <Route path='*' element={<ErrorPage />} />

        </Routes>

      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
