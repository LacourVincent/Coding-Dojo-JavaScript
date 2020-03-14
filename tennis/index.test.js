const TennisGame = require("./index");

describe("TennisGame", () => {
  const game = new TennisGame("Player1", "Player2");
  it("should init the game correctly", () => {
    expect(game.playerOneName).toBe("Player1");
    expect(game.playerOneScore).toBe(0);
    expect(game.playerTwoName).toBe("Player2");
    expect(game.playerTwoScore).toBe(0);
  });

  it("should return Love all", () => {
    expect(game.getScore()).toBe("Love All");
  });

  it("should test player One wins first ball", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 1, 0);
    expect(tennis.getScore()).toBe("Fifteen,Love");
  });

  it("should test Fifteen All", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 1, 1);
    expect(tennis.getScore()).toBe("Fifteen All");
  });

  it("should test player Two win 2 firsts balls", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 0, 2);
    expect(tennis.getScore()).toBe("Love,Thirty");
  });

  it("should test player One win 3 firsts balls", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 3, 0);
    expect(tennis.getScore()).toBe("Forty,Love");
  });

  it("should test players are Deuce", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 3, 3);
    expect(tennis.getScore()).toBe("Deuce");
  });

  it("should test players One win game", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 4, 0);
    expect(tennis.getScore()).toBe("Player1 win");
  });

  it("should test players Two win game", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 1, 4);
    expect(tennis.getScore()).toBe("Player2 win");
  });

  it("should test players are Deuce 4-4", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 4, 4);
    expect(tennis.getScore()).toBe("Deuce");
  });

  it("should test advantage player Two", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 4, 5);
    expect(tennis.getScore()).toBe("Advantage Player2");
  });

  it("should test advantage player One", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 5, 4);
    expect(tennis.getScore()).toBe("Advantage Player1");
  });

  it("should test player two win", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 2, 4);
    expect(tennis.getScore()).toBe("Player2 win");
  });

  it("should test player two win after advantage", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 4, 6);
    expect(tennis.getScore()).toBe("Player2 win");
  });

  it("should test player one win after advantage", () => {
    const tennis = new TennisGame("Player1", "Player2");
    createScore(tennis, 5, 3);
    expect(tennis.getScore()).toBe("Player1 win");
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
