export interface myParticle {
    x: number;
    y: number;
    radio: number;
    vx: number;
    vy: number;
    drawParticle(): void;
    updateParticle(): void;
}