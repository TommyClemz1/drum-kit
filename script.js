
let numberOfDrumButtons= document.querySelectorAll('.drum').length;


for (let i = 0; i<numberOfDrumButtons; i++) {

   
document.querySelectorAll('.drum')[i].addEventListener('click', function (){
// alert('I got clicked'); 

// console.log(this.innerHTML);
var buttonInnerHTML = this.innerHTML;

switch (buttonInnerHTML) {
    case "w":
         let audio =new Audio('sounds/crash.mp3');
        audio.play();

        break;
        
        case "a":
            let audio2 = new Audio('sounds/kick-bass.mp3');
            audio2.play();
            
            break;

            case "s":
            let audio3 = new Audio('sounds/snare.mp3');
            audio3.play();

            break;

            case "d":
               
            let audio4 = new Audio('sounds/tom-1.mp3');
            audio4.play();

            break;

            case "j":
            let audio5 = new Audio('sounds/tom-2.mp3');
            audio5.play();

            break;

            case "k":
            let audio6 = new Audio('sounds/tom-3.mp3');
            audio6.play();

            break;

            case "l":
            let audio7 = new Audio('sounds/tom-4.mp3');
            audio7.play();

            break;
    default:
    
}

});
 
}



addEventListener('keypress', ()=>{
    alert('Key was pressed')
})





// let audio =new Audio('sounds/crash.mp3');
// audio.play();


































// let numOfDrumButtons = document.querySelectorAll(".drum").length;

//  for (let i = 0; i < numOfDrumButtons;  i++) {
//         document.querySelectorAll(".drum")[i].addEventListener('click', handleClick);



//     }



// function handleClick() {
//  let  yes = .innerHTML.style.color="white";
//    console.log(yes);
// }

// var audio = new Audio('./sounds/crash.mp3');
//    audio.play();