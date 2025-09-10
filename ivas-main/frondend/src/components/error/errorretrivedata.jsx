import { Fragment } from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ErrorRetriveData = ({ typeError, message }) => {
  const navigate =useNavigate();
  return (
    <Fragment>
      <div class="d-flex align-items-center justify-content-center vh-80">        
        <div class="text-center">
          <h1 class="display-1 fw-bold">{typeError ? typeError : "Error"}</h1>
          <p class="fs-3">
            {" "}
            <span class="text-danger">Opps!</span> Error load data.
          </p>
          <p class="lead">
            {message
              ? message
              : "The data you are looking for could not be found."}
          </p>
          <Button
            onClick={() => {
              navigate(0);
            }}
          >
            Reload
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default ErrorRetriveData;
