// HW 1
    // 1.1
const a1 = 4;
const b1 = 3;
console.log("Сумма: " + (a1 + b1) + '. ' + "Произведение: " + (a1 * b1));
    // 1.2
const x = 'abcd';
const y = 'efg';
const sum = x + y;
console.log(sum.length);
    // 1.3
const num = prompt("Введите трехзначное число: ");
const hundreads =  Math.floor(num / 100);
const dozens =  Math.floor((num - hundreads * 100) / 10);
const units = num - hundreads * 100 - dozens * 10;
console.log(hundreads + dozens + units);

// HW 2
    // 2.1
const a2 = 6;
const b2 = 8;
if(a2 > b2) {
    console.log(a2);
} else {
    console.log(b2);
}
    // 2.2
const month = +prompt("Enter a number from 1 to 12: ");
if(month === 1) {
    console.log("Январь");
} else if(month === 2) {
    console.log("Февраль");
}  else if(month === 3) {
    console.log("Март");  
}  else if(month === 4) {
    console.log("Апрель"); 
}  else if(month === 5) {
    console.log("Май");
}  else if(month === 6) {
    console.log("Июнь");
}  else if(month === 7) {
    console.log("Июль");
}  else if(month === 8) {
    console.log("Август");
}  else if(month === 9) {
    console.log("Сентябрь");
}  else if(month === 10) {
    console.log("Октябрь");
}  else if(month === 11) {
    console.log("Ноябрь");
}  else if(month === 12) {
    console.log("Декабрь");
}
    // 2.3 
const circle = 24;
const square = 36;
const diameterOfCircle = 2 * Math.sqrt(24) / 3.1415;
const storonaOfSquare = Math.sqrt(36);
if(diameterOfCircle <= storonaOfSquare) {
    console.log("Круг поместится в квадрат");
} else {
    console.log("Круг не поместится в квадрат");
}

// HW 3
    // 3.1
let sum3 = 0;
    for(let i = 50; i <= 100; i++) {
    sum3 = sum3 + i;
}
console.log(sum3);
    // 3.2
for(let x = 1; x <= 9; x++) {
    console.log('7' + ' ' + 'x' + ' ' + x + ' ' + '=' + ' ' + 7 * x);
}
    // 3.3
const numberN = +prompt("Enter an N number: ");
let count = 0;
let summ = 0;
for(let y = 1; y <= numberN; y++) {
    if(y % 2 != 0) {
        count += 1;
        summ += y;
   }
}
const itog = summ / count;
console.log(itog);

// HW 4
let user = {
    name : 'John'
}
    // 4.1
let johnAge = +prompt("Enter a number: ");
user.age = johnAge;
    // 4.2
let admin = Object.assign(user);
admin.role = 'admin';
    // 4.3
const name = admin.name;
const age = admin.age;
const role = admin.role;

// HW 5
let arr = [1, 5, 6, 7, 3, 9, 15, 8, 32, 78];
    // 5.1
console.log(arr.reduce((sum, current) => sum + current, 0));
    // 5.2
let newArr = arr.map((item) => item * 2);
    // 5.3
let maxOfArr = Math.max.apply(null, arr);
console.log(maxOfArr);
let minOfArr = Math.min.apply(null, arr);
console.log(minOfArr);

// HW 6
    // 6.1
function diff(a, b) {
    if(a > b) {
        return a - b;
    } else {
        return b - a;
    }
}
    // 6.2
function isWord(str) {
    const words = str.split(' ');
    if(words.length === 1) {
        return true;
    } else {
        return false;
    }
}
    // 6.3
function pow(a, x) {
    const aInx = Math.pow(a, x);
    return aInx;
}

// HW 7
    // 7.1

    // 7.2

    // 7.3

// HW 8
    // 8.1
let userData = prompt("Введите дату в формате ДД.ММ.ГГГГ: ");
let userDataArr = userData.split(".");
userDataArr.reverse();
let day = new Date(userDataArr.join("-"));
console.log(day.getDay());
    // 8.2
let today = new Date();
let todayHours = +today.getHours();
let minInHours = todayHours * 60;
let todayMin = +today.getMinutes();
const todayAllMin = minInHours + todayMin;
console.log("С начала сегодняшенего дня прошло: " + todayAllMin + " минут.");
    // 8.3
let birthDate_1 = "14.10.2003";
let birthDate_2 = "10.08.2003";
let birthDate_1_Arr = birthDate_1.split(".");
birthDate_1_Arr.reverse();
let birthDate_1_New = birthDate_1_Arr.join(".");
let birthDate_2_Arr = birthDate_2.split(".");
birthDate_2_Arr.reverse();
let birthDate_2_New = birthDate_2_Arr.join(".");
if(birthDate_1_New > birthDate_2_New) {
    console.log("Пользователь с ДР 14.10.2003 младше");
} else {
    console.log("Пользователь с ДР 10.08.2003 младше"); 
}

// HW 9
    // 9.1
const a = 5;
const b = 6;
const c = 7;
if(c*c === a * a + b * b) {
    console.log("Этот треугольник прямоугольный.")
} else {
    console.log("Этот треугольник не прямоугольный.")
}
    // 9.2
const R = +prompt("Введите число R: ");
const lengthWithR = 2 * 3.14 * R;
console.log("Длина окружности с радиусом " + R + " равна " + lengthWithR);
const areaWithR = 3.14 * R * R;
console.log("Площадь окружности с радиусом " + R + " равна " + areaWithR);
    // 9.3 !!!!!!!???????????????
const numA = +prompt('Enter "a" number: ');
const numB = +prompt('Enter "b" number: ');
const numC = +prompt('Enter "c" number: ');
let quadraticEquation = (numA, numB , numC) => {
   if(numA === 0) {
        console.log("Не квадаратное уравнение.");
    } else if (numA != 0 && numB === 0 && numC === 0) {
        console.log("x = " + 0);
    } else if (numA != 0 && numB === 0 && numC != 0) {
        if(((-numC)/2) > 0) {
            console.log("x1 = " + (Math.sqrt((-numC)/numA)) + "x2 = " + (-Math.sqrt((-numC)/numA)));
        } else {
            console.log("Нет решений.");
        }
    } else if (numA != 0 && numB != 0 && numC === 0) {
        console.log("x1 = " + 0 + "x2 = " + ((-numB)/numA));
    } else if (numA != 0 && numB != 0 && numC != 0) {
        if(Math.sqrt(numB*numB-4*numA*numC) > 0) {
            console.log("x1 = " + (-numB + Math.sqrt(numB*numB-4*numA*numC))/(2*numA) + "x2 = " + (-numB - Math.sqrt(numB*numB-4*numA*numC))/(2*numA));
        } else if ((Math.sqrt(numB*numB-4*numA*numC) === 0)) {
            console.log("x = " + ((-numB)/(2*numA)))
        } else {
            console.log("Нет решений.")
        }
    }
}
quadraticEquation();
// все время выдет "нет решений"
// ax2 + bx + c === 0
// (-b + Math.sqrt(b*b-4*a*c))/(2*a)

// HW 10
    // 10.1+2+3 Как-то оно выдает иногда вметсо номера телефона дату. Хз почему. Перепроверить потом
const userString = prompt("Введите дату, элеткронную почту, номер телефона или что еще пожелаете: ");
const regexpDate = /\d{1,2}[\.\/]\d{2}[\.\/]\d{2,4}/;
const regexpEmail = /[\da-z\.]+@[\da-z]+\.[a-z]+/;
const regexpTelephone = /[7,8][0-9]{10}/;
if (regexpDate.test(userString)) {
    console.log('Введенная строка является датой');
} else if (regexpEmail.test(userString)) {
    console.log('Введенная строка является почтой');
} else if (regexpTelephone.test(userString)) {
    console.log('Введенная строка является номером телефона');
} else {
    console.log('Введенная строка не является ни датой, ни почтой, ни телефоном');
}