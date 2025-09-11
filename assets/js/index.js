(function() {
  "use strict";
document.addEventListener('DOMContentLoaded', () => {
  // Inquiry Modal
  const inquiryModalEl = document.getElementById('inquiryModal');
  if (inquiryModalEl) {
    const inquiryModal = new bootstrap.Modal(inquiryModalEl);

    inquiryModalEl.addEventListener('hidden.bs.modal', () => {
      document.getElementById('inquiryForm')?.reset();
    });

    document.querySelectorAll('.enquire-now-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const productTitle = btn.closest('.product-card')
                               .querySelector('.product-title a')
                               .textContent.trim();
        document.getElementById('inquiryProductName').value = productTitle;

        // Hide any open modal before showing this one
        document.querySelectorAll('.modal.show').forEach(openEl => {
          if (openEl !== inquiryModalEl) {
            bootstrap.Modal.getInstance(openEl)?.hide();
          }
        });

        inquiryModal.show();
      });
    });
  }

  // Request Modal
  const requestModalEl = document.getElementById('requestModal');
  if (requestModalEl) {
    const requestModal = new bootstrap.Modal(requestModalEl);

    requestModalEl.addEventListener('hidden.bs.modal', () => {
      document.getElementById('requestForm')?.reset();
    });

    document.querySelectorAll('.request-now-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const productTitle = btn.closest('.product-card')
                               .querySelector('.product-title a')
                               .textContent.trim();
        document.getElementById('requestProductName').value = productTitle;

        // Hide any open modal before showing this one
        document.querySelectorAll('.modal.show').forEach(openEl => {
          if (openEl !== requestModalEl) {
            bootstrap.Modal.getInstance(openEl)?.hide();
          }
        });

        requestModal.show();
      });
    });
  }
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
const form = document.getElementById("inquiryForm");
console.log(form)
  const data = {
    sheetName: "enquiry form",
    productName: document.getElementById("productName").value,
    fullName: form.querySelector("[name='fullName']").value,
    email: form.querySelector("[name='email']").value,
    contact: form.querySelector("[name='contact']").value,
    location: form.querySelector("[name='location']").value,
    message: form.querySelector("[name='message']").value,
  };




  fetch("https://pkp-backend.onrender.com/submit", {
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