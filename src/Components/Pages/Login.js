import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Button,Form } from 'react-bootstrap'
import './Orders.css'


function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <span variant="primary" onClick={handleShow}>
                Login
          </span>

            <Modal size="md" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h4 style={{ textAlign: "center", }}>WELLCOME</h4>
                    <h6 style={{ textAlign: "center" }}>USER LOGIN</h6> <br/>

                    <Form style={{padding:"10px"}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="placeStyle" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label >Password</Form.Label>
                            <Form.Control className="placeStyle" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            {/* <Form.Check type="checkbox" label="Check me out" /> */}
                        </Form.Group>
                        <Button style={{backgroundColor:"#10865d", marginLeft:"40%"}} type="submit">
                           <b> Login</b>
                        </Button>
                    </Form>
                    <div style={{padding:"20px"}}>
                        <span className="log-bt">Forgot Password</span> <span className="log-bt" style={{float:"right",fontSize:"20px"}}>Create Account</span>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default Login
