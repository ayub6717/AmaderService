import React from 'react'
import './ClientSay.css'

function CallNow() {
    return (
        <div className="container call-bg">
            <div className="row">
                <div className="col-sm-5">
                    <div style={{padding:"20px"}}>
                        <h1>Did not find what you are looking? </h1>
                        <p>Please submit your desired request</p>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div style={{ paddingTop: "80px" }}>
                        <span><button className="call-btn"> <img src="img/AnotherPic/headset.svg" style={{ width: "20px" }} alt="" /> <b>Call Now</b></button> <button className="call-btn"><b>Request a service</b></button></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallNow
