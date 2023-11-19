import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Start from './components/Start';
import Todo from "./components/Todo";
// import React, { createContext } from 'react';

// export const UrlPrefixContext = createContext();


function App() {

  // const prefix = "http://35.189.30.150:8000"
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Todo />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>

  );
}

export default App;
