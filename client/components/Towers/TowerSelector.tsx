interface TowerSelectorProps {
  wallSelected: Boolean
}

function TowerSelector({ wallSelected }: TowerSelectorProps) {
  return <>{wallSelected && <p>Wall has been selected</p>}</>
}

export default TowerSelector
