// import { useDispatch, useSelector } from 'react-redux';
// import { getGames } from '../../store/games';
// import { getGames, getSingleGame } from '../../store/games';

import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import GameEventsPage from '../GameEventsPage';
import GameHeader from './GameHeader';
import './SingleGamePage.css'

function SingleGamePage() {
    const { id } = useParams();
    // const dispatch = useDispatch();
    const [game, setGame] = useState(null)
    const [platforms, setPlatforms] = useState(null)

    useEffect(() => {
        const getSingleGame = async () => {
            const res = await fetch(`/api/games/${id}`);
            if (res.ok) {
                setGame(await res.json())
            }
        }
        getSingleGame();

        const getGamePlatforms = async () => {
            const res = await fetch(`/api/platforms/game/${id}`);
            if (res.ok) {
                setPlatforms(await res.json())
            }
        }
        getGamePlatforms();
    }, [id])

    // prevent render errors before async stuff completes
    // because react render happens first, then everything else
    // if (!game || !platforms) return null;
    // ^replaced with ternary variation below (e.g. game?.name)

    // render page
    return (
        <>
            <div id='game-page-container'>
                <GameHeader game={game} platforms={platforms} />
                <div id='game-navlink-container'>
                    <ul id='game-navlinks-list'>
                        <nav id="game-navbar">
                            <li className='game-navlinks-items'>
                                <NavLink className='game-navlink' to={`/games/${id}`}>About</NavLink>
                                <NavLink className='game-navlink' to={`/games/${id}/events`}>Events</NavLink>
                                <NavLink className='game-navlink' to='/members'>Members</NavLink>
                                <button id='join-button'>Join</button>
                            </li>
                        </nav>
                    </ul>
                </div>
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
            </div>
        </>
    )
}

export default SingleGamePage;
