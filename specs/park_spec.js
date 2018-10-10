//
// A park must have:
//
// A name
// A ticket price
// A collection of dinosaurs


const assert = require('assert');
const Dinosaur = require('../dino.js');
const Park = require('../park.js');

describe('Park', function() {

  let park;

  beforeEach(function(){
    park = new Park("Dino_Park", 10 );
    dino1 = new Dinosaur("T-rex", "carnivore", 30 );
    dino2 = new Dinosaur("Mammut", "herbivore", 10)
    dino3 = new Dinosaur("Compsognathus" , "carnivore", 5)
  });

  it("should have a spark name", function(){
    assert.strictEqual(park.name, "Dino_Park");
  });

  it("should have a ticket price", function(){
    assert.strictEqual(park.price, 10);
  });
  // starts with empty  array [] of dinosaurs
  describe("dinosaurs", function(){
    it("should start with no dinosaurs", function(){
      const actual = park.dinosaurs;
      assert.deepStrictEqual(actual, [])
    });

    it('should be able to return the number of dinosaurs', function(){
      const actual = park.numberOfDinosaurs()
      assert.strictEqual(actual, 0)
    });
    // add dinosaur
    it('should be able to add a dinosaur to its collection of dinosaurs ', function(){
      park.addDinosaur(dino2);
      const actual = park.numberOfDinosaurs()
      assert.strictEqual(actual, 1)
    });

    // remove dinosaur
    it('should be able to Remove a dinosaur from its collection of dinosaurs ', function(){
      park.addDinosaur(dino2);
      park.addDinosaur(dino3);
      park.removeDinosaur(dino2)
      const actual = [dino3]
      const expected = park.dinosaurs
      assert.deepStrictEqual(actual, expected)
    });
    // Find the dinosaur that attracts the most visitors
    it("should be able to find the dinosaur that attracts the most visitors", function(){
      park.addDinosaur(dino2);
      park.addDinosaur(dino3);
      park.addDinosaur(dino1);
      assert.strictEqual(park.mostVisited().speciesType, "T-rex" )
    });

    // it should find dinosaur of particular speciesType
    // add all dinosaur and make sure that there are similar species to the list of dinosaurs
    // asert park.spiciestypesize(the speciestype most similar).length, number of similar speciestype

  });
});
