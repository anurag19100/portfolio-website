import React from "react";
import Button from "react-bootstrap/Button";
import { IoIosCodeDownload } from "react-icons/io";

const ResumeButton = (props) => {
  return (
    <Button
      variant="primary"
      href={props.resumeLink}
      target="_blank"
      style={{ maxWidth: "250px" }}
    >
      <IoIosCodeDownload size={35} />
      &nbsp; Download CV &nbsp;
      <IoIosCodeDownload size={35} />
    </Button>
  );
};

export default ResumeButton;
