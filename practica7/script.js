document.getElementById('attackButton').addEventListener('click', function() {
  document.querySelector('.sword').style.transform = 'rotate(-45deg)';
  setTimeout(function() {
    document.querySelector('.sword').style.transform = 'rotate(0deg)';
  }, 500);
});