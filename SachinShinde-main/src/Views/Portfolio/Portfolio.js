import React, { Component } from "react";
import "./Portfolio.scss";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';


// import Gallery from "react-photo-gallery";
import Gallery from 'react-grid-gallery';



import Img1 from '../../assets/img/Group 108.png'
import Img2 from '../../assets/img/Group 109.png'
import Img3 from '../../assets/img/Group 110.png'
import Img4 from '../../assets/img/Group 111.png'
import Img5 from '../../assets/img/Group 108.png'

const photos = [
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200108_113156_160.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200108_113156_160.png",
        thumbnailWidth: 300,
        tags: [{value: "Nature", title: "Nature"}, {value: "Flora", title: "Flora"}],
        caption: "photo title"    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200111_120559_726.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200111_120559_726.png",
        thumbnailWidth: 500,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200201_202054_560.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200201_202054_560.png",
        thumbnailWidth: 300,
        caption: "photo title"    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200924_125026_144.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200924_125026_144.png",
        thumbnailWidth: 500,
        caption: "photo title"    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200330_172215_607.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200330_172215_607.png",
        thumbnailWidth: 300,
        caption: "photo title"    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200923_201847_676.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200923_201847_676.png",
        thumbnailWidth: 500,
        tags: [{value: "Nature", title: "Nature"}],
        caption: "photo title"    },
   
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20201015_121300_274.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20201015_121300_274.png",
        thumbnailWidth: 500,
        caption: "photo title"    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200628_130731_874.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200628_130731_874.png",
        thumbnailWidth: 300,
        caption: "photo title"    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200629_122041_509.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200629_122041_509.png",
        thumbnailWidth: 300,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200905_083516_696.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200905_083516_696.png",
        thumbnailWidth: 300,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200910_181257_303.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200910_181257_303.png",
        thumbnailWidth: 300,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200923_090309_345.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200923_090309_345.png",
        thumbnailWidth: 500,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200910_084948_725.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200910_084948_725.png",
        thumbnailWidth: 300,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20201019_175324_468.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20201019_175324_468.png",
        thumbnailWidth: 500,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200909_171901_536.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200909_171901_536.png",
        thumbnailWidth: 300,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200923_201948_513.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200923_201948_513.png",
        thumbnailWidth: 500,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20201014_160928_900.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20201014_160928_900.png",
        thumbnailWidth: 300,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200923_202255_012.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200923_202255_012.png",
        thumbnailWidth: 300,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200923_143032_215.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200923_143032_215.png",
        thumbnailWidth: 500,
        caption: "photo title"
    },
    {
        src: "https://www.braininventory.com/sachinassets/IMG_20200925_093248_315.png",
        thumbnail: "https://www.braininventory.com/sachinassets/IMG_20200925_093248_315.png",
        thumbnailWidth: 300,
        caption: "photo title"
    }
]

class Portfolio extends Component {
    constructor(props){
    super(props);
    this.state = {
       
     } 
    } 
    
    render() { 
         
        return ( 
            <div className="portfolio_section">
                <Fade bottom duration={3000}><p>Portfolio</p></Fade>
                <div className="">
                <Fade bottom duration={4000}><nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-all-tab" data-toggle="tab" href="#nav-all" role="tab" aria-controls="nav-all" aria-selected="true">All</a>
                            <a class="nav-item nav-link" id="nav-fashion-tab" data-toggle="tab" href="#nav-fashion" role="tab" aria-controls="nav-fashion" aria-selected="false">fashion</a>
                            <a class="nav-item nav-link" id="nav-wedding-tab" data-toggle="tab" href="#nav-wedding" role="tab" aria-controls="nav-wedding" aria-selected="false">wedding</a>
                            <a class="nav-item nav-link" id="nav-maternity-tab" data-toggle="tab" href="#nav-maternity" role="tab" aria-controls="nav-maternity" aria-selected="false">maternity</a>
                            <a class="nav-item nav-link" id="nav-product-tab" data-toggle="tab" href="#nav-product" role="tab" aria-controls="nav-product" aria-selected="false">product</a>
                        </div>
                    </nav></Fade>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab"><Fade bottom duration={5000}><Gallery images={photos} /></Fade></div>
                        <div class="tab-pane fade" id="nav-fashion" role="tabpanel" aria-labelledby="nav-fashion-tab"><Gallery images={photos} /></div>
                        <div class="tab-pane fade" id="nav-wedding" role="tabpanel" aria-labelledby="nav-wedding-tab"><Gallery images={photos} /></div>
                        <div class="tab-pane fade" id="nav-maternity" role="tabpanel" aria-labelledby="nav-maternity-tab"><Gallery images={photos} /></div>
                        <div class="tab-pane fade" id="nav-product" role="tabpanel" aria-labelledby="nav-product-tab"><Gallery images={photos} /></div>
                    </div>
                    </div>
            </div>
         );

    }
}
 
export default Portfolio;