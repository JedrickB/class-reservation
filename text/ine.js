function toggleDropdown() {
    var dropdown = document.getElementById("scheduleDropdown");
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  }

  function selectDay(day) {
    document.querySelector(".button").textContent = day;
    document.getElementById("scheduleDropdown").style.display = "none";
  }