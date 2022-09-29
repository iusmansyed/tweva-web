import React from "react";
import MediaList from "components/MediaList.js";

// reactstrap components
import {
  Card,
  Container,
  Row,
  Col,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import SimpleHeader from "components/Headers/SimpleHeader.js";


function Google() {
  return (
    <>
      <div
        style={{
          paddingTop: "1rem",
          display: "flex",
          marginLeft: "1.6rem",
          alignText: "center",
        }}
      >
        <div className="App">
          <Row>
            {Array.from(Array(3)).map((item, index) => {
              return (
                <Col s={3} md={3} lg={3} sm={3} xs={3} key={index}>
                  <div
                    style={{
                      // backgroundColor: "red",
                      height: "4rem",
                      width: "8rem",
                      marginLeft: "13px",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid grey",
                        borderRadius: "5px",
                        height: "4.6rem",
                      }}
                    >
                      <Card>
                        <CardBody>Screen {index + 1}</CardBody>
                        
                      </Card>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row >
            {Array.from(Array(1)).map((item, index) => {
              return (
                <Col s={3} md={3} lg={1} sm={3} xs={3} key={index}>
                  <div
                    style={{
                      // backgroundColor: "red",
                      height: "4rem",
                      width: "8rem",
                      // marginLeft: "2rem",
                      // marginTop: "-4rem",
                      textAlign:"center"

                      // display: "flex",
                      // flexDirection:"column"
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid grey",
                        borderRadius: "5px",
                        height: "4.6rem",
                        width: "8rem",
                        marginLeft: "24.8rem",
                      marginTop: "-4rem",
                      }}
                    >
                      <Card>
                        <CardBody>+</CardBody>
                        
                      </Card>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
        <Col>
          <div style={{ bagroundColor: "red" }}>
            <Button
              style={
                { marginLeft: "75%", backgroundColor: "#02e729", width:"25%" }
              }
              color="success"
            >
              Preview
            </Button>
          </div>
        </Col>
      </div>

      <div
        style={{
          paddingTop: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "4rem",
          paddingBottom: "2rem",
        }}
      >
        <Row>
          <Col>
            <MediaList />
     
          </Col>
        </Row>
      </div>
    </>
  );
}

Google.layout = Admin;

export default Google;
