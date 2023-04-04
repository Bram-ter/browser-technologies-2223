const fieldsets = document.querySelectorAll("fieldset");
const submitButton = document.querySelector("input[type=submit]");
const form = document.querySelector("form");

// Hide the submit button initially
submitButton.style.display = "none";

// Set the current fieldset to the first one
let currentFieldset = 0;

// Create "Back" and "Next" buttons with JavaScript and add them to the form
const btns = `
    <button id="back" type="button">Back</button>
    <button id="next" type="button">Next</button>
`;
form.insertAdjacentHTML('beforeend', btns);
const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");

// Create the ol element to show the form progress
const ol = document.createElement('ol');
form.insertBefore(ol, form.firstChild);

// Create a li element for each fieldset and add it to the ol element
fieldsets.forEach((fieldset, index) => {
  const li = document.createElement('li');
  ol.appendChild(li);
});

const firstLi = document.querySelector('ol li:first-child');
firstLi.classList.add('active');

// Hide all fieldsets except the first one
for (let i = 1; i < fieldsets.length; i++) {
  fieldsets[i].style.display = "none";
}

// Handle "next" button click
nextButton.addEventListener("click", function() {
  // check if the inputs in the current fieldset are valid before moving to the next fieldset
  const inputs = fieldsets[currentFieldset].querySelectorAll("input");
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
      input.reportValidity();
    }
  });

  // if inputs are valid and not on the last fieldset, show the next fieldset
  if (isValid && currentFieldset < fieldsets.length - 1) {
    fieldsets[currentFieldset].style.display = "none";
    currentFieldset++;
    fieldsets[currentFieldset].style.display = "block";
    updateFormProgress();
  }
  
  // show the submit button if on the last fieldset and hide the next button
  if (currentFieldset === fieldsets.length - 1) {
   submitButton.style.display = "block";
   nextButton.style.display = "none";
  }
});

// Handle "back" button click
backButton.addEventListener("click", function() {
  // if not on the first fieldset, go back to the previous fieldset
  if (currentFieldset > 0) {
    fieldsets[currentFieldset].style.display = "none";
    currentFieldset--;
    fieldsets[currentFieldset].style.display = "block";
    updateFormProgress();
  }

  // hide the submit button if not on the last fieldset
  if (currentFieldset !== fieldsets.length - 1) {
    submitButton.style.display = "none";
    nextButton.style.display = "block";
  }
});

// Update the form progress by adding an "active" class to the current step
function updateFormProgress() {
  const listItems = document.querySelectorAll('ol li');
  listItems.forEach((li, index) => {
    if (index === currentFieldset) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  });
}