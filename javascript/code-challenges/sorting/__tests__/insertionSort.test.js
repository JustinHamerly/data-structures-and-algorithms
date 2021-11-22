const insertionSort = require('../insertion-sort/insertionSort');

describe('testing insertion sort function', () =>{

  it('should take an array of numbers and return the array sorted', () =>{
    let arr1 = [5,3,1,2,4];
    let arr1results = insertionSort(arr1);
    expect(arr1results).toStrictEqual([1,2,3,4,5]);
  });

  it('should accept an array with one value', () => {
    let arr1 = [1];
    let arr1results = insertionSort(arr1);
    expect(arr1results).toStrictEqual([1]);
  });

  it('should accept negative numbers', () => {
    let arr1 = [1, 5, -7, 15, -8, -2];
    let arr1results = insertionSort(arr1);
    expect(arr1results).toStrictEqual([-8, -7, -2, 1, 5, 15]);
  });

  it('should accept the value 0', () => {
    let arr1 = [4, 2, 0, 5, -1];
    let arr1results = insertionSort(arr1);
    expect(arr1results).toStrictEqual([-1, 0, 2, 4, 5]);
  });

  it('should return an empty array, if the input array is empty', () => {
    let arr1 = [];
    let arr1results = insertionSort(arr1);
    expect(arr1results).toStrictEqual([]);
  });

});

