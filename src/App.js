import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Main from "./Component/Main";
import Landing from "./Component/landing";
import Post from "./Component/post";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/main" element={<Main />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
