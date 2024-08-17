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

  function calculatePosition(
    x: number,
    y: number
  ): { topValue: number; leftValue: number } {
    let adjustedX = x
    let adjustedY = y

    if (x + towerSelectorWidth > windowWidth) {
      adjustedX = windowWidth - towerSelectorWidth
    }

    if (y + towerSelectorHeight > windowHeight) {
      adjustedY = windowHeight - towerSelectorHeight
    }

    return { topValue: adjustedY, leftValue: adjustedX }
  }

  const { topValue: top, leftValue: left } = calculatePosition(x, y)
  const towerSelectorStyle: React.CSSProperties = {
    position: "fixed",
    top: `${top}px`,
    left: `${left}px`,
    minWidth: `${towerSelectorWidth}px`,
    height: `${towerSelectorHeight}px`,
    backgroundColor: "red",
  }

  return <>{wallSelected && <div style={towerSelectorStyle}></div>}</>
}

export default TowerSelector
