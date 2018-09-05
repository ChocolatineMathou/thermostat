describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {

    it('shows the current temperature', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('increaseTemperature', function() {
    it('increases current temperature by 1', function() {
      thermostat.increaseTemperature();
      expect(thermostat.currentTemp()).toEqual(21);
    });
  });

  describe('decreaseTemperature', function() {
    it('decreases current temperature by 1', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.currentTemp()).toEqual(19);
    });

    it('does not decrease below minimum', function() {
      thermostat.temperature = thermostat.MINIMUM;
      expect(function() {thermostat.decreaseTemperature()}).toThrow('NOT GONNA WORK BITCH');
    });
  });

  describe('powerSaving', function() {
    it('is on by default', function() {
      expect(thermostat.powerSaving).toEqual(true);
    });
  });

  describe('switchPowerSaving', function() {
    it('switches true to false', function() {
      thermostat.powerSaving = false
      thermostat.switchPowerSaving();
      expect(thermostat.powerSaving).toEqual(true);
    });

    it('switches false to true', function() {
      thermostat.switchPowerSaving();
      expect(thermostat.powerSaving).toEqual(false);
    });

  });


});
