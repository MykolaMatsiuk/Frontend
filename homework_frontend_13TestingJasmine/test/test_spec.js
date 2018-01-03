describe('Testing checkDogOwner', function () {
  it('type is function', function () {
    expect(typeof checkDogOwner).toBe('function');
  });
  it('does not throw exceptions', function () {
    expect(checkDogOwner.bind(null, user1, notify)).not.toThrow();
  });
  it('does not throw exceptions with parameters', function () {
    expect(function () { checkDogOwner(user2, notify); }).not.toThrow();
  });
  it('function notify does not calls when user has no dog', function () {
    checkDogOwner(user1, function () {
      fail('Callback has been called');
      //expect.nothing();
    });
  });
});

describe('Testing method slice of an array', function () {
  beforeEach(function () {
    array = [1, 2, 3, 'hello', true, 'jasmine', null];
  });
  it('array has property slice', function () {
    expect(typeof array.slice).toBe('function');
  });
  it('property slice is not own property of array', function () {
    expect(({}).hasOwnProperty.call(array, 'slice')).not.toBe(true);
  });
  it('method slices properly', function () {
    expect(array.slice(1, 4)).toEqual([2, 3, 'hello']);
  });
  it('after slicing length is less or equal to arrays length', function () {
    expect(array.slice(3).length <= array.length).toBe(true);
  });
  it('slice without args returns the same array', function () {
    expect(array.slice()).toEqual(array);
  });
  it('with one arg method slices from element(arg) till end', function () {
    expect(array.slice(5)).toEqual(['jasmine', null]);
  });
});

describe('Testing method splice of an array', function () {
  beforeEach(function () {
    array = [1, 2, 3, 'hello', true, 'jasmine', null];
  });
  it('array has property splice', function () {
    expect('splice' in array).toBe(true);
  });
  it('method splice returns an array of cutted elements', function () {
    expect(array.splice(2, 2)).toEqual([3, 'hello']);
  });
  it('method splice with two args deletes elements', function () {
    expect(array.splice(2, 1).length).toBeLessThan(array.length);
  });
  it('method splice with three args (second=0) adds elements at the postion of I el', function () {
    array.splice(1, 0, 'jimmy');
    expect(array).toEqual([1, 'jimmy', 2, 3, 'hello', true, 'jasmine', null])
  });
  it('method splice with one arg deletes elements from array starting from position=arg', function () {
    array.splice(3);
    expect(array).toEqual([1, 2, 3]);
  });
  it('method splice with negative first arg begins work from the end of an array', function () {
    expect(array.splice(-2, 2)).toEqual(['jasmine', null]);
  });
});
