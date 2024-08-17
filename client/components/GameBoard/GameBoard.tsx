import { useMemo, useState } from "react"
import Path from "./Path"
import type { Board } from "./GameBoard.types"
import TowerSelector from "../Towers/TowerSelector"

export type Grid = Board["grid"]
export type Row = Board["row"]
export type Column = Board["column"]

function generateBoardData(): Grid {
  const gameBoard: Grid = []
  const generateTiles: number = 5

  for (let i = 0; i <= generateTiles; i++) {
    const gridRow: Row = []
    let countColumn: Column = generateTiles + 1

    while (countColumn > 0) {
      gridRow.push(0)
      countColumn--
    }
    gameBoard.push(gridRow)
  }
  return gameBoard
}

export default function GameBoard() {
  const initialBoard = useMemo(() => generateBoardData(), [])

  const handleTowerPlacement = (
    clickInfo: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log("CLIENT X", clickInfo.clientX)
    console.log("CLIENT Y", clickInfo.clientY)
  }

  return (
    <>
      <div className="game-board">
        <Path grid={initialBoard} towerPlacement={handleTowerPlacement} />
        <TowerSelector />
      </div>
    </>
  )
}
