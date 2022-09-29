import React, { useState } from "react";
import { Card, Col, Row, CardImg, CardBody, CardTitle } from "reactstrap";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { pink } from "@mui/material/colors";

export default function MediaListCard({ media, hasClick,setState }) {
  console.log(media.id[0]);
  console.log(hasClick);

  const handleClick = () => {
    setState( media.id);
  };


  return (
    <Col s={3} md={3} lg={3} sm={3} xs={3} key={media}>
      {console.log(media.id)}
      <div
        onClick={handleClick}
        style={{
          backgroundColor:
          hasClick ===media.id
              ? "lightgreen"
              : "",
          borderRadius: "5px",
          // height: "10rem",
          // paddingLeft:"2rem",
          // marginLeft:"2rem",
          //     marginRight:"2rem",
          // paddingTop:"1rem",
          marginTop: "2rem",
          width: "12.5rem",
        }}
      >
        {hasClick === media.id? (
          <p
            style={{
              textAlign: "center",
              color: "white",
              margin: "auto",
            }}
          >
            Playing - 0:08 left
          </p>
        ) : (
          ""
        )}
        <Card>
          <div
            style={{
              height: "90px",
              // backgroundColor: "red",
              // marginLeft:"2rem",
              // marginRight:"2rem",
              // marginTop:"1rem",
              display: "flex",
            }}
          >
            <div
              style={{
                // backgroundColor: "blue",
                width: "60%",
                height: "5rem",
              }}
            >
              <CardImg
                alt="..."
                src={require("assets/img/theme/img-1-1000x900.jpg")}
                style={{
                  marginTop: "1rem",
                  marginLeft: "15px",
                  height: "80px",
                  width: "98px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ width: "40%" }}>
              <div style={{ height: "50%", marginTop: "5px" }}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "2.5px",
                    width: "30%",
                    // paddingLeft:"10px",
                    marginLeft: "60%",
                    justifyContent: "center",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  }}
                >
                  <MenuOutlinedIcon
                    style={{ marginLeft: "5%" }}
                    fontSize="small"
                  />
                </div>
              </div>
              <div
                style={{
                  height: "50%",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div
                  style={{
                    justifyContent: "center",
                    paddingTop: "12%",
                  }}
                >
                  <RemoveCircleOutlinedIcon
                    style={{ color: pink[500], fontSize: "15px" }}
                  />
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    paddingTop: "12.6%",
                    fontSize: "1rem",
                  }}
                >
                  60s
                </div>
                <div
                  style={{
                    justifyContent: "center",
                    paddingTop: "12%",
                  }}
                >
                  <AddCircleOutlinedIcon
                    color="success"
                    style={{ fontSize: "15px" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <CardBody>
            <CardTitle
              style={{
                // backgroundColor:"red",
                marginTop: "-0.4rem",
                marginLeft: "-10px",
                fontSize: "12px",
                marginBottom: "-1rem",
              }}
              key={media.id}
            >
              {media.name}
            </CardTitle>
          </CardBody>
        </Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // height:"0.1rem",
            // margin:"auto"
            padding: "0px 5px",
          }}
        >
          <div
            style={{
              transform: "rotate(56deg)",
            }}
          >
            {hasClick  === media.id? (
              <i
                style={{
                  fontSize: "1rem",
                  color: "white",
                  // margin:"auto"
                }}
                className={`fa-solid fa-play`}
              />
            ) : (
              ""
            )}
          </div>
          <div>
            {hasClick === media.id ? (
              <i
                style={{
                  fontSize: "1rem",
                  color: "white",
                }}
                className={`fa-solid fa-pause`}
              />
            ) : (
              <i
                style={{
                  fontSize: "1rem",
                  color: "black",
                }}
                className={`fa-solid fa-play`}
              />
            )}
          </div>
          <div
            style={{
              transform: "rotate(360deg)",
            }}
          >
            {hasClick === media.id ? (
              <i
                style={{
                  fontSize: "1rem",
                  color: "white",
                }}
                className={`fa-solid fa-play`}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Col>
  );
}
