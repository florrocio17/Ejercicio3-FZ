// const btn = document.querySelector('button');
 
// function random(number) {
//   return Math.floor(Math.random() * (number+1));
// }
 
// btn.onfocus = function() {
//   const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = rndCol;
// }

let form = document.querySelector('form');
let usuario = document.getElementById('usuario');
let clave = document.getElementById('clave');
let submit = document.getElementById('submit');
var str = "@";
var n = str.includes("@");
 

form.onsubmit = function(e) {
    if (usuario.value === '')  {
      e.preventDefault();
      alert('Complete el usuario');
    }
    else if (!usuario.value.includes('@')) {
        e.preventDefault();
      alert('Complete el usuario con @');
    }
    else if (clave.value === '') {
        e.preventDefault();
        alert('Complete la clave');
    }
  }
