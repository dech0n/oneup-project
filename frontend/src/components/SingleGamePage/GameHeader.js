import React from 'react';

function GameHeader({game, platforms}) {
    return (
        <div id='group-game-header'>
            <div id='game-image-container' >
                <img id='game-image' src={game?.image} alt='game cover art' />
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
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default GameHeader;
