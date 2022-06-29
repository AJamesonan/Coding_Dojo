
var currlikearr = [Ln1, Ln2, Ln3]
var worklikearr = [9,12,9]
var Ln1 = 9
function likeCounter1(element){
    var element = document.querySelector('#likecount1');
    Ln1++;
    worklikearr[0] = Ln1;
    var newcount =element.innerText = (Ln1 + ' like(s)');
    console.log(worklikearr);
}
var Ln2 = 12
function likeCounter2(element){
    var element = document.querySelector('#likecount2');
    Ln2++;
    worklikearr[1] = Ln2;
    var newcount =element.innerText = (Ln2 + ' like(s)');
    console.log(worklikearr);
}
var Ln3 = 9
function likeCounter3(element){
    var element = document.querySelector('#likecount3');
    Ln3++;
    worklikearr[2] = Ln3;
    var newcount =element.innerText = (Ln3 + ' like(s)');
    console.log(worklikearr);
}
