function House() {
}

House.prototype.jump = function() {
  console.log('jump');

House.prototype.run = function() {
  console.log('runing');
};

module.exports = House;