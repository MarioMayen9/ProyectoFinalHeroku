import React, { useState, useEffect, useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import BoardUser from "./pages/BoardUser";
import BoardModerator from "./pages/BoardModerator";
import BoardAdmin from "./pages/BoardAdmin";
import Admin from "./pages/Adminview/AdminBoard";
import Medications from "./pages/Medications/Medications";
import Auxilios from "./pages/Auxilios/Auxilios"
import Enfermeades from "./pages/Enfermedades/Enfermedades"
import ListofCitas from "./pages/ListofCitas/ListofCitas";


import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";


// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import UserBoard from "./pages/Userview/UserBoard";
import AddCitas from "./pages/AddCitas/AddCitas";
import SearchCita from "./pages/SearchCita/SearchCita";



const App = () => {
  const [setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    

   
   
    <Router history={history}>
    <div>
    <nav className="navbar navbar-expand">
          <div className="navbar-nav mr-auto ">
            
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/adminBoard"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/userBoard"} className="nav-link">
                  UserBoard
                </Link>
              </li>
              
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto navbar-nav navbar-center">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  Cerrar Sesion
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto navbar-nav navbar-center" >
              <li className="nav-item">
                <Link to={"/login"} className="nav-link" >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link" >
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>
            
        <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/profile" element={<Profile/>} />
            <Route exact path="/adminBoard" element={<Admin/>} />
            <Route exact path="/medications" element={<Medications/>} />
            <Route exact path="/auxilios" element={<Auxilios/>} />
            <Route exact path="/enfermedades" element={<Enfermeades/>} />
            <Route exacth path ="/search-citas" element={<SearchCita/>}/>
            <Route exact path="/citaslist" element={<ListofCitas/>} />
            <Route exact path ="/add-citas" element={<AddCitas/>}/>
          
            
            
            <Route path="/userBoard" element={<UserBoard/>} />
          </Routes>
        </div>

        

        {/* <AuthVerify logOut={logOut}/> */}
        </div>
    </Router>
  );
};

export default App;
