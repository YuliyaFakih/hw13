// задание 1

let name = prompt('Ваше имя?');
    age = +prompt('Ваш возраст?');
    city = prompt('В каком городе вы живёте?');
    phone = prompt('Ваш телефон?');
    email = prompt('Ваш емейл?');
    company = prompt('Ваша компания?');
document.write("Меня зовут " + name + ". Мне " + age +" лет. Я проживаю в городе " + city + " и работаю в компании " + company + ". Мои контактные данные: " + phone + "," + email + ". ");

// задание 2

let year = 2021 - age;
document.write(name + " родился в " + year + " году.")

// задание 3

let str = prompt ('Введите шестизначное число');

    if ((+str[0] + +str[1] + +str[2]) == (+str[3] + +str[4] + +str[5])) {
        console.log ('да');
    } else {
        console.log ('нет');
    }

    
// задание 4

let a = 3;

if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// задание 5

let a5 = 10;
    b5 = 2;

console.log(a5 + b5);
if ((a5 + b5) > 1) { 
    console.log((a5 + b5)*(a5 + b5));
}
console.log(a5 - b5);
console.log(a5 * b5);
console.log(a5 / b5);

// задание 6
if (a5 > 2 && a5 < 11 || b5 >= 6 && b5 < 14) {
    console.log ('Верно');
} else {
    console.log('Неверно');
}

// задание 7

let n = 55;

if (n <=15) {
    console.log('1ая четверть часа');
} else if (n <=30) {
    console.log('2ая четверть часа');
} else if (n <=45) {
    console.log('3ая четверть часа');
} else if (n <=59) {
    console.log('4ая четверть часа');
}

// задание 8

let day = 2;

if (day <=10) {
    console.log('1ая декада');
} else if (day <=20) {
    console.log('2ая декада');
} else if (day <=31) {
    console.log('3ая декада');
}

// задание 9

let day9 = prompt('введите день(число)');
    year9 = 365;
    month9 = 31;
    week9 = 7;
    hour9 = 1 / 24;
    minute9 = hour9 / 60;
    second9 = minute9 / 60;
console.log(day9 / year9);
console.log(day9 / month9);
console.log(day9 / week9);
console.log(day9 / hour9);
console.log(day9 / minute9);
console.log(day9 / second9);

if(day9 < week9) {
    console.log('Меньше недели');
} else if (day9 < month9){
    console.log('Меньше месяца');
} else if (day9 < year9){
    console.log('Меньше года');
}


// задание 10

if(day >= 1 && day <= 30) {
    console.log('январь');
} else if(day >= 31 && day <= 60) {
    console.log('февраль');
} else if(day >= 61 && day <= 90) {
    console.log('март');
} else if(day >= 91 && day <= 120) {
    console.log('апрель');
} else if(day >= 121 && day <= 150) {
    console.log('май');
} else if(day >= 151 && day <= 180) {
    console.log('июнь');
} else if(day >= 181 && day <= 210) {
    console.log('июль');
} else if(day >= 211 && day <= 240) {
    console.log('август');
} else if(day >= 241 && day <= 270) {
    console.log('сентябрь');
} else if(day >= 271 && day <= 300) {
    console.log('октябрь');
} else if(day >= 301 && day <= 330) {
    console.log('ноябрь');
} else if(day >= 331 && day <= 360) {
    console.log('декабрь');
}

let month = Math.floor (day / 30);
switch (month) {
    case 0: 
    case 1:
    case 2:
    case 12 :
        console.log('Зима');
    break;
    case 3: 
    case 4:
    case 5:
        console.log('Весна');
    break;
    case 6:
    case 7:
    case 8: 
        console.log('Лето');
    break;
    case 9: 
    case 10:
    case 11:
        console.log('Осень');
    break;
}
