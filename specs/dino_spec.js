// https://gist.github.com/LouiseReid/62436e1b07e7ac041ee9573cb0a5b7de

// A dinosaur must have:
//
// A species
// A diet (e.g. carnivore, herbivore or omnivore)
// An average number of visitors attracted per day

const assert = require('assert');
const Dinosaur = require('../dino.js');


describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("T-rex", "carnivore", 5 );
  });

  it("should have a species type", function(){
    assert.strictEqual(dinosaur.speciesType, "T-rex");
  })

  it("should have a diet", function(){
    assert.strictEqual(dinosaur.diet, "carnivore");
  })

  it("should have a number of visitors", function(){
    assert.strictEqual(dinosaur.numberOfVisitersPerDay, 5);
  })

});
