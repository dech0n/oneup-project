import { csrfFetch } from './csrf';

//ACTIONS
const LOAD = 'users/LOAD';
const ADD_ONE = 'users/ADD_ONE';
const REMOVE_USER = 'users/REMOVE_USER';

//ACTION CREATORS
// for getting multiple users
const load = (users) => ({
    type: LOAD,
    users // payload
});

//? not currently adding this functionality
// for creating a single new user
// & for updating a single user
// const addOneUser = (user) => ({
//     type: ADD_ONE,
//     user // payload
// })

//? not currently adding this functionality
// const removeUser = (user) => ({
//     type: REMOVE_USER,
//     user
// })

//THUNKS
// *** send a csrfFetch
// *** check the response
// *** parse the response
// *** dispatch an action
export const getUsers = () => async (dispatch) => {
    const res = await csrfFetch(`/api/users`);
    if (res.ok) {
        const users = await res.json();
        dispatch(load(users))
    }
}

//? probably won't need, can just pull current user from session state
export const getSingleUser = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/users/${userId}`)
    if (res.ok) {
        const user = await res.json()
        dispatch(load(user))
    }
}

//? for another time when I implement user editing
// export const updateUser = (id, userData) => async (dispatch) => {
//     const res = await csrfFetch(`/api/users/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(userData)
//     });
//     if (res.ok) {
//         const updatedUser = await res.json();
//         dispatch(addOneUser(updatedUser));
//         return updatedUser;
//     }
// }

//? for another time when I allow users to delete their accounts
// export const deleteUser = (id) => async (dispatch) => {
//     const res = await csrfFetch(`/api/users/${id}`, {
//         method: 'DELETE'
//     });

//     if (res.ok) {
//         const user = res.json();
//         dispatch(removeUser(user))
//     }
// }

const initialState = {};
const usersReducer = (state = initialState, action) => {
    // console.log('REDUCER THING', action)
    switch (action.type) {
        case LOAD:
            const allUsers = {};
            action.users.forEach(user => allUsers[user.id] = user);
            // console.log({ ...allUsers, ...state, list: action.users })
            return {
                ...allUsers,
                ...state,
                list: action.users
            }

        case ADD_ONE:
            // for creating new users
            if (!state[action.user.id]) {
                const newState = {
                    ...state,
                    [action.user.id]: action.user
                }
                const usersList = newState.list.map(id => newState[id]);
                usersList.push(action.user);
                newState.list = usersList;
                console.log('NEWSTATE', newState)
                return newState;
            }
            // for updating existing users
            return {
                ...state,
                [action.user.id]: {
                    ...state[action.user.id], // load the existing version
                    ...action.user, // overwrite with/add any details that were changed
                }
            }
        case REMOVE_USER:
            return {
                ...state.slice(0, action.user.id),
                ...state.slice(action.user.id + 1)
            }

        default:
            return state;
    }
}

export default usersReducer;
