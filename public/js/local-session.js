const nameInput = document.getElementById("name");
const studentNumberInput = document.getElementById("studentnumber");
const emailInput = document.getElementById("email");
const nextButton = document.getElementById("next");

// Add event listeners to input fields to update local storage
nameInput.addEventListener("input", () => {
  localStorage.setItem("name", nameInput.value);
});

studentNumberInput.addEventListener("input", () => {
  localStorage.setItem("studentNumber", studentNumberInput.value);
});

emailInput.addEventListener("input", () => {
  localStorage.setItem("email", emailInput.value);
});

// Check if values are stored in local storage
const storedName = localStorage.getItem("name");
const storedStudentNumber = localStorage.getItem("studentNumber");
const storedEmail = localStorage.getItem("email");

if (storedName && storedStudentNumber && storedEmail) {
  // Set input field values to stored values
  nameInput.value = storedName;
  studentNumberInput.value = storedStudentNumber;
  emailInput.value = storedEmail;
}

document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
  const value = localStorage.getItem(radio.name);
  if (value) {
    radio.checked = (radio.value === value);
  }
  radio.addEventListener('change', function() {
    localStorage.setItem(this.name, this.value);
  });
});

window.onload = function() {
  // Store selected radio button values in local storage
  document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      localStorage.setItem(this.name, this.value);
    });
  });

  // Retrieve stored radio button values from local storage
  document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    const value = localStorage.getItem(radio.name);
    if (value) {
      radio.checked = (radio.value === value);
    }
  });
};