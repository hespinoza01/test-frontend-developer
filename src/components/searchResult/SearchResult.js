import React, {useContext} from 'react';
import './SearchResult.scss';

// Import GlobalContext
import {GlobalStore} from "../../App";

import SearchResultItem from "../searchResultItemItem/SearchResultItem";


// Renders the list of users obtained by performing the search
function SearchResult() {
    const {state} = useContext(GlobalStore);

    return (
        <div className='SearchResult'>
            {
                state.users.map(user => <SearchResultItem key={user.id} user={user}/> )
            }
        </div>
    );
}

export default SearchResult;
