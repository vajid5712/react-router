import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";

function Details() {
    const location = useLocation();
    const state = location.state || {};
    const { userId } = useParams();
    const [user, setUser] = useState(state.data);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            axios("/react-router/data.json").then((response) => {
                const item = response.data.find(
                    (userItem) => userItem.id === parseInt(userId)
                );
                setUser(item);
            });
        }
    }, [userId, user]);

    if (!user) {
        return null;
    }

    return (
        <div className="page details">
            <div className="title">{user.name}</div>
            <div className="body">Address {user.address}</div>
            <div className="body">Phone: {user.phone}</div>
            <div className="body">Class: {user.class}</div>
            <div className="sub-menu">
                <NavLink to="" end>
                    <span>Marks</span>
                </NavLink>
                <NavLink to="sports">
                    <span>Sports</span>
                </NavLink>
                <NavLink to="remarks">
                    <span>Remarks</span>
                </NavLink>
            </div>
            <div className="details-body">
                <Outlet context={user} />
            </div>
            <div>
                <button
                    onClick={() => {
                        navigate("..");
                    }}
                >
                    BACK
                </button>
            </div>
        </div>
    );
}

export default Details;
