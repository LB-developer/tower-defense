import { PlacedTower } from "./TowerInfo/Tower.types"

interface StandardTowerLogicProps {
  currentTower: PlacedTower | boolean
  currentTowerPosition: HTMLElement | null
}

function StandardTowerLogic({
  currentTower,
  currentTowerPosition,
}: StandardTowerLogicProps) {
  // 1. Identify Enemies in Range:
  // - Calculate which path blocks are within a 2-block range of `currentTowerPosition`.
  // - For each block, check if an enemy is present.

  // 2. Select a Target:
  // - If enemies are found, select one based on your targeting strategy.

  // 3. Fire the Shot:
  // - Apply damage to the selected enemy.
  // - Manage tower cooldown or any other firing mechanics.

  return <></>
}

export default StandardTowerLogic
