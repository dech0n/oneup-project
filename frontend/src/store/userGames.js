//! change all USERGAME to UserGames
import { csrfFetch } from './csrf';

//ACTIONS
const LOAD = 'userGames/LOAD';
const ADD_ONE = 'userGames/ADD_ONE';
const REMOVE_USERGAME = 'userGames/REMOVE_USERGAME';

const load = (userGames) => ({
    type: LOAD,
    userGames // payload
});

// for creating a single new userGame
// & for updating a single userGame
const addOneUserGame = (userGame) => ({
    type: ADD_ONE,
    userGame // payload
})

const removeUserGame = (userGame) => ({
    type: REMOVE_USERGAME,
    userGame
})

//THUNKS
// *** send a csrfFetch
// *** check the response
// *** parse the response
// *** dispatch an action

// get all UserGames
export const getUserGames = () => async (dispatch) => {
    const res = await csrfFetch(`/api/userGames`);
    if (res.ok) {
        const userGames = await res.json();
        dispatch(load(userGames))
    }
}

// get one UserGame
export const getSingleUserGame = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/userGames/${id}`);
    if (res.ok) {
        const userGame = await res.json();
        dispatch(load(userGame));
    }
}

// get all UserGames for a single game
//i.e. all users that have joined a specific game
export const getSingleGameUserGames = (gameId) => async (dispatch) => {
    const res = await csrfFetch(`/api/userGames/game/${gameId}`)
    if (res.ok) {
        const userGames = await res.json()
        dispatch(load(userGames))
    }
}

// get all UserGames for a single user
// i.e. all games a user has joined
export const getSingleUserUserGames = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/userGames/user/${userId}`)
    if (res.ok) {
        const userGames = await res.json()
        dispatch(load(userGames))
    }
}

// create a single UserGame
export const createUserGame = (userGameData) => async (dispatch) => {
    const res = await csrfFetch(`/api/userGames`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userGameData)
    })
    // console.log('RES', res)
    if (res.ok) {
        const newUserGame = await res.json()
        dispatch(addOneUserGame(newUserGame))
        return newUserGame;
    }
}

// delete single userGame
export const deleteUserGame = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/userGames/${id}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        const userGame = await res.json()
        dispatch(removeUserGame(userGame))
    }
}

const initialState = {};
const userGamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allUserGames = {};
            action.userGames.forEach(userGame => allUserGames[userGame.id] = userGame);
            // console.log({ ...allUserGames, ...state, list: action.userGames })
            return {
                ...allUserGames,
                ...state,
                list: action.userGames
            }
        case ADD_ONE:
            // for creating new userGames
            if (!state[action.userGame.id]) {
                const newState = {
                    ...state,
                    [action.userGame.id]: action.userGame
                }
                const userGamesList = newState.list.map(id => newState[id]);
                userGamesList.push(action.userGame);
                newState.list = userGamesList;
                // console.log('NEWSTATE', newState)
                return newState;
            }
            // for updating existing userGames
            return {
                ...state,
                [action.userGame.id]: {
                    ...state[action.userGame.id], // load the existing version
                    ...action.userGame, // overwrite with/add any details that were changed
                }
            }
        case REMOVE_USERGAME:
            return {
                ...state.slice(0, action.userGame.id),
                ...state.slice(action.userGame.id + 1)
            }

        default:
            return state;
    }
}

export default userGamesReducer;
