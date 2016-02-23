
//sort array

function sortArray(array){

	console.log(array);

	var i, j;

	for(i = 0; i < array.length; i++){		
		for(j = i+1; j<array.length; j++){
			console.log(array[i], array[j]);			
			if(array[i] > array[j]){
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			console.log(array);
		}

	}

	return array;

}

//console.log(sortArray([3,5,6,2,9,10,1]))

function sortArrayNew(array){

	console.log(array);

	var len = array.length;

	for(i = len-1; i >= 0; i--){
				
		for(j = 1; j <=i; j++){
			console.log(array[j-1], array[j])
			if(array[j-1] > array[j]){
				var temp = array[j-1];
				array[j-1] = array[j];
				array[j] = temp;
			}
			
			console.log(array);
		}

	}

	return array;

}

//console.log(sortArrayNew([3,5,6,2,9,10,1]))


//insertion sort

function insertSort(array){
	var len = array.length,
		item,
		i,
		j;

	console.log(array);

	for(i = 0; i < len; i++){
		item = array[i];
		//console.log(item);		
		for(j = i - 1; j >= 0 && (array[j] > item); j--){						
			array[j+1] = array[j];
		}

		array[j+1] = item;

	}

	return array;
}


//console.log(insertSort([5,2,3,6,4,9,8]));



//merge sort

function mergeSort(array){

	var len = array.length;
	if(len < 2){
		return array;
	}

	var middle = Math.floor(len/2),
		left = array.slice(0,middle),
		right = array.slice(middle);

		return mergeSortArray(mergeSort(left),mergeSort(right));

}

function mergeSortArray(left,right){

	var output = [],
	l = 0,
	r = 0;

	while(l < left.length && r < right.length){

		if(left[l] < right[r]){
			output.push(left[l++]);
		}else{
			output.push(right[r++]);
		}

	}

	return output.concat(left.slice(l)).concat(right.slice(r));
}





console.log(mergeSort([5,2,3,6,4,9,8]));























