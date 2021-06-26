import React, { useEffect, useState } from 'react';
import { useParams, Route } from 'react-router-dom';

import GameEventsPage from '../GameEventsPage';
import GameHeader from './GameHeader';
import GameNavbar from './GameNavbar';
import GameContent from './GameContent'
import Calendar from 'react-calendar';
import './SingleGamePage.css';

function SingleGamePage() {
    const { id } = useParams();
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
                <GameNavbar id={id} />
                <Route exact path={`/games/${id}/events`}>
                    <GameEventsPage id={id} />
                </Route>
                <Route exact path={`/games/${id}`}>
                    <GameContent game={game} />
                </Route>
            </div>
        </>
    )
}

export default SingleGamePage;
