const fieldsets = document.querySelectorAll("fieldset");
const submitButton = document.querySelector("input[type=submit]");

submitButton.style.display = "none";

let currentFieldset = 0;

// hide all fieldsets except the first one
for (let i = 1; i < fieldsets.length; i++) {
  fieldsets[i].style.display = "none";
}

// handle "next" button click
document.getElementById("next").addEventListener("click", function() {
  // check if current fieldset inputs are valid before moving to the next fieldset
  const inputs = fieldsets[currentFieldset].querySelectorAll("input");
  let isValid = true;
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
      input.reportValidity();
    }
  });

  if (isValid && currentFieldset < fieldsets.length - 1) {
    fieldsets[currentFieldset].style.display = "none";
    currentFieldset++;
    fieldsets[currentFieldset].style.display = "block";
  }
  
  // show submit button if on last fieldset
  if (currentFieldset === fieldsets.length - 1) {
  submitButton.style.display = "block";
  }
  });

// handle "back" button click
document.getElementById("back").addEventListener("click", function() {
  if (currentFieldset > 0) {
  fieldsets[currentFieldset].style.display = "none";
  currentFieldset--;
  fieldsets[currentFieldset].style.display = "block";
  }

  // hide submit button if not on last fieldset
  if (currentFieldset !== fieldsets.length - 1) {
  submitButton.style.display = "none";
  }
  });