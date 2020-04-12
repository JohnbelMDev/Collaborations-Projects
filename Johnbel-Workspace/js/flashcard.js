var storedTerms = JSON.parse(localStorage.getItem('question')); // (TERMS) get the terms and answers LIST from local storage
var storedAnswers = JSON.parse(localStorage.getItem('answers')); // (ANSWERS)
var slideIndex = 0;
var length = storedTerms.length;
console.log('Terms ' + storedTerms);
console.log('ANSWERS : ' + storedAnswers);
document.getElementById('content_terms').innerHTML = String(storedTerms[0]); //get the terms and answers LIST from the local
document.getElementById('content_answers').innerHTML = String(storedAnswers[0]);
showDivs(slideIndex); //show the first flash card when the page loads
function plusDivs(n) {
    if ((slideIndex+n)>length-1 ||(slideIndex+n)<0){ //if the slideIndex is out of bounds, then continue to show the current card
      showDivs(slideIndex);
    }
    else{ //if the element is not out of bounds, show the new card
      showDivs(slideIndex += n); //call the navigation function to go to the next card passing in the slideIndex value and n (-1, or 1 depending on buttons pressed)
    }
};
function showDivs(n) {
    document.getElementById('content_terms').innerHTML = String(storedTerms[n]); //update the content of the flash cards (front)
    document.getElementById('content_answers').innerHTML = String(storedAnswers[n]); //(and back)
}
