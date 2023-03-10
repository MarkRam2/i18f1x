import React from "react";
import Square from './Square'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Row, Col, } from 'react-bootstrap'

function TBoard({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className="status">{status}</div>

            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>

            <br></br>

            <div className="board-row">
                <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
                <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
                <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
            </div>
            <div className="board-row">
                <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
                <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
                <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
            </div>
            <div className="board-row">
                <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
                <Square value={squares[16]} onSquareClick={() => handleClick(16)} />
                <Square value={squares[17]} onSquareClick={() => handleClick(17)} />
            </div>

            <br></br>

            <div className="board-row">
                <Square value={squares[18]} onSquareClick={() => handleClick(18)} />
                <Square value={squares[19]} onSquareClick={() => handleClick(19)} />
                <Square value={squares[20]} onSquareClick={() => handleClick(20)} />
            </div>
            <div className="board-row">
                <Square value={squares[21]} onSquareClick={() => handleClick(21)} />
                <Square value={squares[22]} onSquareClick={() => handleClick(22)} />
                <Square value={squares[23]} onSquareClick={() => handleClick(23)} />
            </div>
            <div className="board-row">
                <Square value={squares[24]} onSquareClick={() => handleClick(24)} />
                <Square value={squares[25]} onSquareClick={() => handleClick(25)} />
                <Square value={squares[26]} onSquareClick={() => handleClick(26)} />
            </div>

        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        // top cube
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        // center cube
        [9, 10, 11],
        [12, 13, 14],
        [15, 16, 17],
        [9, 12, 15],
        [10, 13, 16],
        [11, 14, 17],
        [9, 13, 17],
        [11, 13, 15],
        // bottom cube
        [18, 19, 20],
        [21, 22, 23],
        [24, 25, 26],
        [18, 21, 24],
        [19, 22, 25],
        [20, 23, 26],
        [18, 22, 26],
        [19, 22, 24],
        // up and down
        [0, 9, 18],
        [1, 10, 19],
        [2, 11, 20],
        [3, 12, 21],
        [4, 13, 22],
        [5, 14, 23],
        [6, 15, 24],
        [7, 16, 25],
        [8, 17, 26],
        // 3d left right diagnals
        [0, 10, 20],
        [2, 10, 18],
        [3, 13, 23],
        [5, 13, 21],
        [6, 16, 26],
        [8, 16, 24],
        // 3d top bottom diagnals
        [0, 12, 24],
        [1, 13, 25],
        [2, 14, 26],
        [6, 12, 18],
        [7, 13, 19],
        [8, 14, 20],
        // 3d corners
        [0, 13, 26],
        [2, 13, 24],
        [6, 13, 20],
        [8, 13, 18],

    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TBoard