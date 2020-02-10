function oneThroughTwenty() {
    
   /* Return all numbers 1 through 20*/
   for (let counter = 1; counter <= 20; counter++) {
    console.log(counter)
   }

}

//call function oneThroughTwenty
oneThroughTwenty();

function evensToTwenty() {
    
   /* Return the even numbers from 1 to 20. (2, 4, 6,…18,20)
 */
  for (let counter = 1; counter <= 20; counter++) {
    if (counter % 2 === 0){
    console.log(counter)

  }
  
}

//call function evensToTwenty
evensToTwenty();

function oddsToTwenty() {
    
  /*  Return the odd numbers from 1 to 20. (1, 3, 5,…,17,19)  */
  for (let counter = 1; counter <= 20; counter++) {
    if (counter % 2 !== 0){
    console.log(counter)
    } 
  }
   
}

//call function oddsToTwenty
oddsToTwenty();

function multiplesOfFive() {
    
  /* Return the multiples of 5 up to 100. (5, 10, 15, …, 95, 100) */
  for (let counter = 1; counter <= 100; counter++) {
    if (counter % 5 === 0){
    console.log(counter)
    } 
  }

}

//call function multiplesOfFive
multiplesOfFive();

function squareNumbers() {
    
 /* Return all numbers up to 100 that are perfect squares. (1, 4, 9, …, 81, 100) */
 for (let counter = 1; counter <= 100; counter++) {
  if ((Math.sqrt(counter)) % 1 === 0){
  console.log(counter)
  } 
 }
 

    
}

//call function squareNumbers
squareNumbers();

function countingBackwards() {
    
  /* Return the numbers counting backwards from 20 to 1. (20, 19, 18, …, 2, 1) */
  for (let counter = 20; counter >= 1; counter--) {
    console.log(counter)
   }
  }

//call function countingBackwards
countingBackwards();

function evenNumbersBackwards() {
    
 /* Return the even numbers counting backwards from 20. (20, 18, 16, …, 4, 2) */
 for (let counter = 20; counter >= 1; counter--) {
  if (counter % 2 === 0){
    console.log(counter)

  }
 }
}

//call function evenNumbersBackwards
evenNumbersBackwards();

function oddNumbersBackwards() {
    
 /* Return the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1) */
 for (let counter = 20; counter >= 1; counter--) {
  if (counter % 2 !== 0){
    console.log(counter)

  }
 }
}

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Return the multiples of 5, counting down from 100. (100, 95, 90, …, 10, 5) */
}

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Return the numbers that are perfect squares, counting down from 100. (100, 81, 64, …, 4, 1)*/
}

//call function squareNumbersBackwards