'use strict'

const saveBtn = document.querySelector('#saveBtn');
const dataBase = new Object();

saveBtn.onclick = function(event) {
    event.preventDefault();

    dataBase[symbolsLeft.innerText] = text.value;

    console.log(dataBase);

};