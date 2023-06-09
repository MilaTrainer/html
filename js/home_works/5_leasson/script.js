'use strict';
// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра
function sum(a, b) {
    if (a === undefined || b === undefined){
        return `введите два параметра`;
    }
    else if  ((typeof a !=='number') || (typeof b!=='number')){ 
         return `введенные данные не являются числами`;}
    else {
        return a + b; 
    }
} 
console.log (sum(4, 5 ));
console.log (sum(  3));
console.log (sum('d', 4));  
console.log (sum(1, [2])); //не получается сделать 
console.log (sum(1)); 
console.log (sum());
// Задание 2
// сделала
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"
function square(a) {
if (!(a)){
    console.error('Функция "square" не может быть вызвана без аргумента');
}
else (
    console.log(a * a))
}

square(10); // 100
square(0);// Функция "square" не может быть вызвана без аргумента
square();//Функция "square" не может быть вызвана без аргумента
square(false);


// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента



// Задание 3
// сделала
// отправляю 2 варианта, один с промт, второй как вы говорили на уроке(без)


// Создать функцию "угадай число".
//  Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

    let number = +prompt('Введите число');
    function guessNumber() {
        if (number >= 0 && number <= 10){
        number =  getRandomInteger(0, 10);
        return `Вы выиграли`}
        else {
            return `Вы не угадали, ваше число - ${number} ,  а выпало число - ${getRandomInteger(0, 10)}`}
        }
console.log (guessNumber(number));



function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
    function guessNumber() {
        if (getRandomInteger() >= 0 && getRandomInteger() <= 10){
        getRandomInteger(0, 10);
        return `Вы выиграли`}
        else {
            return `Вы не угадали, ваше число - ${getRandomInteger(0,10)} ,  а выпало число - ${getRandomInteger(0,10)}`}
        }
console.log (guessNumber(getRandomInteger()));


// Задание 4

 // если тут будет другая функия, как заптсать ее в стрелочный ситаксис, или внутри map стоит только внутреняя одна фенкция это компирование
// я не смогла в стрелочном синтаксисе добавить copyArr

// сделала
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

const arr = [1, 5, 6, 7, 8, 9, 10, 11]
const arr1 = arr.map(function copyArr(item) {

    return item;
} )
console.log(arr1);
console.log(arr);

// стрелочный синтаксис 
const arr2 = arr.map((item) => item);
console.log(arr2);
console.log(arr);


// Задание 5
//решила

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.

// Проверить работу функции можно на объекте:
const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
  }
  console.log(objectWithNumbers);
//   function sumObjectValues(item)

function sumObjectValues(objectWithNumbers){
    let sum = 0;
for (let key in objectWithNumbers){
   if (typeof objectWithNumbers[key] == 'number'){
    sum+= objectWithNumbers[key];
}
}
return sum;
}
console.log(sumObjectValues(objectWithNumbers));


// Задание 6
// с урока (сама не решала, не смогла)

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

function ucFirst(str){
//    let firstLetter = str[0].toUpperCase();
//     let lastLetter = str.slice(1)
//     return firstLetter + lastLetter
    return str[0].toUpperCase() + str.slice(1)
};

console.log(ucFirst('hello'));



// Задание 7
// сделала

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str){
    let cloneStr = str.toLowerCase(); 
if (cloneStr  === ('badWord'.toLowerCase()) || cloneStr === ('XXX'.toLowerCase())){
    return true}
else{
    return false}
}
console.log(checkSpam('badWord'));
console.log(checkSpam('XXX'));
// Задание 8
// легкое рещение
// Написать функцию, которой на вход подается строка, 
// на выход она дает символы наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп»
// Обратите внимание: метод reverse существует только у массивов.



// Задание 9

// легкое рещение , гланое решать по пунктам

// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 



// let stations = [

// 'MAN675847583748sjt567654;Manchester Piccadilly',

// 'GNF576746573fhdg4737dh4;Greenfield',

// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

// 'SYB4f65hf75f736463;Stalybridge',

// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

// ];




// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

// MAN: Manchester Piccadilly

// Вывести эти строки в консоль

// ПОДСКАЗКА:

// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк



// Задание 10
// могут возникнуть трудности 
// нужно  применять метод , который применяет

// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.

// Пример:

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"



// ПОДСКАЗКА

// - создать новый массив

// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.