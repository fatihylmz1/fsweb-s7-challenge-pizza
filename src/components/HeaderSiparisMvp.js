import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import "./SiparisFormuMvp.css"

const HeaderSiparisMvp = () => {
    return (
        <div className="HeaderSiparisMvp">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container fluid>

                    <Nav className="me-auto">


                        <NavLink className="nav-link link" to="/" exact>
                            Ana Sayfa
                        </NavLink>
                        <NavLink className="nav-link link" to="/pizza">
                            Sipariş Oluştur
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}
export default HeaderSiparisMvp;