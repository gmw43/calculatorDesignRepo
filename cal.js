let string = " ";
let display = document.getElementsByClassName('.displayRow input')
let buttons = document.querySelectorAll(".btn")

let click = document.getElementById("click")

click.addEventListener('click', ()=>{
    // console.log(click);
    document.body.classList.toggle("secondCss");
})


Array.from(buttons).forEach((btn) => {
    
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.displayRow input').value = string;
        } else if (e.target.innerHTML == 'RESET') {
            string = " ";
            document.querySelector('.displayRow input').value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            document.querySelector('.displayRow input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('.displayRow input').value = string;
            console.log(string)
        }
    });
});

// const delbtn = document.querySelector(".delbtn")
// const resetbtn = document.querySelector(".resetbtn")
// const assignmentbtn = document.querySelector(".assignmentbtn")
// const topSection = document.querySelector(".topSection")
// const container = document.querySelector(".container")
// const buttonSection = document.querySelector(".buttonSection")
// const displayRow = document.querySelector(".displayRow")
// const bodyClr = document.querySelector("body")


// const allbtn = document.querySelectorAll(".btn")
// const btn = document.querySelector("lable")

//  function switchFunc () {
//     delbtn.classList.toggle("deltogglebtn")
//     resetbtn.classList.toggle("deltogglebtn")
//     assignmentbtn.classList.toggle("assignmenttogglebtn")
//     topSection.classList.toggle("topSectionToggle")
//     container.classList.toggle("containerToggle")
//     buttonSection.classList.toggle("buttonSectionToogle")
//     displayRow.classList.toggle("displayRowToggle")
//     bodyClr.classList.toggle("bodyToggle")

//     for(let x of allbtn){
//         x.classList.toggle("btntoggle")
//     }
//   }