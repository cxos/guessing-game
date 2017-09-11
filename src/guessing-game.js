class GuessingGame {
  setRange(min, max) {
    this.lowerBound = min;
    this.upperBound = max;
  }

  guess() {
    this.currentValue = Math.ceil((this.lowerBound + this.upperBound) / 2);
    return this.currentValue;
  }

  lower() {
    this.upperBound = this.currentValue;
  }

  greater() {
    this.lowerBound = this.currentValue;
  }
}

module.exports = GuessingGame;
