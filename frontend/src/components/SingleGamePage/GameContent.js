import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getSingleGameUserGames} from '../../store/userGames'


function GameContent({game}) {
    const dispatch = useDispatch();
    const userGames = useSelector(state => state.userGames.list)
    const userId = useSelector(state => state.session.user.id)

    useEffect(() => {
        // get all users who have joined this game group
        dispatch(getSingleGameUserGames(game?.id))
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

                    [Member list as a grid. Profile pics?]
                </div>
            </div>
        </div>
    )
}

export default GameContent;
