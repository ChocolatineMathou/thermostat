function Thermostat() {
  DEFAULT_TEMPERATURE = 20;
  this.SAVING_ON_MAX_TEMP = 25;
  this.SAVING_OFF_MAX_TEMP = 32;
  this.temperature = DEFAULT_TEMPERATURE;
  this.MINIMUM = 10;
  this.powerSaving = true;
}

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function() {

  if (this.powerSaving === true)
    if (this.temperature < this.SAVING_ON_MAX_TEMP) {
      this.temperature ++;
    }
    else {
      throw "Temperature at max: switch off power saving";
    }
  else if (this.powerSaving === false) {
    if (this.temperature < this.SAVING_OFF_MAX_TEMP) {
      this.temperature ++;
    }
    else {
      throw "Temperature at max: can't increase temperature";
    }
  }
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > this.MINIMUM) {
    this.temperature --;
  }
  else {
    throw 'NOT GONNA WORK BITCH';
  }
};

Thermostat.prototype.switchPowerSaving = function() {
  (this.powerSaving ? this.powerSaving = false : this.powerSaving = true)
};

// Thermostat.prototype.maxTemp = function() {
//   (this.powerSaving ? return this.SAVING_ON_MAX_TEMP : return this.SAVING_OFF_MAX_TEMP)
// };
//
// Thermostat.prototype.maxError = function() {
//   (this.powerSaving ? throw "Temperature at max: switch off power saving" : throw "Temperature at max: can't increase temperature")
// };
