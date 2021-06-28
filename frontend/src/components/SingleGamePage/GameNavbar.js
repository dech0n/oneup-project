import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import { createUserGame } from '../../store/userGames'

function GameNavbar({ gameId }) {
    // const history = useHistory()
    const user = useSelector(state => state.session.user)
    // if (!user) {
    //     history.push('/login')
    // }

    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user?.id)

    const handleJoin = async () => {
        const userGameData = {
            userId,
            gameId
        }

        await dispatch(createUserGame(userGameData))
        // something here to change the appearance of the join button (i.e. "leave" button ?)
    }

    return (
        <div id='game-navlink-container'>
            <ul id='game-navlinks-list'>
                <nav id="game-navbar">
                    <li className='game-navlinks-items'>
                        <NavLink
                            activeClassName='about-active'
                            exact to={`/games/${gameId}`}
                            className='game-navlink'>About</NavLink>
                        <NavLink
                            activeClassName='events-active'
                            to={`/games/${gameId}/events`}
                            className='game-navlink'>Events</NavLink>
                        <NavLink
                            to='/members'
                            className='game-navlink'>Members</NavLink>
                        {user ? (
                            <button
                                id='join-button'
                                onClick={handleJoin}>Join</button>
                        ) : null
                        }
                    </li>
                </nav>
            </ul>
        </div>
    )
}

export default GameNavbar;
