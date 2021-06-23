// actions -- declaring this way just helps avoid typos later
const LOAD = 'games/LOAD'

// 'load' action creator
const load = (list) => ({
    type: LOAD,
    list // the payload
});

// *** send a fetch
// *** check the response
// *** parse the response
// *** dispatch an action
export const getGames = () => async (dispatch) => {
    const res = await fetch('/api/games');
}
