import React, { useState } from 'react';
import './firstlevel.css'



let Square = (props) => {
    


    const colors = ['teal','green', 'red'];
    const lenColors = colors.length;

    const [color, setColor] = useState('white');

    const changeColor = ()=> {
        const index = Math.floor(Math.random() *lenColors);
        const pickcolor = colors[index];
        
        setColor(pickcolor);
    };

    let position = 'sector' + props.idNum;
    return (

            <div className={position} onClick={changeColor} style={{backgroundColor: color}} >
            </div>
    )
}
export default Square;