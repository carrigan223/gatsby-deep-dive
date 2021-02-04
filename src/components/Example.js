import React, { useState, useRef } from "react";
import { Button, Overlay, Tooltip, OverlayTrigger } from "react-bootstrap";

const renderTooltip = (props) => (
  <Tooltip
    id="button-tooltip"
    {...props}
  >
    React Bootstrap
  </Tooltip>
);

const Example = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: "teal",
              padding: "2px 10px",
              color: "yellow",
              borderRadius: 3,
              ...props.style,
            }}
          >
            Hello world
          </div>
        )}
      </Overlay>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
      ,
    </>
  );
};

export default Example;
