import React, { Fragment, useEffect, useState } from "react";
import Pageheader from "../../../components/pageheader/pageheader";
import WorkPackagesService from "../../../services/work_packages_service";
import { useNavigate } from "react-router-dom";
import ErrorRetriveData from "../../../components/error/errorretrivedata";

const Issues = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  useEffect(() => {
    WorkPackagesService.getWorkPackagesList()
      .then((result) => {
        console.log(result);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  return (
    <Fragment>
      <Pageheader title="Issues" heading="Menu" active="Issues" />
      {error ? <ErrorRetriveData /> : "Issues Component"}
    </Fragment>
  );
};

export default Issues;
