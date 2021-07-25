var count = 0, count2 = 0, count3 = 0;
var countElement = document.querySelector("#counter");
var countElement2 = document.querySelector("#counter2");
var countElement3 = document.querySelector("#counter3");

function addLike() {
    count ++;
    countElement.innerText = count + " like(s)";
}

function addLike2() {
    count2 ++;
    countElement2.innerText = count2 + " like(s)";
}

function addLike3() {
    count3 ++;
    countElement3.innerText = count3 + " like(s)";
}