let content = document.getElementById('ppcon');
let c1 = document.getElementById('card1');
let c2 = document.getElementById('card2');
let c3 = document.getElementById('card3');
let c4 = document.getElementById('card4');
let c5 = document.getElementById('card5');
let c6 = document.getElementById('card6');
let hh1 = document.getElementById('hcn1');
let hh2 = document.getElementById('hcn2');
let hh3 = document.getElementById('hcn3');
let hh4 = document.getElementById('hcn4');
let hh5 = document.getElementById('hcn5');
let hh6 = document.getElementById('hcn6');
let conheader = document.getElementById('cnhid')
let hdd1 = document.getElementById('hd1')
let hdd2 = document.getElementById('hd2')
let hdd3 = document.getElementById('hd3')
let hdd4 = document.getElementById('hd4')
let sp1 = document.getElementById('l1')
let sp2 = document.getElementById('l2')
let sp3 = document.getElementById('l3')
let sp4 = document.getElementById('l4')
let nvv = document.getElementById('navv')

function cd1(){
    content.classList.toggle('factive')
    conheader.textContent = hh1.textContent+' Airtel Tigo'
    content.focus()
}
function cd2(){
    content.classList.toggle('factive')
    conheader.textContent = hh2.textContent+' Airtel Tigo'
    content.focus()
}
function cd3(){
    content.classList.toggle('factive')
    conheader.textContent = hh3.textContent+' Airtel Tigo'
    content.focus()
}
function cd4(){
    content.classList.toggle('factive')
    conheader.textContent = hh4.textContent+' Airtel Tigo'
    content.focus()
}
function cd5(){
    content.classList.toggle('factive')
    conheader.textContent = hh5.textContent+' Airtel Tigo'
    content.focus()
}
function cd6(){
    content.classList.toggle('factive')
    conheader.textContent = hh6.textContent+' Airtel Tigo'
    content.focus()
}
function cls(){
    content.classList.toggle('factive')
}



/*********************************************/
function hddd1(){
    hdd1.classList.toggle("hdactive")
    hdd2.classList.remove("hdactive")
    hdd3.classList.remove("hdactive")
    hdd4.classList.remove("hdactive")

    sp1.classList.toggle("rt")
    sp2.classList.remove("rt")
    sp3.classList.remove("rt")
    sp4.classList.remove("rt")
}
function hddd2(){
    hdd1.classList.remove("hdactive")
    hdd2.classList.toggle("hdactive")
    hdd3.classList.remove("hdactive")
    hdd4.classList.remove("hdactive")

    sp1.classList.remove("rt")
    sp2.classList.toggle("rt")
    sp3.classList.remove("rt")
    sp4.classList.remove("rt")
}
function hddd3(){
    hdd1.classList.remove("hdactive")
    hdd2.classList.remove("hdactive")
    hdd3.classList.toggle("hdactive")
    hdd4.classList.remove("hdactive")

    sp1.classList.remove("rt")
    sp2.classList.remove("rt")
    sp3.classList.toggle("rt")
    sp4.classList.remove("rt")
}
function hddd4(){
    hdd1.classList.remove("hdactive")
    hdd2.classList.remove("hdactive")
    hdd3.classList.remove("hdactive")
    hdd4.classList.toggle("hdactive")

    sp1.classList.remove("rt")
    sp2.classList.remove("rt")
    sp3.classList.remove("rt")
    sp4.classList.toggle("rt")
}




function navvv(){
    nvv.classList.toggle('mnvact')
}
