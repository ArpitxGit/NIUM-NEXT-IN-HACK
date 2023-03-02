// Object.defineProperty(exports, "esModule", {
//     value: true
//   });
//   exports.default = void 0;
//   var _react = _interopRequireDefault(require("react"));
//   var _Matches = _interopRequireDefault(require("./Matches"));
//   function _interopRequireDefault(obj) { return obj && obj.esModule ? obj : { default: obj }; }
//   function Matchlist() {
//     return /#PURE/_react.default.createElement("div", null, /#PURE/_react.default.createElement(_Matches.default, null));
//   }
//   var _default = Matchlist;
//   exports.default = _default;


import React from "react";
import { Link } from "react-router-dom";

import "./matchlist.css";
function Matchlist() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div></div>
                    <Link to={"/"}><button id="home">Home</button></Link>
                    <p>Welcome</p>
                    <p>Upcoming Matches</p>
                <div></div>
            </div>
        </div>
    </div>
    );
}

export default Matchlist;