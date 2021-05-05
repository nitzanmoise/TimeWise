import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function AddShift() {
    return (
        <div className="AddShift">
            <h3>Add a shift</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/calendar">Calendar</Link>
                    </li>
                    <li>
                        <Link to="/requests">Requests</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default AddShift;