//  task 1
//  Use 'innerText' to change this content

const chagneContent = document.getElementById("task1");
// const chagneContent = document.querySelector('div p');
// console.log(test1);
console.log(chagneContent);
chagneContent.innerText = "Happy Coding !";

// const task1 = document.querySelector('#task1');
// const task1 = document.querySelector('p')
// console.log(task1);
// task1.innerText = 'Welcome world';

// const taskChangeContent = document.getElementsByTagName('div p')[0];
// // const taskChangeContent = document.querySelector('div > p');
// taskChangeContent.innerText = 'happy coding'
// console.log(taskChangeContent);

//  task 2
//  Use 'innerHTML' to add a submit button here

const addButton = document.getElementById("task2");
addButton.innerHTML = "<button type = submit>Submit</button>";

// const addButton2 = document.querySelector('p#task2');
// addButton2.innerHTML = `<button type = submit>Submit</button>`
// const taskButton = document.getElementById('task2');
// taskButton.innerHTML = `<button type=submit>Submit</button>` ;

// // task3
// //  Change the background color of this page to '#232323'
// const chagneBgColor = document.getElementsByTagName('p')[2]
// const chagneBgColor = document.getElementById('task3');
// chagneBgColor.style.backgroundColor = '#232323' ;
// chagneBgColor.style.color = 'white';
const chagneBg = document.body;
chagneBg.style.backgroundColor = "#232323";

// task 4
// //  Make all the elements that have class 'item' have a border:

const makeBorder = document.querySelectorAll(".item");
// console.log(makeBorder);
for (let i = 0; i < makeBorder.length; i++) {
  makeBorder[i].style.border = "2px solid green";
}

// for (let item of makeBorder) {
//     item.style.border = '2px solid yellow';
//     item.style.fontSize = '35px';
// }

// task 5
//  Change the href attribute of this link to 'https://www.springboard.com/'

const changeHref = document.querySelector("div a");

// changeHref.getAttribute('href');
console.log(changeHref.getAttribute("href"));

changeHref.setAttribute("href", "https://www.springboard.com/");
console.log(changeHref.getAttribute("href"));

//  task 6
//  Change my value to 'DOM Master'

const changeValue = document.querySelector("div input");

changeValue.value = "DOM Master";

//  task 7
// Use classList to add 'new-class' to this element

const addClass = document.getElementById("task7");
console.log(task7);
addClass.classList.add("new-class");

//  task 8
// Append a new button under this element

const appendNewButton = document.querySelector("div#task8");
//  create a new element button
const createButton = document.createElement("button");
createButton.style.fontSize = "35px";
createButton.textContent = "Click Me";

appendNewButton.append(createButton);

//  task 9
//  Remove this element

const removeElement = document.getElementById("task9");
console.log(task9);

removeElement.remove();
