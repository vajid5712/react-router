import React from "react";
import { NavLink } from "react-router-dom";
import { clearUserInfo } from "../utils/Common";
import "./Header.css";
import LogedInOutlet from "./outlets/LogedInOutlet";

function Header() {
    return (
        <div>
            <div className="header">
                <NavLink to="/" end>
                    <span>Home</span>
                </NavLink>
                <NavLink to="users">
                    <span>Users</span>
                </NavLink>
                <NavLink to="usage">
                    <span>Usage</span>
                </NavLink>
                <NavLink to="settings">
                    <span>Settings</span>
                </NavLink>
                <NavLink
                    className="logout"
                    to="login"
                    onClick={() => clearUserInfo()}
                >
                    <span> Logout </span>
                </NavLink>
            </div>

            <div>
                <LogedInOutlet />
            </div>
        </div>
    );
}

export default Header;
