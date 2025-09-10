import React, { Fragment, useRef, useEffect, useState } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Collapse,
  Row,
  Modal,
} from "react-bootstrap";
import Pageheader from "../../../components/pageheader/pageheader";
import { Link } from "react-router-dom";
import media35 from "../../../assets/images/media/media-35.jpg";
import media36 from "../../../assets/images/media/media-36.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face5 from "../../../assets/images/faces/5.jpg";

const Backlog = () => {
  
  return (
    <Fragment>          
      <Pageheader title="Backlog" heading="Menu" active="Backlog" />
      <Row>
        <Col>
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen            
            className="accordion customized-accordion accordions-items-seperate"
          >
            <Accordion.Item eventKey="0" className="custom-accordion-primary">
              <Accordion.Header>Sprint 2403.043</Accordion.Header>
              <Accordion.Body>
                {" "}
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col>
          <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            // className="accordion accordion-solid-secondary"
            // className="accordion accordion-solid-secondary"
            className="accordion customized-accordion accordions-items-seperate"
          >
            <Accordion.Item eventKey="0" className="custom-accordion-primary">
              <Accordion.Header>Bug Backlog</Accordion.Header>
              <Accordion.Body>
                {" "}
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="1"
              className="accordion-item custom-accordion-secondary"
            >
              <Accordion.Header>Epic List</Accordion.Header>
              <Accordion.Body>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item
              eventKey="2"
              className="accordion-item custom-accordion-danger"
            >
              <Accordion.Header>Product Backlog</Accordion.Header>
              <Accordion.Body>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Backlog;
