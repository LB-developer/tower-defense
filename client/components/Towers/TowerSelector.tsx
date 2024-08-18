import { useState } from "react"
import { TowersList } from "./TowerInfo/Tower.types"
import { towers } from "./TowerInfo/tower-info.json"

function Towers() {
  const [currentTowerNumber, setCurrentTowerNumber] = useState<number>(0)

  const { title, type, damage, range } = towers[currentTowerNumber]


  function handleTowerChange(moveDirection: string): void {
    if (moveDirection === "next") {
      currentTowerNumber === towers.length - 1
        ? setCurrentTowerNumber(0)
        : setCurrentTowerNumber(currentTowerNumber + 1)
    } else {
      currentTowerNumber === towers.length - 1
        ? setCurrentTowerNumber(0)
        : setCurrentTowerNumber(currentTowerNumber - 1)
    }
  }


  return (
    <>
      <div className="select-standard-tower">
        <div className="standard-tower-picture">
          <button type="button">Place Tower</button>
        </div>
        <div className="standard-tower-info">
          <p>{title}</p>
          <p>Type: {type}</p>
          <p>Damage: {damage}</p>
          <p>Range: {range}</p>
          <div className="navigate-through-towers">
            <button onClick={() => handleTowerChange("prev")} type="button">
              Prev Tower
            </button>
            <button onClick={() => handleTowerChange("next")} type="button">
              Next Tower
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Towers
