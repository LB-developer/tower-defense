


const array: number[][] = [
  [0, 0, 0, 0, 0, 0],  // Row 1
  [0, 0, 0, 0, 0, 0],  // Row 2
  [0, 0, 0, 0, 0, 0],  // Row 3
  [0, 0, 0, 0, 0, 0],  // Row 4
  [0, 0, 0, 0, 0, 0],  // Row 5
  [0, 0, 0, 0, 0, 0]   // Row 6
];





function Path(board: number[][]): number[][] {
  const pathStart: number = Math.floor(Math.random() * board[0].length)
  const pathEnd: number = Math.floor(Math.random() * board[0].length)

    const generateTileType = board.map((row) => {
    row[0][0] = 'Forced'
    row.map((column, colIndex, originalBoard) => {
        
    })
  })
  
  
}

export default Path;
