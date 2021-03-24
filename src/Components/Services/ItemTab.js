import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

function ItemTab() {
    const [key, setKey] = useState('Details');
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <Tabs className="tab-shadow" style={{ boxShadow: "0 4px 12px 0 #ddd" }}
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                    >
                        <Tab eventKey="Details" title="Details"> <br />
                            <h4>Details</h4> <br />
                            <p>AmaderService.com provides the best residential and commercial air conditioning service. We have specialize professionals for AC repair, service , maintenance and installation and have the experience and knowledge to get your AC installed and keep it running smoothly. Summers are hot! Do you find yourself tossing and turning in bed at night, unable to sleep because it is just too hot? and your AC does not make cooling? Its doesn’t mean to buy new one. If so, Our highly experienced team of professionals can repair and fixed your AC to keep you cool all year round We not only specialize in residential, but also commercial air conditioning installation. Is your business in need of AC installation or service? We have you covered. Our team is experienced in all types of commercial AC in the area, we can find the right system for your business. Our experienced team is works together to provide our clients with the best service and top quality workmanship.</p>
                        </Tab>
                        <Tab eventKey="Pricing" title="Pricing"> <br/>
                            <h4>Pricing</h4> <br/>
                            <p>You only have to pay the service charge including materials/parts cost if taken using cost will have to pay if no service is avail payment:</p>
                            <h4>Payment</h4>
                            <p>After service completion you will receive a text message on your mobile from AmaderService.com then you have to pay through Online or Bkash, Nogod or Cash on service completion. Please make sure that you have received the SMS containing the money receipt.</p>
                        </Tab>
                        <Tab eventKey="Features" title="Features"> <br/>
                            <h4>Service Features</h4> <br/>
                            <ul>
                                <li>AC Compressor Fitting With Gas Charge</li>
                                <li>AC Jet Wash</li>
                                <li>AC Basic Servicing</li>
                                <li>AC Master Service</li>
                                <li>AC Water Drop Solution</li>
                                <li>AC Installation Service</li>
                                <li>AC Uninstallation Service</li>
                                <li>AC Circuit Repair</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="TC" title="T&C"> <br/>
                            <h4>FAQ</h4> <br/>
                            <ul>
                                <li>AC Compressor Fitting With Gas Charge</li>
                                <li>AC Jet Wash</li>
                            </ul>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ItemTab
