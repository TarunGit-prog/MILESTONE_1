import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home'
import Leave from './components/leave'
import Attendence from './components/attendence'
import Login from './components/login'
import Applyleave from './components/applyleave'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/"/>
        <Route element ={<Home/>} path="/Home" />
        <Route element ={<Leave/>} path="/Leave" />
        <Route element ={<Attendence/>} path="/Attendence" />
        <Route element={<Applyleave/>} path="/Applyleave"/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
