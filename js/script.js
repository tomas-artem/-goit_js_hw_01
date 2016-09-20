var i = 0, p = 0, n = 0, answer = 1, true_answer, power;

function powerNumber(n, p) {
    'use strict';
    while (i < p) {
        i = i + 1;
        answer = answer * n;
    }
    return answer;
}

n = prompt('Какое число Вы хотите возвести в степень?');

power = prompt('А в какую степень хотите его возвести? Работаем только с целыми :)');

power = Math.floor(power);
/* округление введеного числа до меньшего целого */

true_answer = Math.pow(n, power);
/* расчёт правильного ответа встроенной функцией */

if (power < 0) {p = Math.abs(power); } else {p = power; }
/* передача в функцию только положительного значения степени */
    
answer = powerNumber(n, p);

if (power < 0) {answer = 1 / answer; }
/* возвращение из функции зачения 1/answer, если изначально значение степени было отрицательное */

document.write('Число ' + '<b \/>' + n + '</b \/>' + ' мы возводили в степень ' + '<b \/>' + power + '</b \/>' + '<br \/>');

document.write('Результат, вычисленный нашей функцией: ' + answer + '<br \/>');

document.write('Результат, вычисленный встроенной функцией Math.pow: ' + true_answer + '<br \/>');

console.log(answer);