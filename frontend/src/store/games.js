// actions -- declaring this way just helps avoid typos later
const LOAD = 'games/LOAD'

// 'load' action creator
const load = (games) => ({
    type: LOAD,
    games // the payload
});

// *** send a fetch
// *** check the response
// *** parse the response
// *** dispatch an action
export const getGames = () => async (dispatch) => {
    const res = await fetch('/api/games');

    if (res.ok) {
        const games = await res.json();
        dispatch(load(games));
    }
}

const intialState = {}

const gamesReducer = (state = intialState, action) => {
    switch (action.type) {
        case LOAD:
            const allGames = {};
            action.games.forEach(game => {
                allGames[game.id] = game;
            })
            return {
                ...allGames,
                ...state,
            }

        default:
            break;
    }
}

export default gamesReducer;
