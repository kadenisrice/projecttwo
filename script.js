let memberName = prompt("Welcome to GC mini golf! What is your name?");

let holeCount = Number(prompt("Hi, " + memberName + "! would you like to play 3 or 6 holes today?"))

let Sum3
let Sum6


if (holeCount === 3) {

    let hole1 = Number(prompt("How many putts for hole 1?"))
    let hole2 = Number(prompt("How many putts for hole 2?"))
    let hole3 = Number(prompt("How many putts for hole 3?"))

    Sum3 = (hole1 + hole2 + hole3 - 9)

} else {

    let hole1 = Number(prompt("How many putts for hole 1?"))
    let hole2 = Number(prompt("How many putts for hole 2?"))
    let hole3 = Number(prompt("How many putts for hole 3?"))
    let hole4 = Number(prompt("How many putts for hole 4?"))
    let hole5 = Number(prompt("How many putts for hole 5?"))
    let hole6 = Number(prompt("How many putts for hole 6?"))

    Sum6 = (hole1 + hole2 + hole3 + hole4 + hole5 + hole6 - 18)

}


// ~~~ FOR 3 HOLES ~~~
if (holeCount === 3) {

    if (Sum3 < 0) {

        alert("Gread job, " + memberName + "! Your total par was: " + Sum3)
        console.log ("Gread job, " + memberName + "! Your total par was: " + Sum3)

    } else if (Sum3 === 0) {

        alert("Good game, " + memberName + ". Your total par was: " + Sum3)
        console.log("Good game, " + memberName + ". Your total par was: " + Sum3)


    } else {

        alert("Nice try, " + memberName + "... Your total par was: " + Sum3)
        console.log("Nice try, " + memberName + "... Your total par was: " + Sum3)

    }
}

// ~~~ FOR 6 HOLES ~~~
if (holeCount === 6) {

    if (Sum6 < 0) {

        alert("Gread job, " + memberName + "! Your total par was: " + Sum6)
        console.log("Gread job, " + memberName + "! Your total par was: " + Sum6)

    } else if (Sum6 === 0) {

        alert("Good game, " + memberName + ". Your total par was: " + Sum6)
        console.log("Good game, " + memberName + ". Your total par was: " + Sum6)

    } else {

        alert("Nice try, " + memberName + "... Your total par was: " + Sum6)
        console.log("Nice try, " + memberName + "... Your total par was: " + Sum6)

    }
}