const whoWon = require('../RPS.js');

describe("RPS", function(){
    test("should output 'TIE' when both players choose same option", function () {
        let output = whoWon("rock", "rock");
        expect(output).toBe("TIE!");
    });
    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = whoWon('rock','paper');
        expect(output).toBe('Player 2 wins!');
    });
    test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = whoWon('paper','scissors');
        expect(output).toBe('Player 2 wins!');
    });
    test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock", function(){
        let output = whoWon('scissors', 'rock');
        expect(output).toBe('Player 2 wins!');
    });
});