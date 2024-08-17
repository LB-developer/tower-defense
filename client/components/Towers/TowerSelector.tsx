interface TowerSelectorProps {
  wallSelected: Boolean
  mouseXY: number[]
}

function TowerSelector({ wallSelected, mouseXY }: TowerSelectorProps) {
  const [x, y] = mouseXY

  const modalStyle: React.CSSProperties = {
    position: "fixed",
    top: `${y}px`,
    left: `${x}px`,
    width: "300px",
    height: "500px",
    backgroundColor: "red",
  }

  return <>{wallSelected && <div style={modalStyle}></div>}</>
}

export default TowerSelector
