import React, {useContext, useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMale, faBook, faMapMarkerAlt, faBoxes, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import './UserDetail.scss';

// Import GlobalContext
import {GlobalStore} from "../../App";
import {getUserDetail} from "../../store/actions";


// It shows the detailed information of a user, receives the user's 'login' as a path parameter
// and then looks for the details within the 'usersDetail' property of the GlobalContext
function UserDetail({history}) {
    const {githubLogin} = useParams();
    const {state} = useContext(GlobalStore);
    const [user, setUser] = useState({});

    const {usersDetail} = state;

    useEffect(() => {
        // check if detail exist, if not exist load from API
        if(usersDetail.hasOwnProperty(githubLogin)){
            setUser(usersDetail[githubLogin]);
        }else {
            getUserDetail(githubLogin).then(data => setUser(data));
        }
    }, [user, githubLogin, usersDetail]);

    return (
        <div className='UserDetail'>
            <p onClick={history.goBack} className='go-back'><FontAwesomeIcon icon={faArrowLeft} className='icon'/> Regresar</p>

            {/* User base information */}
            <img src={user.avatar_url} alt='user avatar' className='UserDetail-avatar'/>
            <h1 className='UserDetail-name'>{user.name || '-- Nombre no disponible --'}</h1>
            <p className='UserDetail-login'>{user.login || '-- Nombre de usuario no disponible'}</p>

            {/* User biography information */}
            <p className='UserDetail-bio'>
                <FontAwesomeIcon icon={faBook} className='icon'/>
                {user.bio || '-- Biografía no disponible --'}
            </p>

            {/* User followers and following information */}
            <p className='UserDetail-follow'>
                <span>
                    <FontAwesomeIcon icon={faMale} className='icon'/>
                    <strong>{user.followers || 0}</strong>
                    Seguidores
                </span>
                <span>
                    <FontAwesomeIcon icon={faMale} className='icon'/>
                    <strong>{user.following || 0}</strong>
                    Siguiendo
                </span>
            </p>

            {/* User location information */}
            <p className='UserDetail-location'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='icon'/>
                {user.location || '-- Locación no disponible --'}
            </p>

            {/* User number of repositories information */}
            <p className='UserDetail-repos'>
                <FontAwesomeIcon icon={faBoxes} className='icon'/>
                <strong>{user.public_repos || 0}</strong>
                Repositorios
            </p>
        </div>
    );
}

export default withRouter(UserDetail);
