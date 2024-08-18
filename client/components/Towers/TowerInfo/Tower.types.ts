export interface TowersList {
  towers: Tower[]
}

export interface Tower {
  title: string
  type: string
  damage: string
  range: number
  upgradeable: boolean
  upgradeLevel: number
}

export interface PlacedTower extends Tower {
  position: string
}
