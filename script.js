document.getElementById("modalBtn").addEventListener("click", function() {
    document.getElementById("myModal").style.display = "block";
    document.body.classList.add('fixed');
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("myModal").style.display = "none";
    document.body.classList.remove('fixed');
  });


  