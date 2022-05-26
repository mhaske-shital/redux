 
import './App.css';
import LargestNumber from './components/LargestNumber';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter,Route,Switch}from 'react-router-dom'
import Admin from './pages/Admin';
import Delete from './pages/Delete';
import Blogdetails from './pages/Blogdetails';
import Login from './pages/Login'
import LogOut from './pages/LogOut'
import UserRegister from './pages/UserRegister'
function App() {
  return (
    <BrowserRouter>
    {/* {JSON.stringify(process.env.REACT_APP_BLOG_URL)} */}
      <Navbar/>
       <Switch>
         <Route exact path="/home" component={Home}/>
         <Route exact path="/add-blog" component={Admin}/>
         <Route exact path="/delete-blog" component={Delete}/>
         <Route exact path="/blog-details/:id" component={Blogdetails}/>
         <Route path="/logout" component={LogOut}/>
         <Route exact path="/register-page" component={UserRegister}/>
         <Route path="/" component={Login}/>
        
       </Switch>
       
    </BrowserRouter>
  );
}

export default App;
