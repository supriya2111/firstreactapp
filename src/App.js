import logo from './logo.svg';
import './App.css';
import HelloFun from './Components/HelloFun';
import HelloClass from './Components/HelloClass';
import NewComp from './Components/NewComp';
import ArrayUList from './Components/ArrayUList';
import TableComp from './Components/TableComp';
import PropsFactComp from './Components/PropsFactComp';
import PropsArrayComp from './Components/PropsArrayComp';
import PropsEmpsComp from './Components/PropsEmpComp';
import StateHello from './Components/StateHello';
import CountFun from './Components/CountFun';
import StateColor from './Components/StateColor';
import StyleParaComp from './Components/StyleParaComp';
import StudentState from './Components/StudentState';
import LoginFormState from './Components/LoginFormState';
import LoginUserState from './Components/LoginUserState';
import UsingEffect from './Components/UsingEffect';
import ImageToggle from './Components/StateImg';
import {Link, Route, Routes} from "react-router-dom";
import Home from './Components/Home';
import RestAPIUser from './Components/RestAPIUser';
import RestAPIEmp from './Components/RestAPIEmp';
import InsertData from './Components/InsertData';
import Counter from './Components/Counter';

function App() {
  return (
    <div >
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
         {/* <h1 id="root">Hello from REACT</h1> */}
         {/* <HelloFun/> */}
         {/* <NewComp/> */}
         {/* <HelloClass/> */}
         {/* <ArrayUList/> */}
         {/* <TableComp/> */}
         {/* <PropsFactComp val="5"/> */}
          {/* <PropsArrayComp  arr={["Red","Green","Blue","Pink"]}/> */}
          {/* <PropsEmpsComp arr={[101,"Supriya",20000]} /> */}
          {/* <StateHello/> */}
          {/* <CountFun /> */}
          {/* <StateColor /> */}
          {/* <StyleParaComp/> */}
          {/* <StudentState/> */}
          {/* <LoginFormState/> */}
          {/* <LoginUserState/> */}
          {/* <UsingEffect/> */}
          {/* <ImageToggle/> */}

          {/* <ul className='nav navbar'>
             <li className='nav-item'>
                 <Link to="/home" className="nav-link">HOME
                 </Link>
             </li>
             <li className='nav-item'>
                 <Link to="/about" className="nav-link">TIME
                 </Link>
             </li>
             <li className='nav-item'>
                 <Link to="/contact" className="nav-link">Contact
                 </Link>
             </li>
           </ul>
            */}
           {/* <Routes>
                   <Route path='/home' element={<Home/>}></Route>
                   <Route path='/about' element={<UsingEffect/>}></Route>
                   <Route path='/contact' element={<LoginFormState/>}></Route>
           </Routes> */}

           {/* <RestAPIUser/> */}
           {/* <RestAPIEmp/> */}
           {/* <InsertData/> */}
           <Counter/>
      </header>
    </div>
  );
}

export default App;
