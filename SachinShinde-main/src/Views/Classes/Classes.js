import React, { Component } from "react";
import './Classes.scss'
import Fade from 'react-reveal/Fade';


import banner_img from '../../assets/img/nicole-geri-FavlcROocr0-unsplash.png'
import photo_editing from '../../assets/img/jye-b-RuTMP0iI_ek-unsplash (1).png'
import cinematograpgy from '../../assets/img/pexels-cottonbro-4629627 (1).png'


class Classes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="classess_section">
                <Fade bottom duration={2000}><p className="headname">Professional Classes</p></Fade>
                <Fade bottom duration={2000}><p className="subheadname">By Sachin Shinde</p></Fade>
                
                <div className="container-fluid">
                    <div className="row my-5">
                        <div className="col-xl-8">
                            <p className="content-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was opularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                        </div>
                        <div className="col-xl-4">
                            <img src={banner_img} className="w-100" />
                        </div>
                        {/* <p className="headname">Available Classes</p> */}
                    </div>

                    <div className="my-5 pt-5">
                    <p className="headname">Available Classes</p>
                    <Fade bottom duration={2000}><div className="class_cards">
                           <p>Photo Editing</p>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                           <div className="row">
                               <div className="col-xl-6 my-4">
                                   <img src={photo_editing} className="w-100" />
                               </div>
                               <div className="col-xl-6">
                                   <div className="class_desc-div">
                                       <div>
                                       <table>
                                           <tr>
                                               <td>duration:</td>
                                               <td>1 dec,2020 - 30 jan, 2021</td>
                                           </tr>
                                           <tr>
                                               <td>course fees:</td>
                                               <td>₹89,000</td>
                                           </tr>
                                       </table>
                                       </div>
                                       <div className="mt-auto">
                                       <ul>
                                           <p>course topics:</p>
                                           <li>Lorem Ipsum is simply dummy text.</li>
                                           <li>Lorem Ipsum is simply dummy text.</li>
                                           <li>Lorem Ipsum is simply dummy text.</li>
                                           <li>Lorem Ipsum is simply dummy text.</li>
                                       </ul>
                                       <button className="effectbtn">Join Now</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div></Fade>
                       <Fade bottom duration={2000}><div className="class_cards">
                           <p>Cinematography</p>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                           <div className="row">
                               <div className="col-xl-6 my-4">
                                   <img src={cinematograpgy} className="w-100" />
                               </div>
                               <div className="col-xl-6">
                                   <div className="class_desc-div">
                                       <div>
                                       <table>
                                           <tr>
                                               <td>duration:</td>
                                               <td>1 dec,2020 - 30 jan, 2021</td>
                                           </tr>
                                           <tr>
                                               <td>course fees:</td>
                                               <td>₹89,000</td>
                                           </tr>
                                       </table>
                                       </div>
                                       <div className="mt-auto">
                                       <ul>
                                           <p>course topics:</p>
                                           <li>Lorem Ipsum is simply dummy text.</li>
                                           <li>Lorem Ipsum is simply dummy text.</li>
                                           <li>Lorem Ipsum is simply dummy text.</li>
                                           <li>Lorem Ipsum is simply dummy text.</li>
                                       </ul>
                                       <button className="effectbtn">Join Now</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           </div></Fade>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default Classes;