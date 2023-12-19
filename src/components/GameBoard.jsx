export default function GameBoard({ onSquareClick, board }) {

    return (
        <ol id='game-board'>
            {board.map((row, rowIndex) => 
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => 
                    <li key={colIndex}>
                        <button onClick={() => onSquareClick(rowIndex, colIndex)} disabled={playerSymbol}>{playerSymbol}</button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );
}
