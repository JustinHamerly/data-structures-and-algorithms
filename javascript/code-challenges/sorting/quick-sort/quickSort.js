module.exports = function quickSort(arr){
  let left = 0;
  let right = arr.length-1;
  doQuickSort(arr, left, right);
  return arr;
};

function doQuickSort(arr, left, right){
  if (left<right){
    let position = partition(arr, left, right);
    doQuickSort(arr, left, position-1);
    doQuickSort(arr, position+1, right);
  }
  return arr;
}

function partition(arr, left, right){
  let pivot = arr[right];
  let low = left - 1;

  for (let i=left; i<=right; i++){
    if(arr[i]<=pivot){
      low ++;
      swap(arr, i, low);
    }
  }

  return low;
}

function swap(arr, i, low){
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
