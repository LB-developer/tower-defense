import { useMemo, useState } from "react"
import { Grid } from "./GameBoard"

import TowerSelector from "../Towers/TowerModal"
import TowerModal from "../Towers/TowerModal"

interface PathProps {
  grid: number[][]
}
function Path({ grid }: PathProps) {
  const [towerSelectStatus, setTowerSelectStatus] = useState<Boolean>(false)
  const [showTowerModal, setShowTowerModal] = useState<Boolean>(false)
  const [hasTower, setHasTower] = useState<Boolean>(false)
  const pathedGrid = useMemo(() => generatePath(grid), [grid])
  const [mouseCoordinates, setmouseCoordinates] = useState<number[]>([0, 0])

  function generatePath(unpathedBoard: Grid) {
    const pathedGrid = [...unpathedBoard]
    let visited = new Set()
    let tileCount = 1

    const makePath = (posY: number, posX: number): Boolean => {
      if (posY === 5 && posX === 5) {
        pathedGrid[posY][posX] = tileCount
        tileCount++
        return true
      } // goal is found

      if (
        posY < 0 ||
        posX < 0 ||
        posY >= pathedGrid.length ||
        posX >= pathedGrid[0].length ||
        visited.has(`${posY},${posX}`)
      ) {
        return false
      }

      visited.add(`${posY},${posX}`)

      const directions = [
        [posY, posX + 1], // Move right
        [posY, posX - 1], // Move left
        [posY + 1, posX], // Move down
      ]

      directions.sort(() => Math.random() - 0.5) // pick a random direction

      for (const [newY, newX] of directions) {
        if (makePath(newY, newX)) {
          pathedGrid[posY][posX] = tileCount
          tileCount++
          return true
        } // path to goal is found
      }

      return false
    }
    makePath(0, 0)
    return pathedGrid
  }

  const handleWallClick = (
    wallClicked: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    // setTowerSelectStatus(!towerSelectStatus)
    const mouseXcoordinate: number = wallClicked.clientX
    const mouseYcoordinate: number = wallClicked.clientY
    setmouseCoordinates([mouseXcoordinate, mouseYcoordinate])
    setShowTowerModal(!showTowerModal)
  }

  const handlePlaceTower = (): void => {
    // console.log("restucture working")
  }

  function renderBoardJSX(board: Grid): JSX.Element[] {
    return board.map((row, rowIndex) => (
      <div key={`board-row-${rowIndex}`} className={`row-${rowIndex}`}>
        {row.map((col, colIndex) => (
          <div
            className={
              col > 0
                ? `column-${colIndex} path`
                : `column-${colIndex} wall-${rowIndex}-${colIndex}`
            }
            onClick={col === 0 ? (e) => handleWallClick(e) : undefined}
            key={`board-row-${rowIndex}-column-${colIndex}`}
          >
            {col}
          </div>
        ))}
      </div>
    ))
  }

  return (
    <>
      {renderBoardJSX(pathedGrid)}
      {showTowerModal && (
        <TowerModal
          wallSelected={showTowerModal}
          mouseXY={mouseCoordinates}
          placeTower={handlePlaceTower()}
        />
      )}
    </>
  )
}

export default Path
