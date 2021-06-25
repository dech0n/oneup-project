import React from 'react';

function GameContent({game}) {
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
