import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Header.scss";
import { NavLink } from "react-router-dom";

import logo from '../../assets/img/ss-photo.png'
import sidebar_button from '../../assets/img/Mask Group 1.png'
import close_sidebar from '../../assets/img/Group 77.png'






class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    

    close = () => {
        document.getElementById("sidebar").style.width="0";
    };
    open = () => {
        document.getElementById("sidebar").style.width="300px";
    };


    render() { 
        return ( 
            <div>
            <div className="header">
              <NavLink to={'/'} ><img src={logo} className="logo" /></NavLink>  
              <button className=" simple-btn"><img src={sidebar_button} className="sidebar_button" onClick={this.open} /></button>  
            </div>
            <div id="sidebar">
                <button onClick={this.close}><div class="close-container">
                    <div class="leftright"></div>
                    <div class="rightleft"></div>
                                           </div>
                </button>
                <ul>
                  <li><NavLink exact to={'/'}  activeClassName="selected" className="navlinks" onClick={this.close}>home</NavLink></li>
                  <li><NavLink exact to={'/Portfolio'}  activeClassName="selected" className="navlinks" onClick={this.close}>portfolio</NavLink></li>
                  <li><NavLink to={'/About'}  activeClassName="selected" className="navlinks" onClick={this.close}>about</NavLink></li>
                  <li><NavLink to={'/Classes'}  activeClassName="selected" className="navlinks" onClick={this.close}>classes</NavLink></li>
                   <li><NavLink to={'/Contact'}  activeClassName="selected" className="navlinks" onClick={this.close} >contact</NavLink></li>
                </ul>
                <p>© 2020 All Rights Reserved.<br/> Made by Brain Inventory With Love.</p>
            </div>
            </div>
         );
    }
}
export default withRouter(Header);

