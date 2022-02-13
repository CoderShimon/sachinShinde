import React, { Component } from "react";
import "./ContactUs.scss";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';


import map from '../../assets/img/Scroll Group 1.png'
import location from '../../assets/img/Group 49.png'
import mail from '../../assets/img/Group 50 (2).png'
import call from '../../assets/img/Group 51 (2).png'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contact_section">
                <Fade bottom duration={2000}><p>Contact Us</p></Fade>
                <Fade bottom duration={3000}><p>Let's have a coffee!</p></Fade>
                <div className="form_section">
                    <form>
                    <Fade bottom duration={2000}><div className="form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" className="form-control" id="fullname" placeholder="Enter your name" />
                    </div></Fade>
                    <Fade bottom duration={2200}><div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputEmail4">Email address</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                        <div className="form-group col-md-6">
                        <label for="contactNumber">contact number</label>
                        <input type="text" className="form-control" id="contactNumber" placeholder="contact number" />
                        </div>
                    </div></Fade>
                    <Fade bottom duration={2300}><div className="form-group">
                        <label for="message">message</label>
                        <textarea className="form-control" id="message" placeholder="Enter your message" />
                    </div></Fade>
                    <Fade bottom duration={2300}><div className="w-100 text-center">
                        <button type="submit" className="btn-5 effectbtn">Submit</button>
                        <p>thanks for submission!</p>
                    </div></Fade>
                    </form>
                </div>

                <div className="container-fluid map-section">
                    <div className="row">
                        <div className="col-xl-8">
                            <img src={map} />
                        </div>
                        <div className="col-xl-4 d-flex align-items-center">
                            <div className="address_div">
                                <p>office address</p>
                                <table>
                                    <tr>
                                        <td><img src={location}/></td>
                                        <td>shekharcentral,618,ab rd,palasia square.manorama ganj,indore,madhya pradesh 452001</td>
                                    </tr>
                                    <tr>
                                        <td><img src={mail}/></td>
                                        <td>artphoto@sachinshinde.com</td>
                                    </tr>
                                    <tr>
                                        <td><img src={call}/></td>
                                        <td>tel: 123-456-789</td>
                                    </tr>
                                </table>
                                {/* <p><span><img src={location}/></span>shekhar central, 618, ab rd, palasia square. manorama ganj, indore, madhya pradesh 452001</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Contact;

