const mysound = document.getElementById('sound');
const mysound1 = document.getElementById('sound1');
const mysound2 = document.getElementById('sound2');
const mysound3 = document.getElementById('sound3')
const amb = document.getElementById('button')
const mc = document.getElementById('button1');
const bomb = document.getElementById('button2');
const bus = document.getElementById('button3');
var soundPlayer = null;

function toggle() {
    var colorofbutton = document.querySelector("#button");
    if (document.getElementsByClassName("blueColor")[0]) {
        colorofbutton.classList.remove('blueColor');
        colorofbutton.classList.add('redColor');
        letplay = mysound.play();
    }
    else {
        letplay = mysound;
        letplay.pause();
        letplay.currentTime = 0;
        colorofbutton.classList.remove('redColor');
        colorofbutton.classList.add('blueColor');

    }
}
function toggle1() {
    var colorofbutton = document.querySelector("#button1");
    if (document.getElementsByClassName("blueColor1")[0]) {
        colorofbutton.classList.remove('blueColor1');
        colorofbutton.classList.add('redColor1');
        letplay = mysound1.play();
    }
    else {
        letplay = mysound1;
        letplay.pause();
        letplay.currentTime = 0;
        colorofbutton.classList.remove('redColor1');
        colorofbutton.classList.add('blueColor1');
    }
}

function toggle2() {
    var colorofbutton = document.querySelector("#button2");
    if (document.getElementsByClassName("blueColor2")[0]) {
        colorofbutton.classList.remove('blueColor2');
        colorofbutton.classList.add('redColor2');
        letplay = mysound2.play();
    }
    else {
        letplay = mysound2;
        letplay.pause();
        letplay.currentTime = 0;
        colorofbutton.classList.remove('redColor2');
        colorofbutton.classList.add('blueColor2');
    }
}

function toggle3() {
    var colorofbutton = document.querySelector("#button3");
    if (document.getElementsByClassName("blueColor3")[0]) {
        colorofbutton.classList.remove('blueColor3');
        colorofbutton.classList.add('redColor3');
        letplay = mysound3.play();
    }
    else {
        letplay = mysound3;
        letplay.pause();
        letplay.currentTime = 0;
        colorofbutton.classList.remove('redColor3');
        colorofbutton.classList.add('blueColor3');
    }
}

function toggle4() {
    var colorofbutton = document.querySelector("#button4");
    if (document.getElementsByClassName("blueColor4")[0]) {
        colorofbutton.classList.remove('blueColor4');
        colorofbutton.classList.add('redColor4');
    }
    else {
        colorofbutton.classList.remove('redColor4');
        colorofbutton.classList.add('blueColor4');
    }
}

function toggle5() {
    var colorofbutton = document.querySelector("#button5");
    if (document.getElementsByClassName("blueColor5")[0]) {
        colorofbutton.classList.remove('blueColor5');
        colorofbutton.classList.add('redColor5');
    }
    else {
        colorofbutton.classList.remove('redColor5');
        colorofbutton.classList.add('blueColor5');
    }
}

function toggle6() {
    var colorofbutton = document.querySelector("#button6");
    if (document.getElementsByClassName("blueColor6")[0]) {
        colorofbutton.classList.remove('blueColor6');
        colorofbutton.classList.add('redColor6');
    }
    else {
        colorofbutton.classList.remove('redColor6');
        colorofbutton.classList.add('blueColor6');
    }
}

function toggle7() {
    var colorofbutton = document.querySelector("#button7");
    if (document.getElementsByClassName("blueColor7")[0]) {
        colorofbutton.classList.remove('blueColor7');
        colorofbutton.classList.add('redColor7');
    }
    else {
        colorofbutton.classList.remove('redColor7');
        colorofbutton.classList.add('blueColor7');
    }
}


