import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDatabase} from "@fortawesome/free-solid-svg-icons";
import './Home.scss';

// import GlobalContext
import {GlobalStore} from "../../App";

// Components Import's
import Navbar from "../navbar/Navbar";
import SearchResult from "../searchResult/SearchResult";
import BarChar from "../barChar/BarChar";


// Wrap the list of users and the graph showing the number of followers per user
function Home() {
    const {state} = useContext(GlobalStore);

    return (
        <div className='Home'>
            <Navbar />
            {
                (state.users.length)
                ?   <main className='Home-Container'>
                        <SearchResult/>
                        <BarChar/>
                    </main>

                // If there are no users to display, show a type of fill message
                :   <h3 className='Home-empty'>
                        <FontAwesomeIcon icon={faDatabase} className='icon'/>
                        No hay resultados para mostrar
                    </h3>
            }
        </div>
    );
}

export default Home;
