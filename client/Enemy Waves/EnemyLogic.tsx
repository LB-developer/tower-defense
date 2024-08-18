import { useEffect, useState } from "react"
import { Coordinates } from "../components/GameBoard/GridManager.types"
import { Enemy } from "./Enemies.types"

interface EnemyLogicProps {
  path: Set<Coordinates>
  enemyWave: Enemy[]
}

function EnemyLogic({ path }: EnemyLogicProps) {
  const [startingPosition] = path
  const [enemyPosition, setEnemyPosition] =
    useState<Coordinates>(startingPosition)

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate next position based on speed and path
      // Update enemyPosition
    }, 100) // Adjust interval to control movement speed

    return () => clearInterval(interval) // Cleanup
  }, [enemyPosition])

  // Render or manage enemy state based on enemyPosition

  return <></>
}

export default EnemyLogic
