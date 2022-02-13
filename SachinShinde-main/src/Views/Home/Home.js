import React, { Component } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';


import Img1 from '../../assets/img/Group 108.png'
import Img2 from '../../assets/img/Group 109.png'
import Img3 from '../../assets/img/Group 110.png'
import Img4 from '../../assets/img/Group 111.png'
import Img5 from '../../assets/img/Group 108.png'



class dashboard extends Component {
    constructor(props){
    super(props);
    this.state = { }
    } 
    render() { 
         
        return ( 
            <div>
                <div className="Banner_section">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src={Img1} alt="First slide" className="Slide_img" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Img2} alt="First slide" className="Slide_img" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Img3} alt="First slide" className="Slide_img" />
                        </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={Img4} alt="First slide" className="Slide_img" />
                        </div>
                    </div>
                    <a className="carousel-control-prev " href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                        <span className="sr-only ">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                    {/* carousel ends */}

                    <div className="Banner_head_div">
                    <Fade bottom duration={3000}><p>sachin shinde</p></Fade>
                    <Fade bottom duration={5000}><p>photography</p></Fade>
                    <Fade bottom duration={5500}><Link to={'/Portfolio'} style={{ textDecoration: 'none' }}>
                          <a href="#" class="btn6 view-portfolio">
                           view portfolio
                    </a></Link></Fade>
                    </div>
                </div>
            </div>
         );

    }
}
 
export default dashboard;