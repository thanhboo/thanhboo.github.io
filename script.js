var scrollDistance = window.scrollY;

document.getElementById("modalBtn").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
  document.body.classList.add("modal-open");
});

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
    window.scrollTo(0, scrollDistance);
    document.body.classList.remove("modal-open");
  });
