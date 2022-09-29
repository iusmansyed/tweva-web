import React, { useState } from "react";
import axios from "axios";
// reactstrap components
import { Card, Col, Row, CardImg, CardBody, CardTitle } from "reactstrap";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { pink } from "@mui/material/colors";

import MediaListCard from "./MediaListCard";


// let toggle;
export default class MediaList extends React.Component {
  
  constructor(){
    super()
    this.state ={
      hasClick : false,
      medias: [],
    }
  }
  // handleClick = () => {
  //   this.setState({
  //     hasClick: true
  //   })
  //   console.log(this.state);
  // };


  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const medias = res.data;
      this.setState({ medias });
    });
  }
  upATEhAScLICK = (VAL) => {
      this.setState({hasClick: VAL})
  }
  render() {

    return (
      <div className="App">
        <Row>
          {this.state.medias.map((media) => {
            return (
              <>
              <MediaListCard media={media} hasClick={this.state.hasClick} setState={this.upATEhAScLICK}/>
              
              </>
            );
          })}
          <Col>
            <div
              style={{
                // backgroundColor: "red",
                height: "10rem",
                width: "12rem",
              }}
            >
              <Card>
                <CardBody style={{ height: "8.6rem" }}>
                  <AddCircleOutlinedIcon color="success" style={{ fontSize: "50px", marginLeft: "32.5%", marginTop: "12.5%" }} />
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
