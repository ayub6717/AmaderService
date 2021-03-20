import React from 'react'
import './../SelectItem/Select.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {IoLocationSharp, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { IoLocationSharp } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";


function SelectItem() {
    return (
        <div className="SelectItem">
            <div >
                <div className="container" style={{ padding: "30px" }}>
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="call-pic" src="/img/AnotherPic/call.png" alt="" />
                            <div className="head-font">
                                <h3>Your</h3>
                                <h1 >Trusted</h1>
                                <h2 >Service Partner</h2>
                            </div>
                            <p>Get all servicies you need in one place <br /> from professional expart, at home!</p>
                            <span><img className="img-width" src="/img/app-store.png" alt="app-store.png" />  <img className="img-width" src="/img/play-store.png" alt="play-store" /></span>
                        </div>
                        <div className="col-sm-6">
                            <div className="select-one">
                                <h5>Get Any Service, Any Time</h5>
                                <div class="form-group">
                                    <label for="sel1">< IoLocationSharp style={{ color: "green" }} /> Select Location</label>
                                    <select class="form-control" id="sel1">
                                        <option>Gulshan</option>
                                        <option>Banani</option>
                                        <option>Dhanmondi</option>
                                        <option>Uttara</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="sel1">< BiSearchAlt2 style={{ color: "green" }} /> Find a service</label>
                                    <select class="form-control" id="sel1">
                                        <option>Ac Repair Service</option>
                                        <option>Tv Repair Service</option>
                                        <option>Refrigerator Repair</option>
                                        <option>Renovation & Interior Design</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectItem
