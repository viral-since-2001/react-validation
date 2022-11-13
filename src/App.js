import './App.css';
import Home from './componants/Home';
import { Routes, Link ,Route } from 'react-router-dom';
import { UserListProvider } from './componants/Userdata';
import EditUser from './componants/editUser';
import AddUser from './componants/AddUser';
function App() {
  return (
    <>
          <UserListProvider>
            <h1>NavBar</h1>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/add" element={<AddUser />}/>
              <Route path="/edit/:id" element={<EditUser />}/>           
            </Routes>
          </UserListProvider>
    </>
  );
}

export default App;
