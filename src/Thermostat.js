function Thermostat() {
  DEFAULT_TEMPERATURE = 20;
  this.temperature = DEFAULT_TEMPERATURE;
  this.MINIMUM = 10;
}

Thermostat.prototype.currentTemp = function () {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  this.temperature ++;
};

Thermostat.prototype.decreaseTemperature = function () {
  if (this.temperature > this.MINIMUM) {
    this.temperature --;
  }
  else {
    throw 'NOT GONNA WORK BITCH';
  }
};
