const quickSort = require('../quick-sort/quickSort');

describe('testing merge sort function', () => {

  it('should sort an array of values that are already sorted', ()=> {
    let arr1 = [1,2,3,4,5,6];
    let arr1results = quickSort(arr1);
    expect(arr1results).toStrictEqual([1,2,3,4,5,6]);
  });

  it('should sort an array that is reversed', () => {
    let arr1 = [6,5,4,3,2,1];
    let arr1results = quickSort(arr1);
    expect(arr1results).toStrictEqual([1,2,3,4,5,6]);
  });

  it('should sort an array of even length', () => {
    let arr1 = [5,22,14,15,1,17];
    let arr1results = quickSort(arr1);
    expect(arr1results).toStrictEqual([1,5,14,15,17,22]);
  });

  it('should sort an array of odd length', () => {
    let arr1 = [5,22,14,15,1,17,40];
    let arr1results = quickSort(arr1);
    expect(arr1results).toStrictEqual([1,5,14,15,17,22,40]);
  });

  it('should sort an array with one value', () => {
    let arr1 = [5];
    let arr1results = quickSort(arr1);
    expect(arr1results).toStrictEqual([5]);
  });

  it('should return an empty array when the array has no values', () => {
    let arr1 = [];
    let arr1results = quickSort(arr1);
    expect(arr1results).toStrictEqual([]);
  });

  it('should sort 0 and negative values', () => {
    let arr1 = [-5,22,14,-15,1,0];
    let arr1results = quickSort(arr1);
    expect(arr1results).toStrictEqual([-15,-5,0,1,14,22]);
  });

});
