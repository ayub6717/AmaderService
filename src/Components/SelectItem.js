import React from 'react'
import './../Components/Select.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {IoLocationSharp, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { IoLocationSharp } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";


function SelectItem() {
    return (
        <div>
            <div className="SelectItem">
                <div className="container" style={{ padding: "30px" }}>
                    <div className="row">
                        <div className="col-sm-6" style={{ fontFamily: "as" }}>
                            <img style={{ width: "50%" }} src="/img/AnotherPic/call.png" alt="" />
                            <h1>Your</h1>
                            <h1 style={{ fontSize: "50px" }}>Trasted</h1>
                            <h3 style={{ fontSize: "30px" }} >Service Partner</h3>
                            <p>get all servicies you need in one place <br /> from professional expart, at home!</p>
                            <span><img className="img-width" src="/img/play-store.png" alt="play-store" />  <img className="img-width" src="/img/play-store.png" alt="play-store" /></span>
                        </div>
                        <div className="col-sm-6">
                            <div className="select-one">
                                <h5 style={{ marginTop: "25px" }}>Get Any Service, Any Time</h5>
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
