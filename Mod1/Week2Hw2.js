/*
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and 
returns the largest of them. Use the if-then-else construct available in Javascript. 
Do some googling to figure this out if you forget how conditionals work.


2. Define a function maxOfThree that takes three numbers as arguments 
and returns the largest of them.


3. Write a function isCharacterAVowel that takes a character 
(i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


4. Define a function sumArray and a function multiplyArray 
that sums and multiplies (respectively) all the numbers in an array of numbers. 
For example, sumArray([1,2,3,4]) should return 10, and 
multiplyArray([1,2,3,4]) should return 24.


5. Write a function that returns the number of arguments passed to the 
function when called.


6. Define a function reverseString that computes the reversal of a string. 
For example, reverseString("jag testar") should return the string "ratset gaj".


7. Write a function findLongestWord that takes an array of words 
and returns the length of the longest one.


8. Write a function filterLongWords that takes an array of words and a 
number i and returns the array of words that are longer than i characters long.             


Bonus

1. Add a method reverseString (from question 6) to the object String 
so that it is possible to call: "Per Scholas".reverseString().


2. Write a function that takes a string as argument and returns an object where:
-> the keys are the characters that occur in the string
-> the values are the number of occurrences for each letter, regardless of the case
For example, calling the function with the string "Per Scholas" will return:

{ a: 1,
c: 1, e: 1,
h: 1, l: 1,
o: 1,
p: 1, r: 1, s: 2, }
 */
                 
                 //QUESTION 1  

function maxOfTwoNumbers(x, y){
    if (x > y){
        console.log(` That's right ${x} is larger than ${y}` );
    } else if (y > x){
        console.log(` That's right ${y} is larger than ${x}`);
    }
    else{
        console.log(`These are equal`)
    }

}

maxOfTwoNumbers(1, 10);



                    //QUESTION 2

function maxOfThree(x, y, z){
    console.log(Math.max(x, y, z));
}

maxOfThree(100, 250, 500);


                        //QUESTION 3

function isCharacterAVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        //console.log(`This is a vowel`);
        return true;
    }
    else{
       // console.log(`Not a vowel`);
       return false;
    }
}
console.log(isCharacterAVowel('a'));


                        //QUESTION 4
                   
function sumArray(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    console.log(`The sum is ${sum}.`);
}
sumArray([1, 2, 3, 4]);

function multiplyArray(array){
    let multiply = 1;
    for(let p = 0; p < array.length; p++){
        multiply *= array[p];
    }
    console.log(`The product is ${multiply}.`);
}
multiplyArray([1, 2, 3, 4]);



                        //QUESTION 5
                      
function numOfArguments(argument1, argument2, argument3) {
    const argumentArray = [argument1, argument2, argument3];
    console.log(argumentArray.length);
}
numOfArguments();

                            //QUESTION 6

 function reverseString(string){
    const originalString = string.split("");
    const reverseString = originalString.reverse();
    const newString = reverseString.join("");
    console.log(newString);
    return newString;
}
reverseString("jag testar");


                            //QUESTION 7

function findLongestWord(string){
    const ogString = string.split(" "); //DONT FORGET SPACE BETWEEN QUOTES!!
    let longestWord = 0;
    for(let i = 0; i < ogString.length; i++){
        if(ogString[i].length > longestWord){
            longestWord = ogString[i].length;
        }
    }
    console.log(longestWord);
    return longestWord;
}

findLongestWord(`Dave Chapelle's And 1 skit is why I love tennis`);


                        //QUESTION 8 (not all the way happy with the outcome of this code)
function filterLongWords(string, x){
    wordLengthArray = [];
    for(let i = 0; i < string.length; i++){
        if(string[i].length > x){
            wordLengthArray.push(string[x]);
        }
    }
    console.log(wordLengthArray);
}
filterLongWords(['yo', 'it', 'is', 'type', 'lit'], 3);



//BONUS QUESTION 2 (SHOUTOUT ANGEL FOR THE HASH MAP LECTURE)

const name = "per scholas";
const hashMap = {};
for(let i = 0; i < name.length; i++) {
  const individualCharacter = name[i];
  const ifExists = hashMap[individualCharacter]
  if(!ifExists) {
    hashMap[individualCharacter] = 1;
  } else {
    hashMap[individualCharacter] += 1;
  }
}
console.log(hashMap);
