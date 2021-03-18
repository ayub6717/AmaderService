import React from 'react'
import Data from './../../data/home.json'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



function ForYourHome() {
    return (
        <div>
            <div className="container">
                <span className="rec-shadow1" style={{marginBottom:"20px", display:"inline-block"}}> <b>For Your Home</b> </span>
                <Carousel responsive={responsive}>
                {/* <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div> */}

                {Data.map((item) => (
                    <div key={item.id}  >
                        <div className="rec-shadow2">
                            <img className="rec-img1" src={item.image} alt="" />
                            <h6 style={{ paddingTop: "17px", textAlign: "center", fontSize:"17px" }}>{item.name}</h6>
                        </div>
                    </div>
                ))}
            </Carousel>
            </div>
        </div>
    )
}

export default ForYourHome
