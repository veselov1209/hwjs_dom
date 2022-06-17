//1. Создайте 10 параграфов и первым трем дайте класс Выделенный текст, который выделяет текст например фоном.
let div = document.createElement('div');
document.querySelector('body').prepend(div);
document.querySelector('div').className='container';
let pBoldText = document.createElement('p');
let pBoldText1 = document.createElement('p');
let pBoldText2 = document.createElement('p');
pBoldText.className = 'boldText';
pBoldText.innerText = 'Hello World';
pBoldText1.className = 'boldText';
pBoldText1.innerText = 'Hello World';
pBoldText2.className = 'boldText';
pBoldText2.innerText = 'Hello World';
let container = document.querySelector('.container');
container.appendChild(pBoldText);
container.appendChild(pBoldText1);
container.appendChild(pBoldText2);
for (let i = 0; i < 7; i++){
    let p = document.createElement('p');
    p.innerText = 'Hello World';
    container.append(p);
}let arrayBackgrondP = document.querySelectorAll('.boldText');
arrayBackgrondP.forEach (el => el.style.backgroundColor = 'tomato');

//2. Создайте список. В каждый элемент списка напишите текст свой, например дни недели или цвета радуги.
//2* выделите каждый элемент списка случайным цветом поменяв ему цвет текста или фон
let ul = document.createElement('ul');
container.append(ul);
let arr1 =['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Вескресенье'];
let arr2 =['red', 'orange', 'yellow', 'green', '#F0F8FF', 'blue','#8b00ff'];

for(i = 0; i < 7; i++){
let li = document.createElement('li');
li.innerText = arr1[i];
li.style.backgroundColor = arr2[i];
document.querySelector('ul').append(li);
}

