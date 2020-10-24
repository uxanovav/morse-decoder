const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = '';
    for (let i = 0; i < expr.length; i++) {
        if (i % 10 == 0 && i != 0) {
            str += ' ';
        }
        if (expr[i] == '*' && expr[i + 9] == '*') {
            str += "*";
            i += 9;
            continue;
        } else if (expr[i] == '1' && expr[i + 1] == '1') {
            str += '-';
            i++;
            continue;
        } else if (expr[i] == '1' && expr[i + 1] == '0') {
            str += '.';
            i++;
            continue;
        } else if (expr[i] == '0') {
            str += '';
        }
    }
    let result = '';
    let arr = str.split(' ');
    for (let i = 0; i < arr.length; i++) {
        for (var key in MORSE_TABLE) {
            if (arr[i] == key) {
                result += MORSE_TABLE[key];
            }
        }
        if (arr[i] == "*") { 
            result += " "; 
        };
    }
    return result;
}

module.exports = {
    decode
}