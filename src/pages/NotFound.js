import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="page">
            Sorry, Page Not Found
            <div>
                <Link to="/">Go Home</Link>
            </div>
        </div>
    );
}

export default NotFound;
