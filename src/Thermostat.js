function Thermostat(){
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
  this.powerSavingMode = true;
};

Thermostat.prototype.increaseTemp = function(){
  if(this.maximumTemperature === this.temperature) {
    throw "Max temperature exceeded";
  } else {
    this.temperature ++;
  }

};

Thermostat.prototype.decreaseTemp = function(){
  if(this.minimumTemperature === this.temperature) {
    throw "Min temp reached";
  } else {
  this.temperature --;
}
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.changePowerSavingMode = function(){
  
  return this.powerSavingMode === true;
};
