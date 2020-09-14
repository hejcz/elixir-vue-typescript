import { BaseArmy, GameState } from './army';

export class Outpost extends BaseArmy {
    sniperSelected: boolean = false;
        
    handleArmySpecificClickOnBoard(state: GameState, row: number, column: number): void {
        // sniper
        throw new Error('Method not implemented.');
    }
    
    handleArmySpecificClickOnHand(state: GameState, index: number): void {
        // sniper
        throw new Error('Method not implemented.');
    }

    calculateRangeForMove(state: GameState, row: number, column: number): number {
        if (state.unitAt(row, column).canMove && state.isOnBoard("outpost_scouting_center")) {
            return 2;
        }
        return super.calculateRangeForMove(state, row, column);
    }
}