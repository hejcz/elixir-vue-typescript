export interface ServerEvent {}

export interface Unit {
    canMove: boolean
}

export interface GameState {
    unitAt(row: number, column: number): Unit;
    isOnBoard(id: string): boolean;
}

export interface Army {
    handleArmySpecificClickOnBoard(state: GameState, row: number, column: number): void;
    handleArmySpecificClickOnHand(state: GameState, index: number): void;
    handleServerEvent(state: GameState, event: ServerEvent): void;
    calculateRangeForMove(state: GameState, row: number, column: number): number;
}

// should be stateless
export abstract class BaseArmy implements Army {
    handleArmySpecificClickOnBoard(state: GameState, row: number, column: number): void {
    }
    handleArmySpecificClickOnHand(state: GameState, index: number): void {
    }
    handleServerEvent(state: GameState, event: ServerEvent): void {
    }
    calculateRangeForMove(state: GameState, row: number, column: number): number {
        if (state.unitAt(row, column).canMove) {
            return 1;
        }
        return 0;
    }
}

