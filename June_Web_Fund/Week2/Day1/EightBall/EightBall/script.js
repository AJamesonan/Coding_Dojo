var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getAnswer() {
    var index = Math.floor(20*Math.random()); 
    var answer = lifesAnswers[index];
    // return answer;
    document.querySelector("#answer").innerText = answer;
    // replace()
}

function replace(){
    var ballimage = document.querySelector("#ball");
    ballimage.src = "ball.gif";
    console.log(ballimage)
    setTimeout(replaceback, 2000);
}
function replaceback() {
    var ballimage = document.querySelector("#ball");
    ballimage.src = "ballStill.jpg";
    getAnswer();
}