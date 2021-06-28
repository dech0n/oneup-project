import { csrfFetch } from './csrf';

//ACTIONS
const LOAD = 'events/LOAD';
const ADD_ONE = 'events/ADD_ONE';
const REMOVE_EVENT = 'events/REMOVE_EVENT';

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

const removeEvent = (event) => ({
    type: REMOVE_EVENT,
    event
})

//THUNKS
// *** send a csrfFetch
// *** check the response
// *** parse the response
// *** dispatch an action
export const getEvents = () => async (dispatch) => {
    const res = await csrfFetch(`/api/events`);
    if (res.ok) {
        const events = await res.json();
        dispatch(load(events))
    }
}

// export const getSingleEvent = (id) => async (dispatch) => {
//     const res = await csrfFetch(`/api/events/${id}`);
//     if(res.ok) {
//         const event = await res.json();
//         dispatch(load(event));
//     }
// }

export const getSingleGameEvents = (gameId) => async (dispatch) => {
    const res = await csrfFetch(`/api/events/game/${gameId}`)
    if (res.ok) {
        const events = await res.json()
        dispatch(load(events))
    }
}

export const createEvent = (eventData) => async (dispatch) => {
    const res = await csrfFetch(`/api/events`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
    })
    // console.log('RES', res)
    if (res.ok) {
        const newEvent = await res.json()
        dispatch(addOneEvent(newEvent))
        return newEvent;
    }
}

export const updateEvent = (id, eventData) => async (dispatch) => {
    const res = await csrfFetch(`/api/events/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData)
    });
    if (res.ok) {
        const updatedEvent = await res.json();
        dispatch(addOneEvent(updatedEvent));
        return updatedEvent;
    }
}

export const deleteEvent = (id) => async (dispatch) => {
    const res = await csrfFetch(`/api/events/${id}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        console.log('***RES***', res)
        const event = await res.json();
        console.log('***EVENT***', event)
        dispatch(removeEvent(event))
    }
}

const initialState = {};
const eventsReducer = (state = initialState, action) => {
    // console.log('REDUCER THING', action)
    switch (action.type) {
        case LOAD:
            const allEvents = {};
            action.events.forEach(event => allEvents[event.id] = event);
            // console.log({ ...allEvents, ...state, list: action.events })
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
                    ...action.event, // overwrite with/add any details that were changed
                }
            }
        case REMOVE_EVENT:
            const newState = Object.assign({}, state)
            delete newState[action.event.id]
            return {
                ...newState
            }
        // case '':

        //     break;

        default:
            return state;
    }
}

export default eventsReducer;
