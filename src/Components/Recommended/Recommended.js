import React from 'react'
import Data from './../../data/data.json'
import './Recommended.css'
function Recommended() {
    return (
        <div>
            <div className="container">
                <span className="rec-shadow1"> <b>Recommended</b> </span>
                <div className="row" >
                    {Data.map((item) => (
                        <div className=" col-sm-3 " key={item.id} style={{paddingTop:"30px"}} >
                            <div className="rec-shadow">
                                <img className="rec-img" src={item.image} alt="" />
                                <h5 style={{paddingTop:"17px", textAlign:"center",fontSize:"17px"}}>{item.name}</h5>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Recommended
