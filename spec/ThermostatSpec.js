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

    describe('when power saving is on', function() {
      it('increases current temperature by 1', function() {
        thermostat.increaseTemperature();
        expect(thermostat.currentTemp()).toEqual(21);
      });

      it('throws an error if temp is at max', function(){
        thermostat.temperature = thermostat.SAVING_ON_MAX_TEMP;
        expect(function() {thermostat.increaseTemperature()}).toThrow("Temperature at max: switch off power saving")
      });
    });

    describe('when power saving is off', function() {
      it('increases current temperature by 1', function() {
        thermostat.switchPowerSaving()
        thermostat.increaseTemperature();
        expect(thermostat.currentTemp()).toEqual(21);
      });

      it('throws an error if temp is at max', function(){
        thermostat.switchPowerSaving()
        thermostat.temperature = thermostat.SAVING_OFF_MAX_TEMP;
        expect(function() {thermostat.increaseTemperature()}).toThrow("Temperature at max: can't increase temperature")
      });
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
