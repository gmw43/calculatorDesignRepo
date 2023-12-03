let string = " ";
let display = document.getElementsByClassName('input')
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'RESET') {
            string = "0 ";
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});
