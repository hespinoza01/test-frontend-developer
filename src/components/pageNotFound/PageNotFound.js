import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import './PageNotFound.scss';


// It is rendered when the user tries to access an undeclared path within the application
function PageNotFound() {
    return (
        <div className='PageNotFound'>
            <h1>404 | Oops!</h1>
            <h2>No logramos encontrar la página que buscas :(</h2>
            <Link to='/'>
                <FontAwesomeIcon icon={faArrowLeft} />
                Ir a la página principal
            </Link>
        </div>
    );
}

export default PageNotFound;
