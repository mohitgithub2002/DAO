import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import Card from "./component/Card";
import { Routes, Route, Navigate } from "react-router-dom";
import { Details } from "./component/Details";
import Cookies from "js-cookie";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    // Check if the user is authenticated
    const user = Cookies.get('user');
    
    if (user) {
        setIsAuth(true);
        console.log(user, isAuth)
    }
  }, []);
  return (
    <>
      <Header />
      
      <Routes>
          <Route path="/" element = {!isAuth?<Navigate to ="/login"/>:<Card/>} />
          <Route path="/card" element = {!isAuth?<Navigate to ="/login"/>:<Dashboard/>} />
          {/* <Route path="/dashbord" Component={Dashboard} /> */}
          <Route path="/details" element = {!isAuth?<Navigate to ="/login"/>:<Details/>} />
          <Route path="/login" element = {!isAuth?<Login/>:<Navigate to="/"/>} />
      </Routes>
      
      
      
    </>
  );
};

export default App;
