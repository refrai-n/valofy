import React from 'react';
import "./options.css"
const options = () => {
    return (
        <div className='main'>
            <h3>Play During:</h3>
            <div className='checkbox'>
                <label htmlFor="lobby">Lobby</label>
                <input type="checkbox" name="Lobby" id="lobby" />
            </div>
            <div className='checkbox'>
                <label htmlFor="dm">Deathmatch</label>
                <input type="checkbox" name="dm" id="dm" />
            </div>
            <div className='checkbox'>
                <label htmlFor="match">Ranked/Other</label>
                <input type="checkbox" name="match" id="match" />
            </div>
        </div>

    );
}

export default options;

