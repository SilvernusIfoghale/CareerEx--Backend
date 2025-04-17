// 1. Function to check if a student passed based on their score
function checkPass(score) {
  console.log(score >= 180 ? "Passed" : "Failed");
}

// 2. Function to check voting eligibility based on age
function checkVotingEligibility(age) {
  return age >= 18 ? "You are eligible to vote" : "Not eligible";
}

// 3. Function to evaluate score and return performance level
function evaluateScore(name, score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Good";
  } else if (score >= 50) {
    return "Average";
  } else {
    return "Fail";
  }
}

// 4. Function to check access based on ID and age
function checkAccess(hasID, isAbove18) {
  return hasID && isAbove18 ? "Access granted" : "Access denied";
}

// 5. Function to evaluate an array of student scores
function evaluateScores(scores) {
  for (let score of scores) {
    console.log(score > 50 ? "Pass" : "Fail");
  }
}

// 6. Arrow function to check if a student passed both Math and English
const checkMathEnglishPass = (mathScore, englishScore) => {
  return mathScore >= 50 && englishScore >= 50 ? "Yes" : "No";
};

// 7. Function to check if a user has either an email or a phone number
function checkContactInfo(email, phone) {
  return email || phone
    ? "User  can sign up"
    : "User  must provide an email or phone number";
}

// 8. Function to validate username and password
function validateCredentials(username, password) {
  return username === "" || password === "" ? "Invalid input" : "Valid input";
}

// 9. Function to determine employment type based on hours worked
function determineEmploymentType(hoursWorked) {
  return hoursWorked >= 40 ? "Full-time" : "Part-time";
}

// 10. Arrow function to return the larger of two numbers
const getLargerNumber = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

// Example usage
checkPass(190); // "Passed"
console.log(checkVotingEligibility(17)); // "Not eligible"
console.log(evaluateScore("John", 85)); // "Good"
console.log(checkAccess(true, false)); // "Access denied"
evaluateScores([55, 45, 70, 30]); // "Pass", "Fail", "Pass", "Fail"
console.log(checkMathEnglishPass(60, 70)); // "Yes"
console.log(checkContactInfo("", "1234567890")); // "User  can sign up"
console.log(validateCredentials("user", "")); // "Invalid input"
console.log(determineEmploymentType(35)); // "Part-time"
console.log(getLargerNumber(10, 20)); // 20
