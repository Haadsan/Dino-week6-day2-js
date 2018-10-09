const Park = function(name, price ){
  this.name = name;
  this.price = price;
  this.dinosaurs = []
};

Park.prototype.numberOfDinosaurs = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  return this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  let position = this.dinosaurs.indexOf(dinosaur)
    return this.dinosaurs.splice(position, 1);
};
module.exports = Park;
