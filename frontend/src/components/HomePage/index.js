import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGames } from '../../store/games';

import './HomePage.css'


function HomePage() {
    const games = useSelector(state => state.games.list);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch])

    return (
        <div id='homepage-container'>
            <div id='intro-block'>
                <div id='intro-to-site'>
                    <h1 className='header'><span>Dive in!</span> There are so many players to meet on One<span>Up</span></h1>
                    <p>Join a game to find other players. Help your fellow gamers fill their lobbies or schedule a session and invite them to yours.</p>
                </div>
                <div id='intro-image'>
                    <img id='splash-image' src='./images/grey-gamepad.png' alt='gamer-zone' />
                </div>
            </div>
            <div id='list-div'>
                <ul>
                    <div className='game-div'>
                        {games?.map(game => (
                            <Link className='link' to={`/games/${game?.id}`}>
                            <div className='single-game-div'>
                                <li className='game-image' key={game.image}>
                                    <img src={game.image} alt='game cover art' />
                                </li>
                                <li className='game-title' key={game.id}>
                                    {game.name}
                                </li>
                            </div>
                            </ Link>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default HomePage;
