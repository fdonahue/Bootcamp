window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // set up object of values to pull from
  const values = {
    amount: 1000,
    years: 10,
    rate: 4.5
  }

  // select values and assign them
  const loanAmount = document.getElementById("loan-amount");
  loanAmount.value = values.amount;

  const loanYears = document.getElementById("loan-years");
  loanYears.value = values.years;

  const loanRate = document.getElementById("loan-rate");
  loanAmount.value = values.rate;

  update();

}


// Get the current values from the UI
// Update the monthly payment
function update() {

  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));


}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //periodic int rate
  const monthlyRate = (values.rate / 100) / 12;
  // n = total # of payments
 const  n = (values.years * 12);
// return monthly payment: P*i/ ( 1-(1+i)^-n )
 return ( (values.amount * monthlyRate) / (1-Math.pow((1+monthlyRate),-n))
 //use .toFixed(2) to change into string up to 2 decimals
 ).toFixed(2);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
}
