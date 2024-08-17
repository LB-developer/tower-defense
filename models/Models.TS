export interface GameBoard {
  row: number[];
  column: number;
  grid: number[][];
}

export interface PathType {
  tile: 'Open' | 'Closed' | 'Forced';
}
