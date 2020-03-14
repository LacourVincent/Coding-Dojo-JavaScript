class TennisGame {
  constructor(playerOneName, playerTwoName) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }

  getScore() {
    return this.hasWinner()
      ? this.playerWithHighestScore() + " win"
      : this.hasAdvantage()
      ? "Advantage " + this.playerWithHighestScore()
      : this.isDeuce()
      ? "Deuce"
      : this.playerOneScore === this.playerTwoScore
      ? this.translateScore(this.playerOneScore) + " All"
      : this.translateScore(this.playerOneScore) + "," + this.translateScore(this.playerTwoScore);
  }

  playerWithHighestScore() {
    return this.playerOneScore > this.playerTwoScore ? this.playerOneName : this.playerTwoName;
  }

  isDeuce() {
    return this.playerOneScore >= 3 && this.playerTwoScore === this.playerOneScore;
  }

  hasAdvantage() {
    if (this.playerTwoScore >= 4 && this.playerTwoScore === this.playerOneScore + 1) return true;
    if (this.playerOneScore >= 4 && this.playerOneScore === this.playerTwoScore + 1) return true;
    return false;
  }

  hasWinner() {
    if (this.playerTwoScore >= 4 && this.playerTwoScore >= this.playerOneScore + 2) return true;
    if (this.playerOneScore >= 4 && this.playerOneScore >= this.playerTwoScore + 2) return true;
    return false;
  }

  increaseScorePlayerOne() {
    this.playerOneScore += 1;
  }

  increaseScorePlayerTwo() {
    this.playerTwoScore += 1;
  }

  translateScore(score) {
    if (score === 0) return "Love";
    if (score === 1) return "Fifteen";
    if (score === 2) return "Thirty";
    if (score === 3) return "Forty";
    return null;
  }
}

module.exports = TennisGame;
