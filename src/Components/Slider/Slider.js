import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import Data from './../../data/home.json'

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

function Slider() {
    return (
        <div className="container">

            <Carousel responsive={responsive}>
                {/* <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div>
                <div style={{backgroundColor:"red"}}>Item 1</div> */}

                    {Data.map((item) => (
                        <div key={item.id} style={{ padding: "15px" }} >
                            <div className="rec-shadow">
                                <img className="rec-img" src={item.image} alt="" />
                                <h5 style={{ paddingTop: "17px", textAlign: "center", fontSize: "17px" }}>{item.name}</h5>
                            </div>
                        </div>
                    ))}

            </Carousel>
        </div>
    )
}

export default Slider




