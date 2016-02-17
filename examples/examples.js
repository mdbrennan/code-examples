

function eratosthenes(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {    	
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {    	    	
        if (array[i]) {        	
            for (var j = i * i; j < n; j += i) {            	
                array[j] = false;                
            }
        }
    }

    // All array[i] set to true are primes    
    for (var i = 2; i < n; i++) {    	
        if(array[i]) {
            output.push(i);            
        }
    }    

    return output;
};


//console.log(eratosthenes(83));


//test if word is a palindrome

function isPalindrome(word){
	var str = word;

	for(var i = 0; i<str.length/2; i++){
		console.log(str.charAt(i));
		console.log(str.charAt((str.length-1)-i));
		if(str.charAt(i) !== str.charAt((str.length-1)-i)){
			return false
		}
	}

	return true

}

//console.log(isPalindrome('hannah'));
//console.log(isPalindrome('matthew'));
//console.log(isPalindrome('gohangasalamiimalasagnahog'));


//merge two sorted arrays
function mergeArray(a,b){
	
	var merged = [],
		aItem = a[0],
		bItem = b[0],
		i = 1,
		j = 1;

	if(a.length === 0){
		return b
	}
	if(b.length === 0){
		return a
	}

	while(aItem || bItem){
		if((aItem && !bItem) || aItem < bItem){
			merged.push(aItem);
			aItem = a[i++];
		}else{
			merged.push(bItem);
			bItem = b[j++];
		}
	}

	return merged;


}

//console.log(mergeArray([1,2,3],[2,3,4,5]));


//find prime number
function isPrime(number){

	for(var i = 2; i < number; i++){
		if(number % i === 0){
			return false
		}
	}
	return number > 1
}

//console.log(isPrime(1));


function primeFactors(number){

	//create list of numbers up to input
	var numberList = [];
	for(var i = 0; i < number; i++){
		numberList.push(true);
	}

	console.log(numberList);

	//remove multiples
	var limit = Math.sqrt(number);	
	//loop through square root limit
	for(var i = 2; i <= limit; i++){
		//if number is true remove multiples
		if(numberList[i]){			
			for(var j = i * i; j < number; j += i){								
				numberList[j] = false;				
			}
			
		}
	}

	//return the primes
	var output = [];
	for(var i = 2; i < number; i++){
		if(numberList[i]){
			output.push(i);
		}
	}

	console.log(output);

}

//primeFactors(20);


function primeFactorsNew(number){
	var array = [];
	var primes = [];
	for(var i = 2; i < number; i++){
		if(!array[i]){
			primes.push(i);			
			for(var j = i * i; j < number; j += i){				
				array[j] = true;
			}
		}
	}

	console.log(primes);

}

//primeFactorsNew(33);


//fib with recursion
function fibonacci(number){
	
	if(number <= 2){
		return 1
	}else{
		return fibonacci(number - 1) + fibonacci(number - 2);
	}

}
console.log(fibonacci(3));

//fib sequence steps
function fibonacciNew(n){
	var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}
console.log(fibonacciNew(9))


//remove dupes from array
function removeDupes(array){
	var map ={};
	var output =[];


	for(var i = 0; i < array.length; i++){

		var item = array[i];
		if(!map[item]){
			map[item] = true;
			output.push(item);
		}
	}	

	return output.sort();
}

console.log(removeDupes([1,9,2,2,2,2,1,2,6,3,4,4,5,6,6,7,8]))



//reverse a string
function reverse(str){
	var string = str;
	var output =[];

	for(var i = 0; i < string.length; i++){
		output.push(string.charAt(string.length - i - 1))
	}

	return output.join('');

}

console.log(reverse('matthew is cool'));




function reverseNew (str) {

    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseNew('matthew is cool'));


