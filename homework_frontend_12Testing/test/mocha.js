var assert = chai.assert;
mocha.setup('bdd');
describe('Testing', function() {
  before('Before test starts!', function() {
    alert('here we go! Test starts!');
  });
  describe('testing sum function', function() {
    it('5 * 5 returns 10', function() {
      assert.equal(sum(5, 5), 10);
    });
    it('5 + 0 returns 5', function() {
      assert.equal(sum(5, 0), 5);
    });
  });
  describe('testing devide()', function() {
    it('deviding on 0 is not a NaN it is infinity', function() {
      assert.isNotNaN(devide(1, 0));
    });
    it('deviding 8 on -2 reurns -4', function() {
      assert.equal(devide(8, -2), -4);
    });
  });
  describe('testing object human', function() {
    it('name is a string', function() {
      assert.typeOf(human.name, 'string');
    });
    it('age is a number', function() {
      assert.typeOf(human.age, 'number');
    });
    it('canTalk is boolean', function() {
      assert.typeOf(human.canTalk, 'boolean');
    });
    it('canTalk i true', function() {
      assert.isTrue(human.canTalk, 'The human can speak');
    });
    it('speak method returns string', function() {
      assert.typeOf(human.speak(), 'string');
    });
    it('property "nothing" is null', function() {
      assert.isNull(human.nothing);
    });
    it('object is extensible(new properties can be added)', function() {
      assert.isExtensible(human);
    });
  });
  describe('arithmetic progression', function() {
    it('return array', function() {
      assert.isArray(arithProg(2, 2, 10));
    });
    it('if number 5 is in array', function() {
      assert.include(arithProg(0, 5, 4), 5);
    });
  });
  describe('Varable "unknown"', function() {
    it('variable is undefined or does not exists', function() {
      assert.notExists(unknown);
    });
    it('variable is undefined', function() {
      assert.isUndefined(unknown);
    });
  });
});

mocha.run();
