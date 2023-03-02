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


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import "./admin.css";

// function Admin() {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [totalTickets, setTotalTickets] = useState(0);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//   };

//   const handleTotalTicketsChange = (event) => {
//     setTotalTickets(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Do something with the form data
//   };

//   return (
//     <form onSubmit={handleSubmit} className="ticket-form">
//       <div className="form-group">
//         <label htmlFor="name" className="form-label">Name: </label>
//         <input type="text" id="name" value={name} onChange={handleNameChange} className="form-input" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="location" className="form-label">Location: </label>
//         <input type="text" id="location" value={location} onChange={handleLocationChange} className="form-input" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="date" className="form-label">Date: </label>
//         <input type="date" id="date" value={date} onChange={handleDateChange} className="form-input" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="totalTickets" className="form-label">Total Tickets: </label>
//         <input type="number" id="totalTickets" value={totalTickets} onChange={handleTotalTicketsChange} className="form-input" />
//       </div>
//       <button type="submit" className="form-button">Add</button>
//     </form>
//   );
// }
// export default Admin;