import { Tower } from "./TowerInfo/Tower.types"
import TowerSelector from "./TowerSelector"

interface TowerModalProps {
  wallSelected: boolean
  mouseXY: number[]
  placeTower: (selectedTower: Tower) => void
}

function TowerModal({ wallSelected, mouseXY, placeTower }: TowerModalProps) {
  const [x, y] = mouseXY

  const windowHeight: number = window.innerHeight
  const windowWidth: number = window.innerWidth
  const towerModalWidth: number = windowWidth / 4
  const towerModalHeight: number = windowHeight / 3

  function calculatePosition(
    x: number,
    y: number
  ): { topValue: number; leftValue: number } {
    let adjustedX = x
    let adjustedY = y

    if (x + towerModalWidth > windowWidth) {
      adjustedX = windowWidth - towerModalWidth
    }

    if (y + towerModalHeight > windowHeight) {
      adjustedY = windowHeight - towerModalHeight
    }

    return { topValue: adjustedY, leftValue: adjustedX }
  }

  const { topValue: top, leftValue: left } = calculatePosition(x, y)
  const towerSelectorStyle: React.CSSProperties = {
    position: "fixed",
    top: `${top}px`,
    left: `${left}px`,
    minWidth: `${towerModalWidth}px`,
    height: `${towerModalHeight}px`,
    backgroundColor: "red",
  }

  return (
    <>
      {wallSelected && (
        <div style={towerSelectorStyle}>
          <TowerSelector placeTower={placeTower} />
        </div>
      )}
    </>
  )
}

export default TowerModal
