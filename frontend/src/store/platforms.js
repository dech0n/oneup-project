import { csrfFetch } from './csrf';

//ACTIONS
const LOAD = 'platforms/LOAD';

//ACTION CREATORS
// for getting multiple events
const load = (platforms) => ({
    type: LOAD,
    platforms // payload
});

// THUNKs
// *** send a csrfFetch
// *** check the response
// *** parse the response
// *** dispatch an action
export const getPlatforms = () => async (dispatch) => {
    const res = await csrfFetch(`/api/platforms`);
    if (res.ok) {
        const platforms = await res.json();
        // console.log('PLATFORMS',platforms)
        dispatch(load(platforms))
    }
}

export const getSingleGamePlatforms = (gameId) => async (dispatch) => {
    const res = await csrfFetch(`/api/platforms/game/${gameId}`)
    if (res.ok) {
        const platforms = await res.json()
        dispatch(load(platforms))
    }
}

const initialState = {};
const platformsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allPlatforms = {};
            action.platforms.forEach(platform => allPlatforms[platform.id] = platform);
            // console.log({ ...allPlatforms, ...state, list: action.platforms })
            return {
                ...allPlatforms,
                ...state,
                list: action.platforms
            }
        default:
            return state;
    }
}

export default platformsReducer;
