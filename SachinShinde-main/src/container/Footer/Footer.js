import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

import fb from '../../assets/img/Group 55.png'
import insta from '../../assets/img/Group 555.png'
import linkedin from '../../assets/img/Group 5555.png'







class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

          }
    }
    render() { 
        return ( 
            <div className="Footer">
                <div className="row">
                    <div className="col-md-10 pr-0">
                        <p>2020 by sachin shinde proudly created by braininventory</p>
                    </div>
                    <div className="col-md-2">
                        <div className="social-icon-div">
                            <img src={fb} />
                            <img src={insta} />
                            <img src={linkedin} />
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
export default withRouter(Footer);

