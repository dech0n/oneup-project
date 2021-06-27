import { csrfFetch } from './csrf';

//ACTIONS
const LOAD = 'rsvps/LOAD';
const ADD_ONE = 'rsvps/ADD_ONE';
const REMOVE_RSVP = 'rsvps/REMOVE_RSVP';

const load = (rsvps) => ({
    type: LOAD,
    rsvps // payload
});

// for creating a single new rsvp
// & for updating a single rsvp
const addOneRsvp = (rsvp) => ({
    type: ADD_ONE,
    rsvp // payload
})

const removeRsvp = (rsvp) => ({
    type: REMOVE_RSVP,
    rsvp
})

//THUNKS
// *** send a csrfFetch
// *** check the response
// *** parse the response
// *** dispatch an action
export const getRsvps = () => async (dispatch) => {
    const res = await csrfFetch(`/api/rsvps`);
    if (res.ok) {
        const rsvps = await res.json();
        dispatch(load(rsvps))
    }
}

export const getSingleRsvp = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/rsvps/${id}`);
    if(res.ok) {
        const rsvp = await res.json();
        dispatch(load(rsvp));
    }
}

export const getSingleGameRsvps = (gameId) => async (dispatch) => {
    const res = await csrfFetch(`/api/rsvps/game/${gameId}`)
    if (res.ok) {
        const rsvps = await res.json()
        dispatch(load(rsvps))
    }
}

export const createRsvp = (rsvpData) => async (dispatch) => {
    const res = await csrfFetch(`/api/rsvps`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rsvpData)
    })
    // console.log('RES', res)
    if (res.ok) {
        const newRsvp = await res.json()
        dispatch(addOneRsvp(newRsvp))
        return newRsvp;
    }
}

const initialState = {};
const rsvpsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allRsvps = {};
            action.rsvps.forEach(rsvp => allRsvps[rsvp.id] = rsvp);
            // console.log({ ...allRsvps, ...state, list: action.rsvps })
            return {
                ...allRsvps,
                ...state,
                list: action.rsvps
            }
        case ADD_ONE:
            // for creating new rsvps
            if (!state[action.rsvp.id]) {
                const newState = {
                    ...state,
                    [action.rsvp.id]: action.rsvp
                }
                const rsvpsList = newState.list.map(id => newState[id]);
                rsvpsList.push(action.rsvp);
                newState.list = rsvpsList;
                // console.log('NEWSTATE', newState)
                return newState;
            }
            // for updating existing rsvps
            return {
                ...state,
                [action.rsvp.id]: {
                    ...state[action.rsvp.id], // load the existing version
                    ...action.rsvp, // overwrite with/add any details that were changed
                }
            }
        case REMOVE_RSVP:
            return {
                ...state.slice(0, action.rsvp.id),
                ...state.slice(action.rsvp.id + 1)
            }

        default:
            return state;
    }
}

export default rsvpsReducer;
