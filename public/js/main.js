window.addEventListener("load", function() {
    const fieldsets = document.querySelectorAll("fieldset");
    let currentFieldset = 0;

    // hide all fieldsets except the first one
    for (let i = 1; i < fieldsets.length; i++) {
      fieldsets[i].style.display = "none";
    }

    // handle "next" button click
    document.getElementById("next").addEventListener("click", function() {
      if (currentFieldset < fieldsets.length - 1) {
        fieldsets[currentFieldset].style.display = "none";
        currentFieldset++;
        fieldsets[currentFieldset].style.display = "block";
      }
    });

    // handle "back" button click
    document.getElementById("back").addEventListener("click", function() {
      if (currentFieldset > 0) {
        fieldsets[currentFieldset].style.display = "none";
        currentFieldset--;
        fieldsets[currentFieldset].style.display = "block";
      }
    });
  });