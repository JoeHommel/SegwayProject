function buildModal() {
  var modal = document.getElementById('myModal');
  var openModalBtn = document.getElementById("openModal");
  var close = document.getElementsByClassName("close")[0];

  openModalBtn.onclick = () => {
    modal.style.display = "block";
  }

  close.onclick = () => {
    modal.style.display = "none";
  }

  window.onclick = e => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
}