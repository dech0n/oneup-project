// actions -- declaring this way just helps avoid typos later
const LOAD = 'games/LOAD'
const ADD_ONE = 'games/ADD_ONE'

// 'load' action creator
const load = (games) => ({
    type: LOAD,
    games // the payload
});

const addOneGame = (game) => ({
    type: ADD_ONE,
    game // payload
})

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

export const getSingleGame = (id) => async (dispatch) => {
    const res = await fetch(`api/games/${id}`);

    if (res.ok) {
        const game = await res.json();
        dispatch(load(game));
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
                games: action.games
            }

        case ADD_ONE:
            if (!state[action.game.id]) {
                const newState = {
                    ...state,
                    [action.game.id]: action.game
                };
                const gamesList = newState.games.map(id => newState[id]);
                gamesList.push(action.game);
                newState.games = gamesList;
                return newState;
            }
            return {
                ...state,
                [action.game.id]: {
                    ...state[action.game.id],
                    ...action.game
                }
            }

        default:
            return state;
    }
}

export default gamesReducer;
