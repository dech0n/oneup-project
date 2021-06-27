import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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
                    <h1>So many games, so little time!</h1>
                    <p>Join a game to find other players and schedule online gaming events.</p>
                    <ul>
                        <li>TEST</li>
                        {games?.map(game => (
                            <li key={game.id}>{game.name}</li>
                        ))}
                    </ul>
                </div>
                <div id='intro-image'>
                    <p>[Place Image Here]</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
