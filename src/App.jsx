import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import TicketTap from './component/screen/TicketsTab/TicketTap';
import HeaderView2 from './component/HeaderView2/HeaderView2';
import BlogTab from './component/screen/BlogTab/BlogTab';
import { Router, Routes, Route, Link } from 'react-router-dom'
import BlogDetail from './component/screen/BogDetail/BlogDetail'
import TicketDetail from './component/screen/TicketDetail/TicketDetail';
import AddPost from './component/screen/AddPost/AddPost';
import LogIn from './component/screen/LogIn/LogIn';
import Register from './component/screen/Register/Register';
import AddTour from './component/screen/Addtour/AddTour';
import Profile from './component/screen/Profile/Profile';
import Bill from './component/screen/Bill/Bill';
import Home from './component/screen/Home/Home';
function App() {
  return (
    <div className="App">
     
     
     <Routes>
     <Route path='/readblog' element={<BlogDetail/>} />
      <Route path='/blog' element={<BlogTab/>} />
      <Route path='/profile' element={<Profile/>} />
        <Route path='/tickets' element={<TicketTap/>} />
        <Route path='/ticketdetail' element={<TicketDetail/>} />
        <Route path='/addpost' element={<AddPost/>} />
        <Route path='/addtour' element={<AddTour/>} />
        <Route path='/bill' element={<Bill/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/register' element={<Register/>} />
        
        
       
      </Routes>
    </div>
  );
}

export default App;
