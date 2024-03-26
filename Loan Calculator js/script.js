document.getElementById('calculateBtn').addEventListener('click', calculateLoan);

function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
  const interestRate = parseFloat(document.getElementById("interestRateInput").value); // Corrected variable name
  const loanTerm = parseFloat(document.getElementById("loanTermInput").value); // Corrected variable name

  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert("Please Enter Valid Numbers for all Fields");
    return; // Added return statement to exit the function early if there are errors
  }

  const monthlyInterest = interestRate / 100 / 12;
  const totalPayments = loanTerm; // Corrected variable name
  const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));

  const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

  displayResult(monthlyPayment, totalInterest); // Corrected function name
}

function displayResult(monthlyPayment, totalInterest) { // Corrected function name
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = `
    <p><strong>Monthly payment: ${monthlyPayment.toFixed(2)}</strong></p>
    <p><strong>Total Interest: ${totalInterest.toFixed(2)}</strong></p>
  `;
}
