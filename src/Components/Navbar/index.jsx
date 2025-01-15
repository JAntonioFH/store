import { NavLink } from "react-router-dom";
import { useContext } from "react";


import { Context } from "../../Context";



function NavBar() {
    const context = useContext(Context)
    const activeStyle = "underline underline-offset-5";
    return ( 
        <nav className="flex justify-between items-center z-10 top-0 w-full fixed py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg" >
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Clothes</NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Electronics</NavLink>
                </li>
                <li>
                    <NavLink to="/l1" className={({ isActive }) => (isActive ? activeStyle : undefined)}>L1</NavLink>
                </li>
                <li>
                    <NavLink to="/l2" className={({ isActive }) => (isActive ? activeStyle : undefined)}>L2</NavLink>
                </li>
                <li>
                    <NavLink to="/l3" className={({ isActive }) => (isActive ? activeStyle : undefined)}>L3</NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li>
                    antonio@figueroamx.com
                </li>
                <li>
                    <NavLink to="/myorders" className={({ isActive }) => (isActive ? activeStyle : undefined)}>My orders</NavLink>
                </li>
                <li>
                    <NavLink to="/myaccount" className={({ isActive }) => (isActive ? activeStyle : undefined)}>My account</NavLink>
                </li>
                <li>
                    <NavLink to="/signin" className={({ isActive }) => (isActive ? activeStyle : undefined)}>Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={({ isActive }) => (isActive ? activeStyle : undefined)}>🛒 {context.count}</NavLink>
                </li>
            </ul>
        </nav>
     );
}

export  {NavBar};