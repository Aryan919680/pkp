(function() {
  "use strict";

//   document.querySelectorAll('.enquire-now-btn').forEach(button => {
//   button.addEventListener('click', function () {
//     const productTitle = this.closest('.product-card')
//                              .querySelector('.product-title a')
//                              .textContent.trim();

//     // Set product name
//     document.getElementById('productName').value = productTitle;
   
//     // Show modal using Bootstrap
//     const inquiryModal = new bootstrap.Modal(document.getElementById('inquiryModal'));
//     inquiryModal.show();
//     console.log("test")
//   });
// });

  document.querySelectorAll('.request-sample').forEach(button => {
    console.log("here")
  button.addEventListener('click', function () {
    // const productTitle = this.closest('.product-card')
    //                          .querySelector('.product-title a')
    //                          .textContent.trim();

    // // Set product name
    // document.getElementById('productName').value = productTitle;

    // Show modal using Bootstrap
    const inquiryModal = new bootstrap.Modal(document.getElementById('requestModal'));
    inquiryModal.show();
  });
});
  const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan",
  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
  "Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Djibouti","Dominica","Dominican Republic",
  "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
  "Fiji","Finland","France",
  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guyana",
  "Haiti","Honduras","Hungary",
  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Jamaica","Japan","Jordan",
  "Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Lithuania","Luxembourg",
  "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
  "Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
  "Oman",
  "Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar",
  "Romania","Russia","Rwanda",
  "Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
  "Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan",
  "Vanuatu","Vatican City","Venezuela","Vietnam",
  "Yemen",
  "Zambia","Zimbabwe"
];

// Populate dropdown
const countrySelect = document.getElementById("countrySelect");
countries.forEach(country => {
  let option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

const scriptURL = "https://script.google.com/macros/s/AKfycbxZGCHv2bb9blEs3IxHvlKjX9VojSg2st0qIZ70rx8ep55bxd8SETHbkJQPBMqekpT_aQ/exec";

document.getElementById("inquiryFormButton").addEventListener("click", function(e) {
  e.preventDefault();

  const data = {
    sheetName: "enquiry form",
    productName: document.getElementById("productName").value,
    fullName: this.fullName.value,
    email: this.email.value,
    contact: this.contact.value,
    location: this.location.value,
    message: this.message.value
  };




  fetch("http://localhost:3000/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
})
.then(res => res.json())
    .then(result => {
      if (result.success) {
        alert("Inquiry submitted successfully!");
        this.reset();
        bootstrap.Modal.getInstance(document.getElementById("inquiryModal")).hide();
      } else {
        alert("Error: " + (result.error || "Unknown error"));
      }
    })
    .catch(console.error);

});




}());