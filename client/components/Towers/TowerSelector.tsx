interface TowerSelectorProps {
  wallSelected: Boolean
  mouseXY: number[]
}

function TowerSelector({ wallSelected, mouseXY }: TowerSelectorProps) {
  const [x, y] = mouseXY

  const windowHeight: number = window.innerHeight
  const windowWidth: number = window.innerWidth
  const towerSelectorWidth: number = windowWidth / 4
  const towerSelectorHeight: number = windowHeight / 3
  checkTowerSelectorBoundary()

  const towerSelectorStyle: React.CSSProperties = {
    position: "fixed",
    top: `${y}px`,
    left: `${x}px`,
    minWidth: `${towerSelectorWidth}px`,
    height: `${towerSelectorHeight}px`,
    backgroundColor: "red",
  }

  function checkTowerSelectorBoundary(): void {
    if (x + towerSelectorWidth > windowWidth) {
      towerSelectorStyle.left = windowWidth - towerSelectorWidth
    }

    if (y + towerSelectorHeight > windowHeight) {
      towerSelectorStyle.top = windowHeight - towerSelectorHeight
    }
  }

  return <>{wallSelected && <div style={towerSelectorStyle}></div>}</>
}

export default TowerSelector
