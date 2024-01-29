var scrollDistance = window.scrollY;

document.getElementById("modalBtn").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
  scrollDistance = window.scrollY;
  console.log(scrollDistance * -1);
  document.body.style.top = `${scrollDistance * -1}px`;
//   document.body.style.right = `0`;
//   document.body.style.bottom = `0`;
//   document.body.style.left = `0`;
  document.body.classList.add("modal-open");
});

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    document.body.classList.remove("modal-open");
    window.scrollTo(0, scrollDistance);
    document.getElementById("myModal").style.display = "none";
  });
