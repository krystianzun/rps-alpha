const paperButton = document.getElementById('paper');
const paraText = document.getElementById('para');


// Test if buttons work. Text shows up on any button click. 
paperButton.addEventListener('click', setText);



const btn = document.getElementById('theButton');
const myText = document.getElementById('theDiv');

btn.addEventListener('click', function(){
  const myInsertText = 'Hello World !';
  myText.innerHTML = myInsertText;

});