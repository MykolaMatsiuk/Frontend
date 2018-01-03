var textarea = document.querySelector('textarea');
setInterval(function() {
  localStorage.setItem('text', textarea.value);
}, 200);
textarea.value = localStorage.getItem('text');
//console.log(localStorage.getItem('text'));

