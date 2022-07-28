let maximum = parseInt(prompt("enter your max number!"));
while (!maximum) {
    maximum = parseInt(prompt("cut it gimme a valid one"));
}
const targetNum = Math.floor(Math.random() * maximum) +1;

let guess = parseInt(prompt("enter your first guess!"));
let deneme = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === "q") {
        break;
    }
    deneme++;
    if (guess > targetNum){
        guess = (prompt("too high"));
    }
    else{
        guess = (prompt("too less"));
    }
}
if (guess === "q") {
    console.log("sg")
}
else{
    console.log("aferin bildin")
    console.log(deneme + ".denemede buldun")
}