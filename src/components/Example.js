import React, { useState, useRef } from "react";
import { Button, Overlay, Tooltip, OverlayTrigger } from "react-bootstrap";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    React Bootstrap
  </Tooltip>
);

const Example = () => {
  return (
    <>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
    </>
  );
};

export default Example;
