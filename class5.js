/*
Взяти файл template_2.html та працювати в ньому
1) Напишіть код, який :
a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
b) робить шириниу елементу ul 400px
c) робить шириниу всіх елементів з класом linkList шириною 50%
d) отримує текст який зберігається в елементі з класом listElement2
e) отримує всі елементи li та змінює ім колір фону на сірий
f) отримує всі елементи 'a' та додає їм клас anchor
g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
l) отримати елементи p та змінити їм padding на 20px
m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)*/

const mainHeaderElement = document.getElementById('main_header');
mainHeaderElement.style.color = 'red';
mainHeaderElement.innerText = 'June-2021';

const ulElement = document.getElementsByTagName('ul')[0];
ulElement.style.width = '400px';

const linkList = document.getElementsByClassName('linkList');
for (const link of linkList) {
    link.style.width = '50%';
}

const listElement2 = document.getElementsByClassName('listElement2')[0];
const listElement2Text = listElement2.innerText;
console.log('listElement2Text', listElement2Text);


const liElements = document.getElementsByTagName('li');
for (const liElement of liElements) {
    liElement.style.background = 'gray';

}

const aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
    aElement.classList.add('anchor');
    if (aElement.innerText === 'link3'){
        aElement.style.fontSize = '40px';
    }
    aElement.classList.add(`element_${aElement.innerText}`);
}

/*
i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()*/
const subHeaders = document.getElementsByClassName('sub-header');
const bgColor = prompt('Enter bg color','red');
for (const subHeader of subHeaders) {
    subHeader.style.background = bgColor;
    if (subHeader.innerText === 'content 2 segment') {
        const color = prompt('Enter  color','green');
        subHeader.style.color = color;
    }
}

/*
k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
l) отримати елементи p та змінити їм padding на 20px
m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)*/
const content1Element = document.getElementsByClassName('content_1');
const randomText = prompt('Enter some text','Hello world');
content1Element.innerText = randomText;

const pElements = document.getElementsByTagName('p');
for (const pElement of pElements) {
    pElement.style.padding = '20px';
}
const text2Elements = document.getElementsByClassName('text2');
text2Elements.innerText = 'June-2021';