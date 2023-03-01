//import { useEffect, useState } from "react";
import React from "react";
// import { Web3Auth } from "@web3auth/modal";
//import { Web3Auth } from "@web3auth/web3auth";
//import { CHAIN_NAMESPACES } from "@web3auth/base";
//import RPC from "./web3RPC";
import "./App.css";
import Landing from "./Landing";
import Admin from "./Admin";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;

