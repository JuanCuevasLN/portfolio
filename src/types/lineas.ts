export interface myLineas {
    x: number;
    y: number;
    v: number;
    l: number;
    opa: number;

    updateLineas(): void;
    drawLineas(): void;
    reset(): void;
}