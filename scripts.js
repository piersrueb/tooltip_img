//  js file
var rNum;  //  set global variable

function getRandNum(){
    rNum = Math.floor(Math.random() * 25) + 1;  //  get random number between 1 - 25, store it in rNum variable
    document.getElementById('number').innerHTML = rNum;  //  insert the random number into the ID
}
getRandNum();  //  run the function on init

document.getElementById('btn').addEventListener('click', getRandNum);  //  run it when we click the button
