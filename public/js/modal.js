
var modal = document.getElementById('confo1');
      var modalSmall = document.getElementById('confo');
      var closeBtn = document.getElementById('closeBtn');
      closeBtn.onclick = function () {
        modal.style.display = 'none';
      }
    
      window.onclick = function(event) {
      if (event.target == confo1) {
        modal.style.display = 'none';
      }
      }