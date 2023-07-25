import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Home from './Page/home';
import Register from './Page/register';
import Accountinfo from './Page/account';
import Login from './Page/login';
function App() {
  return (
    <Router>
      <div>
      <Header />
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Account" element={<Accountinfo/>}/>
        

          <Route path="/Login" element={<Login/>}/>
          {/* <Route path="Account" element={<Account/>}/> */}
        </Routes>
      <Footer />
      </div>
      </Router>
  ); 
}

export default App;
