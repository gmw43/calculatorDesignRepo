let string = " ";
let display = document.getElementsByClassName('input')
let buttons = document.querySelectorAll(".btn");
const delbtn = document.querySelector(".delbtn")
const resetbtn = document.querySelector(".resetbtn")
const assignmentbtn = document.querySelector(".assignmentbtn")
const topSection = document.querySelector(".topSection")
const container = document.querySelector(".container")
const buttonSection = document.querySelector(".buttonSection")
const displayRow = document.querySelector(".displayRow")


const allbtn = document.querySelectorAll(".btn")
const btn = document.querySelector("lable")

 function switchFunc () {
    delbtn.classList.toggle("deltogglebtn")
    resetbtn.classList.toggle("deltogglebtn")
    assignmentbtn.classList.toggle("assignmenttogglebtn")
    topSection.classList.toggle("topSectionToggle")
    container.classList.toggle("containerToggle")
    buttonSection.classList.toggle("buttonSectionToogle")
    displayRow.classList.toggle("displayRowToggle")

    for(let x of allbtn){
        x.classList.toggle("btntoggle")
    }
  }

Array.from(buttons).forEach((btn) => {
    
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'RESET') {
            string = " ";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
            console.log(string)
        }
    });
});

// function toggleStage() {
//     const btn = document.querySelector('.toggle-btn');
//     btn.classList.toggle('active');}