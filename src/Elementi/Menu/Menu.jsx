import React from 'react';
import "./Menu.css";
import { IoIosApps } from "react-icons/io";
import {BrowserRouter as Router,
    Routes,
    Route,
    Link} from "react-router-dom";
import { IoMdHome ,IoMdPaper,IoIosCall} from "react-icons/io";
import Pocetna from "./../../Stranice/Pocetna/Pocetna";
import Kontakt from "./../../Stranice/Kontakt/Kontakt";
import Kategorije from "./../../Stranice/Kategorije/Kategorije";
import Novosti from "./../../Stranice/Novosti/Novosti";
class Menu extends React.Component{
    //koristi se ComponentDidMount() funkcija - class komponenta je (napokon)
    componentDidMount(){ 
        var list1=[];
        list1=document.querySelectorAll('.list');
        console.log(list1);
        list1.forEach((item)=>item.addEventListener('click',this.activeLink));
    }
    activeLink(){
        var list1=[];
        list1=document.querySelectorAll('.list');
        list1.forEach((item)=>item.classList.remove('active'));
        this.classList.add('active');
    }
    render()
    {
        return (
            <Router>
                <nav >
                    <ul>
                        <li className="list active">
                            <Link to="/" >
                            <span className='icon'>
                                <IoMdHome/>
                            </span>
                            <span className='text'>Poctna</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/kategorije">
                            <span className='icon'>
                                <IoIosApps/>
                            </span>
                            <span className='text'>Kategorije</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/novosti">
                            <span className='icon'>
                                <IoMdPaper/>
                            </span>
                            <span className='text'>Novosti</span>
                            </Link>
                        </li>
                        <li className="list">
                            <Link to="/kontakt">
                            <span className='icon'>
                                <IoIosCall/>
                            </span>
                            <span className='text'>Kontakt</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={<Pocetna/>}/>
                    <Route exact path="/kategorije" element={<Kategorije/>}/>
                    <Route exact path="/novosti" element={<Novosti/>}/>
                    <Route exact path="/kontakt" element={<Kontakt/>}/>
                </Routes>
            </Router>
        )
    }
}

export default Menu;
