import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link, NavLink, useParams } from 'react-router-dom';
import { getGames } from '../../store/games';

// import { getGames, getSingleGame } from '../../store/games';
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
                <div id='group-game-header'>
                    <div id='game-image-container' >
                        <img src={game?.image} alt='game cover art' />
                    </div>
                    <div id='basic-game-info'>
                        <div id="game-title-container">
                            <h2 id='game-title'>{game?.name}</h2>
                        </div>
                        <div>
                            <h3>Play it on:</h3>
                            <ul>
                                {
                                    platforms?.map(platform => (
                                        <li key={platform.id} className='platform-bullet'><span className='platform-name'>{platform.type}</span></li>
                                        )
                                    )

                                }

                            </ul>
                        </div>
                    </div>
                </div>
                <div id='game-navlink-container'>
                    <ul id='game-navlinks-list'>
                        <nav id="game-navbar">
                            <li className='game-navlinks-items'>
                                <NavLink className='game-navlink' to='/about'>About</NavLink>
                                <NavLink className='game-navlink' to='/events'>Events</NavLink>
                                <NavLink className='game-navlink' to='/members'>Members</NavLink>
                                <button id='join-button'>Join</button>
                            </li>
                        </nav>
                    </ul>
                </div>
                <div id='main-content-container'>
                    <div id='game-description'>
                        <h3 id='game-description-header'>What it's about</h3>
                        <p id='game-description-text'>{game.description}</p>
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
