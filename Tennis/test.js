const { TennisGame } = require("./core");
const assert = require("assert");

describe("Test of the TennisGame Module", () => {
    const game = new TennisGame("Vincent", "Alexandre");
    it("should test the correct name of the player 1", () => {
        assert.equal(game.playerOneName, "Vincent");
    });

    it("should test the correct name of the player 2", () => {
        assert.equal(game.playerTwoName, "Alexandre");
    });

    it("should test the initial score of the player 1", () => {
        assert.equal(game.playerOneScore, 0);
    });

    it("should test the initial score of the player 2", () => {
        assert.equal(game.playerTwoScore, 0);
    });

    it("should return Love all", () => {
        assert.equal(game.getScore(), "Love All");
    });

    it("should test player One wins first ball", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 1, 0);
        assert.equal(tennis.getScore(), "Fifteen,Love");
    });

    it("should test Fifteen All", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 1, 1);
        assert.equal(tennis.getScore(), "Fifteen All");
    });

    it("should test player Two win 2 firsts balls", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 0, 2);
        assert.equal(tennis.getScore(), "Love,Thirty");
    });

    it("should test player One win 3 firsts balls", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 3, 0);
        assert.equal(tennis.getScore(), "Forty,Love");
    });

    it("should test players are Deuce", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 3, 3);
        assert.equal(tennis.getScore(), "Deuce");
    });

    it("should test players One win game", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 4, 0);
        assert.equal(tennis.getScore(), "Vincent win");
    });

    it("should test players Two win game", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 1, 4);
        assert.equal(tennis.getScore(), "Alexandre win");
    });

    it("should test players are Deuce 4-4", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 4, 4);
        assert.equal(tennis.getScore(), "Deuce");
    });

    it("should test advantage player Two", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 4, 5);
        assert.equal(tennis.getScore(), "Advantage Alexandre");
    });

    it("should test advantage player One", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 5, 4);
        assert.equal(tennis.getScore(), "Advantage Vincent");
    });

    it("should test player two win", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 2, 4);
        assert.equal(tennis.getScore(), "Alexandre win");
    });

    it("should test player two win after advantage", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 4, 6);
        assert.equal(tennis.getScore(), "Alexandre win");
    });

    it("should test player one win after advantage", () => {
        const tennis = new TennisGame("Vincent", "Alexandre");
        createScore(tennis, 5, 3);
        assert.equal(tennis.getScore(), "Vincent win");
    });
});

const createScore = (match, scorePlayerOne, scorePlayerTwo) => {
    for (var i = 0; i < scorePlayerOne; i++) {
        match.increaseScorePlayerOne();
    }
    for (var j = 0; j < scorePlayerTwo; j++) {
        match.increaseScorePlayerTwo();
    }
};
