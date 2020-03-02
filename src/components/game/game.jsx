import React from 'react';
import style from './game.module.css';
import Firstlevel from './firstlevel/firstlevel'
let Game = (props) => {
    

    return (
    
        <div className={style.qwe}>
                <h3>Game</h3>

                <div className={style.gamefield}>
                    <Firstlevel />
                </div>
        </div>
    )
}
export default Game;
