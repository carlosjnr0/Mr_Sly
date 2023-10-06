let content = document.getElementById('ppcon');
let c1 = document.getElementById('card1');
let c2 = document.getElementById('card2');
let c3 = document.getElementById('card3');
let c4 = document.getElementById('card4');
let c5 = document.getElementById('card5');
let c6 = document.getElementById('card6');

function cd1(){
    content.classList.toggle('factive')
    content.focus()
}
content.addEventListener('blur', () => {
    content.style.display = 'none';
  });
    
