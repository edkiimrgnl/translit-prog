'use strict'

const transBtn = document.querySelector('#transBtn');

let transGr = { 'а': 'a', 'А': 'A', 'б': 'b', 'Б': 'B', 'в': 'v', 'В': 'V', 'г': 'g', 'Г': 'G',
 'д': 'd','Д': 'D', 'е': 'e', 'Е': 'E', 'ё': 'yo', 'Ё': 'Yo', 'ж': 'zh', 'Ж': 'Zh', 
 'з': 'z', 'З': 'Z', 'и': 'i', 'И': 'I', 'й': 'y', 'Й': 'Y', 'к': 'k', 'К': 'K', 
 'л': 'l', 'Л': 'L', 'м': 'm', 'М': 'M',  'н': 'n', 'Н': 'N', 'о': 'o', 'О': 'O',
 'п': 'p', 'П': 'P',  'р': 'r', 'Р': 'R', 'с': 's', 'С': 'S', 'т': 't', 'Т': 'T',
 'у': 'u', 'У': 'U', 'ф': 'f', 'Ф': 'F', 'х': 'h', 'Х': 'H',  'ц': 'c', 'Ц': 'C',
 'ч': 'ch','Ч': 'Ch', 'ш': 'sh', 'Ш': 'Sh', 'щ': 'sch', 'Щ': 'Sch', 'ъ': '',
 'Ъ': '', 'ы': 'i', 'Ы': 'I', 'ь': "'", 'Ь': "'", 'э': 'e', 'Э': 'E','ю': 'u',
 'Ю': 'U','я': 'ya', 'Я': 'Ya', '«': '"', '»': '"', '–': '-', '—': '-', '№': '#', '`': "'" };

transBtn.onclick = function(event) {
    event.preventDefault();

    let transText = '';
    let space = ' ';
    let str = text.value;

    for (let i = 0; i < str.length; i++) {

        if (/[а-яёА-ЯЁ]/.test(str[i])) {

            transText += transGr[str[i]];
            text.value = transText;
            transBtn.innerText = 'транслит';

        } else if (/[a-zA-Z0-9]/.test(str[i])) {

            for (let key in transGr) {
                if (transGr[key] == str[i]) {
                    transText += key;
                    text.value = transText;
                }
            }
            
            transBtn.innerText = 'translit';

        } else {
            
            if (transText.slice(-1) !== space) transText += space;

        };
    };
};