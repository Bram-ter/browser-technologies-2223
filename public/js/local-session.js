// const form = document.querySelector('form');
// const backButton = form.querySelector('#back');
// const nextButton = form.querySelector('#next');
// const submitButton = form.querySelector('input[type="submit"]');
// const fieldsets = form.querySelectorAll('fieldset');
// const formData = [];

// // Initialize the formData array with empty objects
// for (let i = 0; i < fieldsets.length; i++) {
//     formData.push({});
// }

// // Retrieve the saved form data from local storage and update the inputs
// function loadFormData() {
//     // Retrieve the saved form data from local storage
//     const savedformData = JSON.parse(localStorage.getItem('formData'));

//     // If there is saved form data, update the inputs with the saved values
//     if (savedformData) {
//       for (let i = 0; i < fieldsets.length; i++) {
//         // Get the saved form data for this fieldset
//         const savedFormData = savedformData[i];

//         // Get all the inputs in this fieldset
//         const inputs = fieldsets[i].querySelectorAll('input');
//         for (const input of inputs) {

//           // Check if the saved form data has a property with the same name as the input  
//           if (savedFormData.hasOwnProperty(input.name)) {
//             input.value = savedFormData[input.name];
//           }
//         }
//       }
//       // Replace the current form data array with the saved form data array
//       formData.splice(0, formData.length, ...savedformData);
//     }
//   }

// // Get the index of the currently visible fieldset
// function getVisibleFieldsetIndex() {
//     for (let i = 0; i < fieldsets.length; i++) {
//         if (!fieldsets[i].hasAttribute('hidden')) {
//             return i;
//         }
//     }
// }

// function saveFormData() {
//     // Get the index of the visible fieldset
//     const visibleIndex = getVisibleFieldsetIndex();

//     // Get all the input elements in the visible fieldset
//     const visibleInputs = fieldsets[visibleIndex].querySelectorAll('input');

//     // Get the form data object for the visible fieldset
//     const visibleFormData = formData[visibleIndex];

//     // Check if the form is valid before saving the data
//     if (!form.checkValidity()) {
//         return;
//     }
  
//     // Save the form data to the appropriate formData object in the array
//     for (const input of visibleInputs) {
//       visibleFormData[input.name] = input.value;
//     }
  
//     // Save the formData array to local storage
//     localStorage.setItem('formData', JSON.stringify(formData));
// }

// backButton.addEventListener('click', function() {
//   // Get the index of the currently visible fieldset
//   const visibleIndex = getVisibleFieldsetIndex();

//   // If the currently visible fieldset is not the first one
//   if (visibleIndex > 0) {
//     // Hide the currently visible fieldset
//     fieldsets[visibleIndex].setAttribute('hidden', '');

//     // Show the previous fieldset
//     fieldsets[visibleIndex - 1].removeAttribute('hidden');
//   }
// });

// nextButton.addEventListener('click', function() {
//     // Get the index of the currently visible fieldset
//     const visibleIndex = getVisibleFieldsetIndex();

//     // Get the index of the last fieldset
//     const lastVisibleIndex = fieldsets.length - 1;

//     // If the currently visible fieldset is not the last one
//     if (visibleIndex < lastVisibleIndex) {
//         // Save the form data
//         saveFormData();
//         // Hide the currently visible fieldset
//         fieldsets[visibleIndex].setAttribute('hidden', '');
//         // Hide the currently visible fieldset
//         fieldsets[visibleIndex + 1].removeAttribute('hidden');
//     }
//     // If the currently visible fieldset is the last one
//     else if (visibleIndex === lastVisibleIndex) {
//         // Save the form data
//         // saveFormData();
//         localStorage.removeItem('formDatas');
//     }
// });

// // Save the form data when the user leaves the page
// window.addEventListener('beforeunload', function(event) {
//     saveFormData();
// });

// // Load the form data when the page loads
// window.addEventListener('load', function(event) {
//     loadFormData();
// });