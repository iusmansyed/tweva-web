/// this is just a test

import React from "react";
import axios from "axios";
// reactstrap components
import { Card, Col, CardImg, CardBody, CardTitle } from "reactstrap";

export default class MediaList extends React.Component {
  state = {
    medias: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const medias = res.data;
      this.setState({ medias });
    });
  }

  render() {
    return (
      <ul className="list-group-horizontal">
        {this.state.medias.map((media) => (
          <>
            <Col xl="2" flex>
              <Card>
                <CardImg
                  alt="..."
                  src={require("assets/img/theme/img-1-1000x900.jpg")}
                  top
                />
                <CardBody>
                  <CardTitle className="h4 mb-0" key={media.id}>
                    {media.name}
                  </CardTitle>
                  <small className="text-muted">15 seconds</small>
                </CardBody>
              </Card>
            </Col>
          </>
        ))}
      </ul>
    );
  }
}
