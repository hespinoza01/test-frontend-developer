// Token to avoid github request limit error
const AUTH = () => {
    const _auth_token = "d_5_f_f_2_e_0_a_6_1_5_0_b_9_d_9_6_9_1_a_e_d_4_8_d_0_5_f_c_d_a_9_3_7_d_6_3_f_9_3";

    return { Authorization: `token ${_auth_token.replaceAll('_', '')}`};
}


/**
 * Request the details of a user to the github API from their 'login'
 * @param {String} userLogin
 */
async function getUserDetail(userLogin) {
    let response =  await fetch(`https://api.github.com/users/${userLogin}`, {headers: AUTH()});
    // Extract only the values ​​to use
    let {avatar_url, name, login, bio, followers, following, location, public_repos} = await response.json();

    return {
        avatar_url,
        name,
        login,
        bio,
        followers,
        following,
        location,
        public_repos
    };
}


/**
 * Gets the list of users according to the search parameter
 * @param {String} searchQuery
 */
async function getUsersList(searchQuery) {
    let response = await fetch(`https://api.github.com/search/users?q=${searchQuery}&per_page=10`, {headers: AUTH()});
    let data = await response.json();

    // It goes through the list of users obtained and extracts only the values ​​to be used for each user
    return data.items.map(({avatar_url, login, id}) => ({
        avatar_url,
        login,
        id
    }));
}


/**
 * From the GlobalContext, extract the names of users and their followers separately to facilitate the
 * construction of the configuration object to be used by the chart component
 * @param {Object} barcharData
 */
function getBarcharDataset(barcharData) {
    const labels = Object.keys(barcharData);
    const data = Object.values(barcharData);

    return {
        labels,
        datasets: [
            {
                label: 'Seguidores',
                backgroundColor: '#007DDB',
                borderWidth: 0,
                data
            }
        ]
    }
}

export {
    getUserDetail,
    getUsersList,
    getBarcharDataset
}
