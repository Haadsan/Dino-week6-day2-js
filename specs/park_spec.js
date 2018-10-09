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
    dinosaur = new Dinosaur("T-rex", "carnivore", 30 );
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
     })
     it('should be able to add a dinosaur to its collection ', function(){
        park.addDinosaur(dino2)
        const actual = park.numberOfDinosaurs()
        assert.strictEqual(actual, 1)
      })

  });
});
