import React from 'react'
import Data from './../../data/home.json'


function ForYourHome() {
    return (
        <div>
            <div className="container">
                <span className="rec-shadow1"> <b>For Your Home</b> </span>
                <div className="row" >
                    {Data.map((item) => (
                        <div className=" col-sm-3 " key={item.id} style={{paddingTop:"30px"}} >
                            <div className="rec-shadow">
                                <img className="rec-img" src={item.image} alt="" />
                                <h5 style={{paddingTop:"17px", textAlign:"center"}}>{item.name}</h5>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ForYourHome
