import React, {useReducer} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

// InitValue and RootReducer to use into GlobalContext
import initialState from "./store/initialState";
import rootReducer from "./store/reducers";

// Components Import's
import ErrorHandler from "./components/errorHandler/ErrorHandler";
import Home from "./components/home/Home";
import UserDetail from "./components/userDetail/UserDetail";
import PageNotFound from "./components/pageNotFound/PageNotFound";

// Global Context. Store and share all state data between components
const GlobalStore = React.createContext();


function App() {
    // Preparing GlobalContext requirement's
    const [state, dispatch] = useReducer(rootReducer, initialState);

    return (
        <GlobalStore.Provider value={{ state, dispatch }}>
            <div className='App'>
                <ErrorHandler />

                <Router>
                    <Switch>
                        {/* Available App routes*/}
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/:githubLogin' component={UserDetail}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </Router>
            </div>
        </GlobalStore.Provider>
    );
}

export default App;
export { GlobalStore };
