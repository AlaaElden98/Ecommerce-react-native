const ruleValidatorMapper = {
  isPhone: validatePhone,
  isMinimumChars: validateMinimumChars,
  isConfirmationCode: validateConfirmationCode,
};

function validateMinimumChars(value, {minimumChars}) {
  return value.length >= minimumChars;
}
function validateConfirmationCode(userInput) {
  if (userInput.length !== 4) {
    return false;
  }

  return /^[0-9]+$/.test(userInput);
}

function validatePhone(value) {
  if (value.length !== 11) {
    return false;
  }
  return /^[0-9]+$/.test(value);
}

export function validate(userInput, rules) {
  let isValid = true;
  for (let rule of rules) {
    isValid = isValid && ruleValidatorMapper[rule.key](userInput, rule);
  }
  return isValid;
}
