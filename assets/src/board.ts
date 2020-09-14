export class Unit {
    constructor(
        private rotation: number,
        private active: boolean,
        private id: string | null
    ) { }

    static empty() {
        return new Unit(1, false, null);
    }
}

export class Board {

    constructor(private board: Unit[][]) {
    }

    static empty() {
        return this.fromFlatArray(Array(19).fill(null));
    }

    static fromFlatArray(units: Unit[]) {
        const board = [3, 4, 5, 4, 3]
            .map((count) => units.splice(0, count))
            .map((hexes) => hexes.map((hex) => (hex === null ? Unit.empty() : hex)));
        return new Board(board);
    }

    as2dimArray() {
        return this.board;
    }
}