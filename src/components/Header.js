import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg header fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand">krlbook</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active' to="/post">Посты</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active' to="/group">Группы</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav flex justify-end w-full">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName='active' to="/admin">Админы</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
