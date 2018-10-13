<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

window.onload=function(){

    //variables 
const maxTries = 10;
var guessedLetters =[];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
var categories:['Dj','EDM','equipment'];    
var guess;
var guessedLetters;
var livesRemaining; 
var counter;
var words;




//computer picks random word to guess 
function getItem() {
//word choices
var words = ['Alan Walker','Daisy Festival','Headphones']
document.getElementById('wordGuess').innerHTML= words[Math.floorMath.random()*words.length)];
}
}
//Word Chosen 
var wordChosen = "A L A N  W A L K E R"
var space = ""
var wordLength = wordChosen.length;

for var (i=0; i < wordLength; i++) {
    var x = wordChosen.charAt(i);

    if (x === " " || x === "/'") {
        space += x;
      } else {
        space += "_";
      }
    }
    document.getElementById('space').innerHTML= space;
}
//answer array 

var answerArray = [];
for (var i = 0; i< wordLength; i++){
    answerArray[i]="_";
}



