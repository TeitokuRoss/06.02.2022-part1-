"use strict";

const bodyElement = document.body;
console.dir(bodyElement);

//события
const clickMeBtn = document.querySelector(".click-me-btn");
//обработчик события -- функция, которая принимает объект события
clickMeBtn.onclick = (e) => {
	alert("click me again!");
};

clickMeBtn.addEventListener("click", (e) => {
	console.log("e:>>", e);
});

/*атрибуты */
//1
const pEL = document.querySelector("#first");
console.dir(pEL);

pEL.title = "I am p";
pEL.style.color = "red";
pEL.style.fontSize = "24px";
pEL.style.backgroundColor = "blue";
//2
//используем только строки
const pEL2 = document.querySelectorAll(".my-class")[1];
pEL2.setAttribute("title", "I am 2 p");
//pEL2.setattribute('hidden', 'hidden');
console.log('pEL2.getAttribute("title") :>>', pEL2.getAttribute("title"));
/**<p class="mouseover">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores modi similique accusantium magni praesentium, ex ullam alias atque possimus dolore.</p>

const pHover = document.querySelector('.mouseover');
pHover.addEventListener('mouseover', function(){
    this.style.fontSize = '50px';
    this.style.fontWeight = 'extra-bold';
})
pHover.addEventListener('mouseleave' , function(){
    this.style.fontSize = '14px'
}) */
//добавить абзацы
// при наведение на него изменить цвет фона и размер шрифта

/***классы */

//доступ к атрибуту class через свойство className
console.log("pHover.className :>>", pHover.className);

pHover.classList.add("green-text");
pHover.onclick;
//изменять элементы / обавлять /  удалять / осуществлять навигацию
