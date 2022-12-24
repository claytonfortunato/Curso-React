import React from "react";
import { useParams } from "react-router";

import Button from "./Button";

const TaskDetails = () => {
  return (
    <>
      <div className="back-button-container">
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <p></p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          officiis culpa libero voluptates quidem quisquam quam totam illo
          earum, molestias a porro eius eos tempora aspernatur nesciunt nemo
          suscipit placeat.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
