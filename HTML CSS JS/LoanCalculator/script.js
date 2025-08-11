function calculateLoan() {
    const LoanAmt = parseFloat(document.querySelector(".loanAmt").value);
    const rate = parseFloat(document.querySelector(".rate").value);
    const months = parseFloat(document.querySelector(".months").value);

    let interest = (LoanAmt * (rate *(months/12))) * 0.01;
    const total = LoanAmt+interest
    let monthlyPayment = (total / months).toFixed(2);

    const payment = document.querySelector(".payment");

    payment.innerHTML = `Monthly Payment: ${monthlyPayment}`;
}