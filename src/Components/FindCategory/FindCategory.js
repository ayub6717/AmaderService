import React, { useState } from 'react'
import './FindCategory.css'
import { Modal, ModalTitle, ModalBody, ModalFooter, Button, Tab, TabContainer, TabContent, TabPane, Row, Col, Nav } from 'react-bootstrap'
import Data from './../../data/Category.json'
import DataTwo from './../../data/CategoryTwo.json'
import { faTrash, faTruckMonster } from '@fortawesome/free-solid-svg-icons'



function FindCategory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div>
            {/* =======================Modal Start=========================== */}
            <>
                <Modal size="lg" show={show} onHide={handleClose} animation={true} >
                    <Modal.Header closeButton>
                        <Modal.Title>Select Your Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={5} className="Bg-a">
                                    {Data.map((item) => (
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item key={item.id}>
                                                <Nav.Link eventKey={item.eventKey}>
                                                    <span><img style={{ width: "25px" }} src={item.image} alt="AcCategory.png" /></span> <span style={{ display: "inline-block", marginLeft: "15px" }}> <b>{item.name}</b> </span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    ))}
                                </Col>
                                <Col sm={7} className="Bg-b">
                                    {DataTwo.map((item) => (
                                        <Tab.Content>
                                            <Tab.Pane eventKey={item.eventKey} key={item.id}  className="content-border">
                                                <span style={{ padding:"5px",paddingLeft:"15px", display:"inline-block"}}><img style={{ width: "30px" }} src={item.image} alt="AcCategory.png" /></span> <span style={{ display: "inline-block", marginLeft: "15px" }}> <b>{item.name}</b> </span>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    ))}
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </>
            {/* =======================Modal end=========================== */}


            {/* =========================CateGory========================= */}

            <div class="container con-style">
                <div class="row row-cols-5 col-width">
                    {Data.map((item) => (
                        <div class="col col-pad" onClick={handleShow} style={{cursor:"pointer"}}>
                                <div className="img-border">
                                    <div className="img-effect" key={item.id}>
                                        <img className="img-category"  data-toggle="modal" data-target="#myModal" src={item.image} alt="AcCategory.png" />
                                        <h6 style={{ paddingTop: "20px" }}>{item.name}</h6>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FindCategory
