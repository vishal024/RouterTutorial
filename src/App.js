import logo from './logo.svg';
import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import User from './components/Users';
import Filter from "./components/filter"
import Contact from './components/Contact';
import Company from './components/Company';
import Channel from './components/Channel';
import OtherPage from './components/OtherPage';
import Login from './components/Login';
import Protected from './components/protected';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
            <Route path="/" element={<Protected Component={Home}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<Protected Component={About}/>}/>
            <Route path="/contact/" element={<Contact/>}>
                <Route path="company" element={<Company/>}/>
                <Route path="channel" element={<Channel/>}/>
                <Route path="other" element={<OtherPage/>}/>
            </Route>
            <Route path="/*" element={<Page404/>}/>
            {/* <Route path="/*" element={<Navigate to="/"/>}/> */} 
            <Route path="/user/:name" element={<User/>}/>
            {/* <Route path="/user/:name/:id" element={<User/>}/> */}
            <Route path="/filter" element={<Protected Component={Filter}/>}/>
      </Routes>
    </div>
  );
}

export default App;
