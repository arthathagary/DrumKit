// document.querySelectorAll("button")[0].addEventListener("click", clickButton);
// document.querySelectorAll("button")[1].addEventListener("click", clickButton);
// document.querySelectorAll("button")[2].addEventListener("click", clickButton);
// document.querySelectorAll("button")[3].addEventListener("click", clickButton);
// document.querySelectorAll("button")[4].addEventListener("click", clickButton);
// document.querySelectorAll("button")[5].addEventListener("click", clickButton);
// document.querySelectorAll("button")[6].addEventListener("click", clickButton);


// function clickButton(){
//     // alert("I got clicked!");
//     const audioElement = new Audio('sounds/tom-1.mp3');
//     audioElement.play();

// }

let numberOfDrums = document.querySelectorAll(".drum").length;

                   
// dedect mouse click
for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        // alert("I got clicked!");
        let placeOfTheBlock = this.innerHTML;
        makeSound(placeOfTheBlock);
    });
}



// Changing The Background Image of each element by js

document.querySelector(".d").style.backgroundImage = "url(images/tom4.png)";
document.querySelector(".k").style.backgroundImage = "url(images/crash.png)";
document.querySelector(".j").style.backgroundImage = "url(images/snare.png)";
document.querySelector(".l").style.backgroundImage = "url(images/kick.png)";





//Dedect keyboard click
for (let i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll("button")[i].addEventListener("keydown", function () {
        // alert("I got clicked!");
        // let placeOfTheBlock = this.innerHTML;
        makeSound(event.key);
    })
}

// make sound for every action
function makeSound (key){
    switch (key) {
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            let kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        
        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            console.log("End");
            break;
    }
}


document.querySelectorAll(".drum")[0].addEventListener("click",function(){
    document.querySelectorAll(".drum")[0].classList.add("pressed");

    setInterval(function(){
        document.querySelector(".drum").classList.remove("pressed");
    },100)
})
