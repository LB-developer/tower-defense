export interface Waves {
    wave:    number;
    enemies: Enemy[];
}

export interface Enemy {
    type:     string;
    health:   number;
    speed:    number;
    position: Position;
}

export interface Position {
    x: number;
    y: number;
}
