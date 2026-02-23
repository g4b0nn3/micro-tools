// Free Tools
function generatePassword() {
  const length = document.getElementById('pwLength').value || 8;
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('pwOutput').innerText = password;
}

function convertMeters() {
  const meters = parseFloat(document.getElementById('meters').value);
  if (!isNaN(meters)) {
    document.getElementById('feetOutput').innerText = (meters * 3.28084).toFixed(2) + " ft";
  }
}

// Premium Tools
function calculateBudget() {
  const income = parseFloat(document.getElementById('income').value);
  const expenses = parseFloat(document.getElementById('expenses').value);
  if (!isNaN(income) && !isNaN(expenses)) {
    document.getElementById('budgetOutput').innerText = "Savings: $" + (income - expenses).toFixed(2);
  }
}

// Unlock Premium Tool (to be called after Stripe/PayPal payment)
function unlockPremium() {
  document.getElementById('premiumTool').style.display = 'block';
}