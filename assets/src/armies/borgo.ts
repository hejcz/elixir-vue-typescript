import { BaseArmy, GameState } from "./army";

class Borgo extends BaseArmy {
    grenadeSelected: boolean = false;
        
    handleArmySpecificClickOnBoard(state: GameState, row: number, column: number): void {
        // grenade
        throw new Error('Method not implemented.');
    }
    
    handleArmySpecificClickOnHand(state: GameState, index: number): void {
        // grenade
        throw new Error('Method not implemented.');
    }
}