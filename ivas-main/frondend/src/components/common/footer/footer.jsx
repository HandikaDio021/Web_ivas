import  { Fragment} from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
  <Fragment>
        <footer className="footer mt-auto py-3 bg-white text-center">
            <div className="container">
                <span className="text-muted"> Copyright © 2024 <span id="year"></span> <Link
                        to="#" className="text-dark fw-semibold">Infoglobal</Link>.
                    Designed with <span className="bi bi-heart-fill text-danger"></span> by <Link to="#">
                        <span className="fw-semibold text-primary text-decoration-underline">www.infoglobal.co.id</span>
                    </Link> All
                    rights
                    reserved
                </span>
            </div>
        </footer>
  </Fragment>
);
};

export default Footer;
