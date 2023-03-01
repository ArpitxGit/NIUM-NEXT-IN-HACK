import React from "react";

import { Link } from "react-router-dom";

import "./admin.css";
function Admin() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div></div>
                    <Link to={"/"}><button id="home2">Home</button></Link>
                    <p>Welcome Administrator</p>
                    <button id="addmatch">Add Match</button>
                <div></div>
            </div>
        </div>
      </div>
    );
}

export default Admin;
