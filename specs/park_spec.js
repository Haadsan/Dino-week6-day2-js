const assert = require('assert');
const Dinosaur = require('../dino.js');
const Park = require('../park.js');

describe('Park', function() {

  let park;

  beforeEach(function(){
    park = new Park("Dino_Park", 10 );
    })

    it("should have a spark name", function(){
      assert.strictEqual(park.name, "Dino_Park");
    })

    it("should have a ticket price", function(){
      assert.strictEqual(park.price, 10);
    })

  });
