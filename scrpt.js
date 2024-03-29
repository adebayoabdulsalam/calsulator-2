let listbutton = document.querySelectorAll('.buttons button');
let lastReturn = document.querySelector('.screen .list');
let newReturn = document.querySelector('.screen .new');

let fristNumber = null;
let newNumber = null;
let calculator = '+';

function reloadScreen(){
    lastReturn.innerText = fristNumber ? fristNumber + calculator : '';
    newReturn.innerText = newNumber ? newNumber : '';
}
reloadScreen();
listButton.forEach(button => {
    button.addEventListener('click', ()=> {
        let value = button.innerText;
        console.log(value)
    })
})
