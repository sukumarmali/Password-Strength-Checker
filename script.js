const inputBox = document.querySelector('.inputBox');
const submitBtn = document.querySelector('.btn');
const passwordStrengthDisplay = document.querySelector('h2');

submitBtn.addEventListener('click', function () {
  const password = inputBox.value;

  if (password.length < 8) {
    alert("Enter at least 8 characters!");
    clearInput();
    passwordStrengthDisplay.innerHTML = "Re-enter Password";
    return;
  }

  const containsDigit = /[0-9]/.test(password);
  const containsUppercase = /[A-Z]/.test(password);
  const containsLowercase = /[a-z]/.test(password);
  const containsSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

  let strengthPercentage = 0;

  if (containsDigit) strengthPercentage += 25;
  if (containsUppercase) strengthPercentage += 25;
  if (containsLowercase) strengthPercentage += 25;
  if (containsSymbol) strengthPercentage += 25;

  if (strengthPercentage === 100) {
    passwordStrengthDisplay.innerHTML = "Password Strength: 100%";
  } else if (strengthPercentage >= 75) {
    passwordStrengthDisplay.innerHTML = "Password Strength: 75%";
  } else if (strengthPercentage >= 50) {
    passwordStrengthDisplay.innerHTML = "Password Strength: 50%";
  } else {
    passwordStrengthDisplay.innerHTML = "Weak Password!";
  }
});

function clearInput() {
  inputBox.value = "";
}
