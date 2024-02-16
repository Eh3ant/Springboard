1.
document.getElementById("container");

2.
document.querySelector('#container');

3.
document.querySelectorAll(".second")

4.
document.querySelector('ol .third')

5.
const hello = document.getElementById("container");
hello.innerText = "Hello"

6.
const div = document.querySelector('.footer')
div.classList.add = "main"

7.
const div = document.querySelector(".footer");
div.classList.remove("main");

8.
const newLi = document.createElement('li')

9.
newLi.textContent = "four"

10.
const ul = document.querySelector('ul')
ul.append(newLi)

11.
const liInOl = document.querySelectorAll('ol li')
for (let li of liInOl){
    li.style.backgroundColor = "red"
}

12.
const div = document.getElementsByClassName('footer')
div.remove()
