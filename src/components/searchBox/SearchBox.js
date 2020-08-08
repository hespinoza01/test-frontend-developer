import React, { useContext, useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import './SearchBox.scss';

// import GlobalContext and action to load user list
import {GlobalStore} from "../../App";
import {getUsersList} from "../../store/actions";


// It captures the user's input and from it makes the request for the list of users to the API
function SearchBox() {
    const { dispatch } = useContext(GlobalStore);
    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // check restrictions for search value
        if (search.length > 4 && search !== 'react'){
            // gettting the user list and restarting the GlobalContext values
            getUsersList(search)
                .then(data => {
                    setSearch('');
                    dispatch({type: 'resetState'});
                    dispatch({type: 'updateUsers', payload: data});
                })
        }else {
            // Determine the errorMessage to show
            let error = (search === 'react')
                ? "La palabra 'react' no está permitida dentro de la búsqueda"
                : "El contenido de la búsqueba debe superar los 4 caracteres";

            dispatch({type: 'addError', payload: error});
        }
    };

    return (
        <form className='SearchBox' onSubmit={handleSubmit}>
            <input
                className='SearchBox-fieldtext'
                type="text" placeholder="Buscar usuario..."
                onChange={event => setSearch(event.target.value)}
                value={search}/>

            <button className='SearchBox-submit' disabled={!search.length}>
                <FontAwesomeIcon icon={faSearch} className='SearchBox-submit__icon' />
            </button>
        </form>
    );
}

export default SearchBox;
