function mergeSort(arr){
  let n = arr.length;
  if(n>1){
    let mid = Math.floor(n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    doMerge(left, right, arr);
  }
  return arr;
}

function doMerge(left, right, arr){
  let i = 0, j=0, k=0;
  while(i<left.length && j<right.length){
    if(left[i] <= right[j]){
      arr[k]=left[i];
      i++;
    }else{
      arr[k]=right[j];
      j++;
    }
    k++;
  }
  if(i===left.length){
    while(k<arr.length){
      arr[k]=right[j];
      j++;
      k++;
    }
  }else{
    while(k<arr.length){
      arr[k]=left[i];
      i++;
      k++;
    }
  }
}

module.exports = mergeSort;
