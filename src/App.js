import React,{Fragment} from 'react';
import LoginPage from "./components/Login/LoginPage";
import { Route,Routes } from "react-router-dom";
import Register from "./components/Login/Register";
import NavBar from './components/NavBar';
function App() {
  return (

    <Fragment>    <NavBar /></Fragment>

    // <Routes >
      
    //   <Route path="/login" element ={<LoginPage />}/>
    //   <Route path="/Register" element= {<Register />}/>

    //   </Routes>
  );
}


export default App;
