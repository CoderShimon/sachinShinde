import React, { Component } from "react";
import "./About.scss";
import Fade from 'react-reveal/Fade';


import About_img from '../../assets/img/IMG_20200823_220006_950.png'




class About extends Component {
    constructor(props){
    super(props);
    this.state = { }
    } 
    render() { 
         
        return ( 
            
                <div className="About_section">
                  <div className="row m-0">
                      <div className="col-xl-5 p-0">
                          <img src={About_img} />
                      </div>
                      <div className="col-xl-7 p-0">
                      <div className="about_deatils">
                      <Fade bottom duration={2000}><p>About</p></Fade>
                      <Fade bottom duration={3000}><p>Sachin Shinde</p></Fade>
                      <Fade bottom duration={4000}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                   when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                   It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                   It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                   and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Fade>
                          </div>
                      </div>
                  </div>
                  </div>
            
         );

    }
}
 
export default About;