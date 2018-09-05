function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.currentTemp = function () {
  return this.temperature
};
