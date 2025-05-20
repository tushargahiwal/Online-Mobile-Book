import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/User/Register';
import Home from './Components/User/Home';
import Layout from './Components/Admin/Layout';
import Dashboard from './Components/Admin/Dashboard';
import ProductList from './Components/Admin/ProductList';
import Profile from './Components/Profile';

function App() {
  return (
    <Routes>
        
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/home' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
    
        <Route path="/head/*" element={<Layout />} />
      </Routes>

    
  );
}

export default App;
