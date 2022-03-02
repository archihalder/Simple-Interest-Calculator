function compute() {
  var principal = parseFloat(document.getElementById("principal").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var years = parseInt(document.getElementById("years").value);
  var interest = (principal * rate * years) / 100;
  var future_year = new Date().getFullYear() + years;

  document.getElementById("result").innerHTML =
    "If you deposit <mark>" +
    principal +
    "</mark>,<br>" +
    "at an interest rate of <mark>" +
    rate +
    "%</mark>,<br>" +
    "You will receive an amount of <mark>" +
    interest +
    "</mark>,<br>" +
    "in the year <mark>" +
    future_year +
    "</mark>";
}

function updateRate() {
  var rv = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rv;
}

function validatePrincipal() {
  var principal = document.getElementById("principal").value;
  if (parseFloat(principal) <= 0 || isNaN(parseFloat(principal))) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  }
}
