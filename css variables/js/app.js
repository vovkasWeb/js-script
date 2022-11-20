console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--box-bg'));
console.log(window.getComputedStyle(document.body).getPropertyValue('--box-bg'));
console.log(document.body.style.getPropertyValue('--box-bg'));

document.body.style.setProperty('--box-bg','#ff4');
console.log(document.body.style.getPropertyValue('--box-bg'));

document.querySelector('.box').style.setProperty('--box-bg','green');