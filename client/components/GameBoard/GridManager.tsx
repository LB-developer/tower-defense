import { useEffect, useMemo, useState } from "react"
import { Grid } from "./GameBoard"
import wave1 from "../../Enemy Waves/wave1.json" // enemy
import { Enemy } from "../../Enemy Waves/Enemies.types" // enemy
import { PlacedTower, Tower } from "../Towers/TowerInfo/Tower.types"
import TowerModal from "../Towers/TowerModal"
import StandardTowerLogic from "../Towers/StandardTowerLogic"
import EnemyLogic from "../../Enemy Waves/EnemyLogic"
import { Coordinates } from "./GridManager.types"

interface PathProps {
  grid: number[][]
  sendWave: boolean
}

const path: Set<Coordinates> = new Set()

function GridManager({ grid, sendWave }: PathProps) {
  const pathedGrid = useMemo(() => generatePath(grid), [grid])
  const [mouseCoordinates, setmouseCoordinates] = useState<number[]>([0, 0])
  const [currentWallSelected, setCurrentWallSelected] = useState<string>("")
  const [showTowerModal, setShowTowerModal] = useState<boolean>(false)
  const [activeWall, setActiveWall] = useState<HTMLElement | null>(null)
  const [activeTower, setActiveTower] = useState<PlacedTower | boolean>(false)

  const [enemies, setEnemies] = useState<Enemy[]>([] as Enemy[])

  if (sendWave) {
    useEffect(() => {
      setEnemies(wave1.enemies)
    }, [])
  }

  function generatePath(unpathedBoard: Grid) {
    const pathedGrid = [...unpathedBoard]
    let visited = new Set()
    let tileCount = 1

    const makePath = (posY: number, posX: number): boolean => {
      if (posY === 7 && posX === 7) {
        pathedGrid[posY][posX] = tileCount
        path.add({ x: posX, y: posY })
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
          path.add({ x: posX, y: posY })
          tileCount++
          return true
        } // path to goal is found
      }

      return false
    }
    makePath(0, 0)
    console.log(path)
    return pathedGrid
  }

  const handleWallClick = (
    wallClicked: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const currentWallId = wallClicked.currentTarget.id
    setCurrentWallSelected(currentWallId)

    const mouseXcoordinate: number = wallClicked.clientX
    const mouseYcoordinate: number = wallClicked.clientY
    setmouseCoordinates([mouseXcoordinate, mouseYcoordinate])

    setShowTowerModal(!showTowerModal)
    setActiveWall(document.getElementById(`${currentWallId}`))
  }

  const handlePlaceTower = (selectedTower: Tower): void => {
    if (currentWallSelected && !activeTower) {
      setActiveTower({
        ...selectedTower,
        position: currentWallSelected,
      })
      activeWall?.classList.add(
        `${selectedTower.title.split(" ").join("").replace(",", "")}`
      )
    }
    setActiveTower(false)
    setCurrentWallSelected("")
    setActiveWall(null)
  }

  function renderBoardJSX(board: Grid): JSX.Element[] {
    return board.map((row, rowIndex) => (
      <div key={`board-row-${rowIndex}`} className={`row-${rowIndex}`}>
        {row.map((col, colIndex) => (
          <div
            className={
              col > 0
                ? `row-${rowIndex} column-${colIndex} path`
                : `row-${rowIndex} column-${colIndex} wall`
            }
            id={
              col === 0
                ? `wall-${rowIndex}-${colIndex}`
                : `path-${rowIndex}-${colIndex}`
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
          placeTower={handlePlaceTower}
        />
      )}
      {activeTower && activeWall && (
        <StandardTowerLogic
          currentTower={activeTower}
          currentTowerPosition={activeWall}
        />
      )}
      <EnemyLogic path={path} />
    </>
  )
}

export default GridManager
