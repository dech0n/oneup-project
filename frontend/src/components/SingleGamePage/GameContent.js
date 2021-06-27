import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleGameUserGames, getUserGames } from '../../store/userGames'
import { getUsers, getSingleUser } from '../../store/users'



function GameContent({ game }) {
    const dispatch = useDispatch();
    const userGames = useSelector(state => state.userGames.list)
    const memberIds = userGames?.map(userGame => userGame.userId)
    const userId = useSelector(state => state.session.user.id)
    const users = useSelector(state => state.users.list);

    // TODO: get all users who match userId within userGames
    //! this didn't work
    //const members = users.filter(user => {
    //     const memberId = userGames.find(userGame => user.id === userGame.id)
    //     return user.id === memberId;
    // })

    useEffect(() => {
        // dispatch(getUserGames())
        // get all userGames related to users who have joined this game group
        dispatch(getSingleGameUserGames(game?.id))
        dispatch(getUsers())
    }, [dispatch, game?.id])

    return (
        <div id='main-content-container'>
            <div id='game-description'>
                <h3 id='game-description-header'>What it's about</h3>
                <p id='game-description-text'>{game?.description}</p>
            </div>
            <div id='members-container'>
                <h3>Who plays</h3>
                <div id='members-grid'>
                    **Hide this div for now**
                    [Member list as a list or grid. Profile pics?]
                </div>
            </div>
        </div>
    )
}

export default GameContent;
