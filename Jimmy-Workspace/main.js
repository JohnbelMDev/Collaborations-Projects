 //function to make the cards
 function makeCards(){
    var elements = document.querySelectorAll('input') //select all the <input> elements from the html
    var terms = []; //declare lists for terms and answer
    var answer= []; 
    console.log(elements);
    for(var i = 0; i < elements.length; i++){
        var check = elements[i].value; //get the value of the inputs
        if(i%2==0){
            terms.push(check); //push terms into list
        }
        else{
            answer.push(check); //push answers into list
        }
    }
    var div = document.getElementById('card_form'); // get the div element from the HTML 
    while(div.firstChild){ //Remove all contents from the div
        div.removeChild(div.firstChild);
    }
    showCards(terms,answer); //call function to render the cards 
}
// function to show the cards
function showCards(term,ans){
    var str=''; //declare an empty string
    for(var i = 0; i<term.length;i++){
    str += '<div class="flip-card"><div class="flip-card-inner"><div class="flip-card-front"><h1>'+term[i]+'</h1></div><div class="flip-card-back"><h1>'+ans[i]+'<h1></div></div></div>'
    }        // combine the HTML string into the variable 'str' 
    console.log("THE STRING:"+str);
    document.getElementById('showingCards').innerHTML = str; //write the str into HTML
}