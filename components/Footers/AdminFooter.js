import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router";


function AdminFooter() {
  let router = useRouter();

  return (
    <>
      <Container fluid>
        <footer className="footer pt-0">
          <Row className="align-items-center justify-content-lg-between">
            <Col lg="6">
              <div className="copyright text-center text-lg-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.tweva.com"
                  target="_blank"
                >
                  made by tweva
                </a>
              </div>
            </Col>
            <Col lg="6">
              <Nav className="nav-footer justify-content-center justify-content-lg-end">
                <NavItem>
                  <NavLink
                    href="/publicPages/help"
                    target="_blank"
                    
                  >
                    Help / Support
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/publicPages/terms"
                    target="_blank"
                  >
                    Terms
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/publicPages/policy"
                    target="_blank"
                  >
                    Privacy Policy
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </footer>
      </Container>
    </>
  );
}

export default AdminFooter;
