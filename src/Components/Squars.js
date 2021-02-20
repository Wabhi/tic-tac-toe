import React from 'react';
const Squars = ({index,playerTurn,gameState}) => {
    //console.log(index)
    // here i have defined a function which will handle our css part whatever I ahve made for grid
    // bb,bt,bsb and it it taking index as props.
    const drawGrid = index => {
        //console.log(index);
        let borderString = "";
         if (index <= 2) {
             borderString += "bb";
         }
        else if (index >= 6) {
              borderString += "bt";
        }

        if (index ===1 || index === 4 || index ===7)
        {
            borderString += " bsb";
        }
        return borderString;
    }
    return (
        <div className={`x5 text-center game-squar ${drawGrid(index)}`} onClick={e => playerTurn(index)} > 
            {gameState[index].value}
        </div>
    );
};

export default Squars;