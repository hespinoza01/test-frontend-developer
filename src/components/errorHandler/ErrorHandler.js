import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-solid-svg-icons";
import './ErrorHandler.scss';

// Import GlobalContext
import {GlobalStore} from "../../App";


// Capture error messages and display them
function ErrorHandler() {
    const {state, dispatch} = useContext(GlobalStore);

    return (
        <div className='ErrorHandler'>
            {
                (state.errorMessage)
                ?   <p>
                        <span className='ErrorHandler-message'>
                            <strong>Opps! Ha ocurrido un problema : </strong>
                            {state.errorMessage}
                        </span>

                        {/* Clear error message on click */}
                        <span className='ErrorHandler-close' onClick={() => dispatch({type: 'clearError'})} title='Cerrar'>
                            <FontAwesomeIcon icon={faWindowClose}/>
                        </span>
                    </p>

                : null
            }
        </div>
    );
}

export default ErrorHandler;
