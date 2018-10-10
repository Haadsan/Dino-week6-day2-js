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
  let indexPosition = this.dinosaurs.indexOf(dinosaur)
    return this.dinosaurs.splice(indexPosition, 1);
};

Park.prototype.mostVisited = function () {
   //assigned the first object/dinasour to a new variable.
  let mostVisited = this.dinosaurs[2]
  //loop over all the objects/dinosaurs in the array
  for(dinosaur of this.dinosaurs){
    //find out what the number attraction number and
    // check that against the current objects/dinasour attraction number that is in the variable above.
    if(dinosaur.visitorAttractedPerDay > mostVisited.visitorAttractedPerDay){
        //if it is more then the variable changes to that object.
    mostVisited = dinosaur;
  }
    //return what the most popular object/dinosaur is.
  return mostVisited
}

};

//proto type spiciestypesize = function(spiciestype)
// let spiciestypesizeArray = [] ...empty, starts empty
// for loop all the dinosaur in the array
// if statement: if the dinosaur.speciesType is equal === spiciestype
//speciesTypeSizeArray.push(dinosaur) ..the dinasour that are similar species
// return speciesTypeSizeArray
module.exports = Park;
