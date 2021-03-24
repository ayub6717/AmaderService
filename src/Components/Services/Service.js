import React, { useEffect, useState } from "react";
import './../Services/Service.css'
import ItemTab from './ItemTab'



function Service() {

    // useEffect(() => {
    //     fetchItem();
    //   },[]);
    //   const [item, setItem] = useState([]);
    //   const fetchItem = async () => {
    //     const link =
    //       "https://kentradigital.com/api/getServiceDetails?servicetypeID=1";
    //     const data = await fetch(link);
    //     const item = await data.json();
    //     setItem(item);
    //   };
    return (
        <div>
            <div className="ServiceBack">
                <div className="container">
                    <h1 className="ac-litle">Ac Repair Service</h1>

                    <div className="container des">
                        <p>✓ Residential or Commercial AC Services</p>
                        <p>✓ Certified Technicians Qualified to Repair all Types Air Conditioner</p>
                        <p>✓ Air Conditioner Repairs & Servicing Done Within 4 hrs</p>
                    </div>

                    {/* {item.map((item) => (
                        <div key={item.id} style={{ padding: "15px" }} >
                            <div className="rec-shadow">
                                <img className="rec-img" src={item.image} alt="" />
                                <h5 style={{ paddingTop: "17px", textAlign: "center", fontSize: "17px" }}>{item.name}</h5>
                            </div>
                        </div>
                    ))} */}

                    <div className="sidebox">
                        <div className="sidebox1">
                            <h4 className="ac-book">Book your Ac Service</h4>
                            <div className="ac-item">
                                <p>AC Basic Service <span style={{float:"right"}}>➽</span></p> 
                            </div>
                            <div className="ac-item">
                                <p>AC Basic Service <span style={{float:"right"}}>➽</span></p> 
                            </div>
                            <div className="ac-item">
                                <p>AC Basic Service <span style={{float:"right"}}>➽</span></p> 
                            </div>
                            <div className="ac-item">
                                <p>AC Basic Service <span style={{float:"right"}}>➽</span></p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ItemTab />

        </div>
    )
}

export default Service
