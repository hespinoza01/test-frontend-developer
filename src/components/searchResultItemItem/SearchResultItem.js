import React, {useContext, useEffect} from 'react';
import {Link} from "react-router-dom";
import './SearchResultItem.scss';

// Import GlobalContext and action function to load userDetail
import {GlobalStore} from "../../App";
import {getUserDetail} from "../../store/actions";


// It receives an object of type user, encapsulates the information of each user within the list obtained by the search
function SearchResultItem({user}) {
    const {dispatch} = useContext(GlobalStore);

    // When loading the component, the user detail is obtained from the API and the obtained data is stored
    useEffect(() => {
        getUserDetail(user.login)
            .then(data => {
                dispatch({type: 'addUsersDetail', payload: data});
                dispatch({type: 'addBarcharData', payload: data});
            });
    }, [user, dispatch]);

    return (
        <div className='SearchResultItem'>
            <img src={user.avatar_url} alt={`avatar-${user.login}`} className='SearchResultItem-avatar'/>
            <Link to={`/${user.login}`} className='SearchResultItem-login'>
                <h3 title='Mostrar en detalle'>{ user.login }</h3>
            </Link>
            <p className='SearchResultItem-id'>{ user.id }</p>
        </div>
    );
}

export default SearchResultItem;
