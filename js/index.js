/* Initial Sets */


/* Set width of navMenu and show button text */
function openNav(){
  var x = document.getElementsByClassName("buttText");

  for(var i = 0; i < x.length; i++){
    x[i].style.display = "block";
  }
      document.getElementById("navMenu").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("openMenu").style.display = "none";
      document.getElementById("settings").style.display = "block";
      document.getElementById("closeNav").style.display = "block";
    }

function closeNav(){
  var x = document.getElementsByClassName("buttText");

  for(var i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
      document.getElementById("navMenu").style.width = "60px";
      document.getElementById("main").style.marginLeft = "70px";
      document.getElementById("openMenu").style.display = "block";
      document.getElementById("settings").style.display = "none";
      document.getElementById("closeNav").style.display = "none";
    }

  /* modal get */
  var modal = document.getElementById("setModal");
  var btn = document.getElementById("settings");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function() {
    if(event.target == modal) {
      modal.style.display = "none";
    }
  }
