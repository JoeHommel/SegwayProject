function dropdownOnClick() {
    document.getElementById("DropdownID").classList.toggle("show");
    document.getElementById("DropdownID").classList.replace("hide", "show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = e => {
    if (!e.target.matches('.dropdown-btn')) {
        document.getElementById("myDropdownID").classList.replace("show", "hide");
    }
    if (e.target == modal) {
        modal.style.display = "none";
    }
}