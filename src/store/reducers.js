import initialState from "./initialState";

/**
 * @param {Object} state
 * @param {Object} action
 */
export default function rootReducer(state, action) {
    switch (action.type) {
        // Receive the complete list of users and store it inside the GlobalContext
        case 'updateUsers':
            return {...state, users: action.payload};

        // It receives the details of a user and stores it inside an object,
        // using the 'login' property as a key to facilitate access to the detail values ​​per user
        case 'addUsersDetail':
            let user_login = action.payload.login;
            let newUsersDetails = {...state.usersDetail, [user_login]: action.payload};

            return {...state, usersDetail: newUsersDetails};

        // Extract the 'login' and 'followers' property from the details object of each user to store
        // it in the list of data to be used to load the chart
        case 'addBarcharData':
            let {login, followers} = action.payload;
            let newBarcharData = {...state.barcharData, [login]: followers};

            return {...state, barcharData: newBarcharData};

        // Clear error message
        case 'clearError':
            return {...state, errorMessage: ''};

        // Set error message
        case 'addError':
            return {...state, errorMessage: action.payload};

        // Restart all state data to initial value
        case 'resetState':
            return initialState;

        default:
            return state;
    }
}
