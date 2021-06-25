//ACTIONS
const LOAD = 'events/LOAD';
const ADD_ONE = 'events/ADD_ONE';

//ACTION CREATORS
// for getting multiple events
const load = (events) => ({
    type: LOAD,
    events // payload
});

// for creating a single new event
// & for updating a single event
const addOneEvent = (event) => ({
    type: ADD_ONE,
    event // payload
})

//THUNKS
// *** send a fetch
// *** check the response
// *** parse the response
// *** dispatch an action
export const getEvents = () => async (dispatch) => {
    const res = await fetch(`/api/events`);
    if (res.ok) {
        const events = await res.json();
        dispatch(load(events))
    }
}

export const getSingleGameEvents = (gameId) => async(dispatch) => {
    const res = await fetch(`/api/events/game/${gameId}`)
    if (res.ok) {
        const events = await res.json()
        dispatch(load(events))
    }
}

export const createEvent = (eventData) => async (dispatch) => {
    const res = await fetch(`api/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
    })
    if (res.ok) {
        const newEvent = await res.json()
        dispatch(addOneEvent(newEvent))
        return newEvent;
    }
}

const initialState = {}
const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allEvents = {};
            action.events.forEach(event => allEvents[event.id] = event);
            return {
                ...allEvents,
                ...state,
                list: action.events
            }

        case ADD_ONE:
            // for creating new events
            if (!state[action.event.id]) {
                const newState = {
                    ...state,
                    [action.event.id]: action.event
                }
                const eventsList = newState.list.map(id => newState[id]);
                eventsList.push(action.event);
                newState.list = eventsList;
                return newState;
            }
            // for updating existing events
            return {
                ...state,
                [action.event.id]: {
                    ...state[action.event.id], // load the existing version
                    ...action.event, // overwrite with any details that were changed
                }
            }
        case '':

            break;

        default:
            return state;
    }
}

export default eventsReducer;
