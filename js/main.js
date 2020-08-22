'use strict'

let text = document.querySelector('#textField');
const symbolsLeft = document.querySelector('#symbols');

text.onkeyup = function() {
    let str = text.value;
    let maxLength;
    let msgCount;
    let curLength = text.value.length;
    
    if (/[а-яёА-ЯЁ]/.test(str)) {

        if (curLength > 70) {
            maxLength = 67;
            msgCount = Math.ceil(curLength/maxLength);
            
            symbolsLeft.innerHTML = `Введено ${curLength} символов<br>
                                    Что в свою очередь равняется ${msgCount} сообщениям`;
        } else {
            symbolsLeft.innerHTML = `Введено ${curLength} символов<br>
                                Что в свою очередь равняется 1 сообщению.`;
        };

    } else {

        if (curLength > 160) {
            maxLength = 153;
            msgCount = Math.ceil(curLength/maxLength);
            
            symbolsLeft.innerHTML = `Введено ${curLength} символов<br>
                                    Что в свою очередь равняется ${msgCount} сообщениям`;
        } else {
            symbolsLeft.innerHTML = `Введено ${curLength} символов<br>
                                Что в свою очередь равняется 1 сообщению.`;
        };
        
    };
}