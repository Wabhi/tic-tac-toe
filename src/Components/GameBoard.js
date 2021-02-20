import React from 'react';
import Squars from './Squars';
import { useState} from 'react';

const GameBoard = () => {
    //current player.
    //game state.
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [moves, setMoves] = useState(0);
    const emptyGrid=[
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value:null},
        {value: null},
        {value:null}
    ]
    const [gameState, setGameState] = useState(emptyGrid);
    //console.log(gameState[0].value)
    // to check winner and draw.....
    const winnerDraw = () => {
        let winner = false;
        let possibleWins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < possibleWins.length; i++) {
            const [a, b, c] = possibleWins[i];
            //console.log(a,b,c),here i checked all winning possibility..
            if (gameState[a].value && gameState[a].value === gameState[b].value && gameState[b].value === gameState[c].value)
            {
                winner = gameState[a].value;      
            }
        }
         return winner;
        
    }

     //changing the state...........
    const playerTurn = (index) => {
        //console.log(index);
        //here when griditem is null text should be display after that if we click on that griditem again then should not be overrid.
        let newGameState = gameState;
        if (newGameState[index].value === null) {
            newGameState[index].value = currentPlayer;
            setGameState(newGameState);
           // console.log(newGameState.value)
            let nextPlayer = currentPlayer === "X" ? "O" : "X";
            setCurrentPlayer(nextPlayer);
            let result = winnerDraw();
            if (winnerDraw() !== false)
            {
                alert(`Player ${result} won the match.`) 
                
            }
            let moveNumber = moves + 1;
            setMoves(moveNumber);
            console.log(moveNumber)
            if (moveNumber === 9) {
                alert("Game is draw");
             }
        }
        
    }
  
    return (
        <>
        <div className="col-md-12 col-12 text-center">
                <h2>Current Player : {currentPlayer} </h2>
                <button onClick={()=>{setGameState(emptyGrid)}}>Restart</button>
        </div>
            <div className="bg-white col-md-6 offset-md-3 gameBoard shadow-sm row p-4">
                {gameState.map((squar, key) => (
                    <Squars key={key} index={key} gameState={gameState}
                    playerTurn={playerTurn} />
                ))};
                
                {/* here we don't want to repeat  ourself to doing that.. */}
                {/* <Squars />
                <Squars />
                <Squars />
                <Squars />
                <Squars />
                <Squars />
                <Squars />
                <Squars /> */}
            </div>
        </>
    );
};

    export default GameBoard;